import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'STARTUPREVENUE_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPREVENUE_FORM_FIND_STARTED',
      });

      axios.get(`/startuprevenue/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'STARTUPREVENUE_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPREVENUE_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/startuprevenue'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPREVENUE_FORM_CREATE_STARTED',
      });

      axios.post('/startuprevenue', { data: values }).then((res) => {
        dispatch({
          type: 'STARTUPREVENUE_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Startuprevenue created' });
        dispatch(push('/admin/startuprevenue'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPREVENUE_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'STARTUPREVENUE_FORM_UPDATE_STARTED',
      });

      await axios.put(`/startuprevenue/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'STARTUPREVENUE_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Startuprevenue updated' });
        dispatch(push('/admin/startuprevenue'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Startuprevenue update error' });
      dispatch({
        type: 'STARTUPREVENUE_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
