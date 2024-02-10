import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'SPINOFFSTARTUPS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'SPINOFFSTARTUPS_FORM_FIND_STARTED',
      });

      axios.get(`/spinoffstartups/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'SPINOFFSTARTUPS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'SPINOFFSTARTUPS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/spinoffstartups'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'SPINOFFSTARTUPS_FORM_CREATE_STARTED',
      });

      axios.post('/spinoffstartups', { data: values }).then((res) => {
        dispatch({
          type: 'SPINOFFSTARTUPS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Spinoffstartups created' });
        dispatch(push('/admin/spinoffstartups'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'SPINOFFSTARTUPS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'SPINOFFSTARTUPS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/spinoffstartups/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'SPINOFFSTARTUPS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Spinoffstartups updated' });
        dispatch(push('/admin/spinoffstartups'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Spinoffstartups update error' });
      dispatch({
        type: 'SPINOFFSTARTUPS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
