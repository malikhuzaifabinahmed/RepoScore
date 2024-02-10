import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'ENGAGEMENTEVENTS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'ENGAGEMENTEVENTS_FORM_FIND_STARTED',
      });

      axios.get(`/engagementevents/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'ENGAGEMENTEVENTS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'ENGAGEMENTEVENTS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/engagementevents'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'ENGAGEMENTEVENTS_FORM_CREATE_STARTED',
      });

      axios.post('/engagementevents', { data: values }).then((res) => {
        dispatch({
          type: 'ENGAGEMENTEVENTS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Engagementevents created' });
        dispatch(push('/admin/engagementevents'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'ENGAGEMENTEVENTS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ENGAGEMENTEVENTS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/engagementevents/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'ENGAGEMENTEVENTS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Engagementevents updated' });
        dispatch(push('/admin/engagementevents'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Engagementevents update error' });
      dispatch({
        type: 'ENGAGEMENTEVENTS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
