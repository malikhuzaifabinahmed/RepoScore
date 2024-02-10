import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'STARTUPEVENTS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPEVENTS_FORM_FIND_STARTED',
      });

      axios.get(`/startupevents/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'STARTUPEVENTS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPEVENTS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/startupevents'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPEVENTS_FORM_CREATE_STARTED',
      });

      axios.post('/startupevents', { data: values }).then((res) => {
        dispatch({
          type: 'STARTUPEVENTS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Startupevents created' });
        dispatch(push('/admin/startupevents'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPEVENTS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'STARTUPEVENTS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/startupevents/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'STARTUPEVENTS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Startupevents updated' });
        dispatch(push('/admin/startupevents'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Startupevents update error' });
      dispatch({
        type: 'STARTUPEVENTS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
