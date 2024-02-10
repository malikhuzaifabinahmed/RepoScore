import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'UNIVERSITY_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'UNIVERSITY_FORM_FIND_STARTED',
      });

      axios.get(`/university/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'UNIVERSITY_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'UNIVERSITY_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/university'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'UNIVERSITY_FORM_CREATE_STARTED',
      });

      axios.post('/university', { data: values }).then((res) => {
        dispatch({
          type: 'UNIVERSITY_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'University created' });
        dispatch(push('/admin/university'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'UNIVERSITY_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'UNIVERSITY_FORM_UPDATE_STARTED',
      });

      await axios.put(`/university/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'UNIVERSITY_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'University updated' });
        dispatch(push('/admin/university'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'University update error' });
      dispatch({
        type: 'UNIVERSITY_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
