import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'BICDATA_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'BICDATA_FORM_FIND_STARTED',
      });

      axios.get(`/bicdata/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'BICDATA_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BICDATA_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/bicdata'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'BICDATA_FORM_CREATE_STARTED',
      });

      axios.post('/bicdata', { data: values }).then((res) => {
        dispatch({
          type: 'BICDATA_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Bicdata created' });
        dispatch(push('/admin/bicdata'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BICDATA_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'BICDATA_FORM_UPDATE_STARTED',
      });

      await axios.put(`/bicdata/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'BICDATA_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Bicdata updated' });
        dispatch(push('/admin/bicdata'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Bicdata update error' });
      dispatch({
        type: 'BICDATA_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
