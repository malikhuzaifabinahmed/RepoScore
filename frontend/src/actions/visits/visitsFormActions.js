import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VISITS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VISITS_FORM_FIND_STARTED',
      });

      axios.get(`/visits/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VISITS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VISITS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/visits'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VISITS_FORM_CREATE_STARTED',
      });

      axios.post('/visits', { data: values }).then((res) => {
        dispatch({
          type: 'VISITS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Visits created' });
        dispatch(push('/admin/visits'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VISITS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VISITS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/visits/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'VISITS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Visits updated' });
        dispatch(push('/admin/visits'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Visits update error' });
      dispatch({
        type: 'VISITS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
