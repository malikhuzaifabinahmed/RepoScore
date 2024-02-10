import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'STARTUPSINCUBATED_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPSINCUBATED_FORM_FIND_STARTED',
      });

      axios.get(`/startupsincubated/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'STARTUPSINCUBATED_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPSINCUBATED_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/startupsincubated'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPSINCUBATED_FORM_CREATE_STARTED',
      });

      axios.post('/startupsincubated', { data: values }).then((res) => {
        dispatch({
          type: 'STARTUPSINCUBATED_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Startupsincubated created' });
        dispatch(push('/admin/startupsincubated'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPSINCUBATED_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'STARTUPSINCUBATED_FORM_UPDATE_STARTED',
      });

      await axios.put(`/startupsincubated/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'STARTUPSINCUBATED_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Startupsincubated updated' });
        dispatch(push('/admin/startupsincubated'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Startupsincubated update error',
      });
      dispatch({
        type: 'STARTUPSINCUBATED_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
