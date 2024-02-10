import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'HUMANRESOURCE_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'HUMANRESOURCE_FORM_FIND_STARTED',
      });

      axios.get(`/humanresource/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'HUMANRESOURCE_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'HUMANRESOURCE_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/humanresource'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'HUMANRESOURCE_FORM_CREATE_STARTED',
      });

      axios.post('/humanresource', { data: values }).then((res) => {
        dispatch({
          type: 'HUMANRESOURCE_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Humanresource created' });
        dispatch(push('/admin/humanresource'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'HUMANRESOURCE_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'HUMANRESOURCE_FORM_UPDATE_STARTED',
      });

      await axios.put(`/humanresource/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'HUMANRESOURCE_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Humanresource updated' });
        dispatch(push('/admin/humanresource'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Humanresource update error' });
      dispatch({
        type: 'HUMANRESOURCE_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
