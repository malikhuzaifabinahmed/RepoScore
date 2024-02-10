import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'STARTUPEMPLOMENT_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPEMPLOMENT_FORM_FIND_STARTED',
      });

      axios.get(`/startupemploment/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'STARTUPEMPLOMENT_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPEMPLOMENT_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/startupemploment'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPEMPLOMENT_FORM_CREATE_STARTED',
      });

      axios.post('/startupemploment', { data: values }).then((res) => {
        dispatch({
          type: 'STARTUPEMPLOMENT_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Startupemploment created' });
        dispatch(push('/admin/startupemploment'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPEMPLOMENT_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'STARTUPEMPLOMENT_FORM_UPDATE_STARTED',
      });

      await axios.put(`/startupemploment/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'STARTUPEMPLOMENT_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Startupemploment updated' });
        dispatch(push('/admin/startupemploment'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Startupemploment update error' });
      dispatch({
        type: 'STARTUPEMPLOMENT_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
