import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'STARTUPMENTORING_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPMENTORING_FORM_FIND_STARTED',
      });

      axios.get(`/startupmentoring/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'STARTUPMENTORING_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPMENTORING_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/startupmentoring'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPMENTORING_FORM_CREATE_STARTED',
      });

      axios.post('/startupmentoring', { data: values }).then((res) => {
        dispatch({
          type: 'STARTUPMENTORING_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Startupmentoring created' });
        dispatch(push('/admin/startupmentoring'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPMENTORING_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'STARTUPMENTORING_FORM_UPDATE_STARTED',
      });

      await axios.put(`/startupmentoring/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'STARTUPMENTORING_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Startupmentoring updated' });
        dispatch(push('/admin/startupmentoring'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Startupmentoring update error' });
      dispatch({
        type: 'STARTUPMENTORING_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
