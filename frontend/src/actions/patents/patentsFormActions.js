import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'PATENTS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'PATENTS_FORM_FIND_STARTED',
      });

      axios.get(`/patents/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'PATENTS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PATENTS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/patents'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'PATENTS_FORM_CREATE_STARTED',
      });

      axios.post('/patents', { data: values }).then((res) => {
        dispatch({
          type: 'PATENTS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Patents created' });
        dispatch(push('/admin/patents'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PATENTS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'PATENTS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/patents/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'PATENTS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Patents updated' });
        dispatch(push('/admin/patents'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Patents update error' });
      dispatch({
        type: 'PATENTS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
