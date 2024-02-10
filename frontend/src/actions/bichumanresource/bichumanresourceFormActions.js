import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'BICHUMANRESOURCE_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'BICHUMANRESOURCE_FORM_FIND_STARTED',
      });

      axios.get(`/bichumanresource/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'BICHUMANRESOURCE_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BICHUMANRESOURCE_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/bichumanresource'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'BICHUMANRESOURCE_FORM_CREATE_STARTED',
      });

      axios.post('/bichumanresource', { data: values }).then((res) => {
        dispatch({
          type: 'BICHUMANRESOURCE_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Bichumanresource created' });
        dispatch(push('/admin/bichumanresource'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BICHUMANRESOURCE_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'BICHUMANRESOURCE_FORM_UPDATE_STARTED',
      });

      await axios.put(`/bichumanresource/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'BICHUMANRESOURCE_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Bichumanresource updated' });
        dispatch(push('/admin/bichumanresource'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Bichumanresource update error' });
      dispatch({
        type: 'BICHUMANRESOURCE_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
