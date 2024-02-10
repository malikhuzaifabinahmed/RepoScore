import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'POLICYADVOCACY_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'POLICYADVOCACY_FORM_FIND_STARTED',
      });

      axios.get(`/policyadvocacy/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'POLICYADVOCACY_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'POLICYADVOCACY_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/policyadvocacy'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'POLICYADVOCACY_FORM_CREATE_STARTED',
      });

      axios.post('/policyadvocacy', { data: values }).then((res) => {
        dispatch({
          type: 'POLICYADVOCACY_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Policyadvocacy created' });
        dispatch(push('/admin/policyadvocacy'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'POLICYADVOCACY_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'POLICYADVOCACY_FORM_UPDATE_STARTED',
      });

      await axios.put(`/policyadvocacy/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'POLICYADVOCACY_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Policyadvocacy updated' });
        dispatch(push('/admin/policyadvocacy'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Policyadvocacy update error' });
      dispatch({
        type: 'POLICYADVOCACY_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
