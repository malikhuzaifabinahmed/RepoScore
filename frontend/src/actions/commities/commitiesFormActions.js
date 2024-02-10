import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'COMMITIES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'COMMITIES_FORM_FIND_STARTED',
      });

      axios.get(`/commities/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'COMMITIES_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'COMMITIES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/commities'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'COMMITIES_FORM_CREATE_STARTED',
      });

      axios.post('/commities', { data: values }).then((res) => {
        dispatch({
          type: 'COMMITIES_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Commities created' });
        dispatch(push('/admin/commities'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'COMMITIES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'COMMITIES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/commities/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'COMMITIES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Commities updated' });
        dispatch(push('/admin/commities'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Commities update error' });
      dispatch({
        type: 'COMMITIES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
