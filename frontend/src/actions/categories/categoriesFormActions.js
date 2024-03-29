import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'CATEGORIES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'CATEGORIES_FORM_FIND_STARTED',
      });

      axios.get(`/categories/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'CATEGORIES_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CATEGORIES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/categories'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'CATEGORIES_FORM_CREATE_STARTED',
      });

      axios.post('/categories', { data: values }).then((res) => {
        dispatch({
          type: 'CATEGORIES_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Categories created' });
        dispatch(push('/admin/categories'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CATEGORIES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'CATEGORIES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/categories/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'CATEGORIES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Categories updated' });
        dispatch(push('/admin/categories'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Categories update error' });
      dispatch({
        type: 'CATEGORIES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
