import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'RESEARCHPOLICY_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'RESEARCHPOLICY_FORM_FIND_STARTED',
      });

      axios.get(`/researchpolicy/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'RESEARCHPOLICY_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'RESEARCHPOLICY_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/researchpolicy'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'RESEARCHPOLICY_FORM_CREATE_STARTED',
      });

      axios.post('/researchpolicy', { data: values }).then((res) => {
        dispatch({
          type: 'RESEARCHPOLICY_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Researchpolicy created' });
        dispatch(push('/admin/researchpolicy'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'RESEARCHPOLICY_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'RESEARCHPOLICY_FORM_UPDATE_STARTED',
      });

      await axios.put(`/researchpolicy/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'RESEARCHPOLICY_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Researchpolicy updated' });
        dispatch(push('/admin/researchpolicy'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Researchpolicy update error' });
      dispatch({
        type: 'RESEARCHPOLICY_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
