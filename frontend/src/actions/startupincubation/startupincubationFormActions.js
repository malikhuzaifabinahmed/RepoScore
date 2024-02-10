import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'STARTUPINCUBATION_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPINCUBATION_FORM_FIND_STARTED',
      });

      axios.get(`/startupincubation/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'STARTUPINCUBATION_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPINCUBATION_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/startupincubation'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPINCUBATION_FORM_CREATE_STARTED',
      });

      axios.post('/startupincubation', { data: values }).then((res) => {
        dispatch({
          type: 'STARTUPINCUBATION_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Startupincubation created' });
        dispatch(push('/admin/startupincubation'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPINCUBATION_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'STARTUPINCUBATION_FORM_UPDATE_STARTED',
      });

      await axios.put(`/startupincubation/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'STARTUPINCUBATION_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Startupincubation updated' });
        dispatch(push('/admin/startupincubation'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Startupincubation update error',
      });
      dispatch({
        type: 'STARTUPINCUBATION_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
