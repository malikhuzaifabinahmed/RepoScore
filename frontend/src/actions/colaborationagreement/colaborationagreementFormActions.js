import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'COLABORATIONAGREEMENT_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'COLABORATIONAGREEMENT_FORM_FIND_STARTED',
      });

      axios.get(`/colaborationagreement/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'COLABORATIONAGREEMENT_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'COLABORATIONAGREEMENT_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/colaborationagreement'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'COLABORATIONAGREEMENT_FORM_CREATE_STARTED',
      });

      axios.post('/colaborationagreement', { data: values }).then((res) => {
        dispatch({
          type: 'COLABORATIONAGREEMENT_FORM_CREATE_SUCCESS',
        });
        showSnackbar({
          type: 'success',
          message: 'Colaborationagreement created',
        });
        dispatch(push('/admin/colaborationagreement'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'COLABORATIONAGREEMENT_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'COLABORATIONAGREEMENT_FORM_UPDATE_STARTED',
      });

      await axios.put(`/colaborationagreement/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'COLABORATIONAGREEMENT_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Colaborationagreement updated',
        });
        dispatch(push('/admin/colaborationagreement'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Colaborationagreement update error',
      });
      dispatch({
        type: 'COLABORATIONAGREEMENT_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
