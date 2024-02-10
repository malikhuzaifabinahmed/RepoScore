import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'TRAININGS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'TRAININGS_FORM_FIND_STARTED',
      });

      axios.get(`/trainings/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'TRAININGS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TRAININGS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/trainings'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'TRAININGS_FORM_CREATE_STARTED',
      });

      axios.post('/trainings', { data: values }).then((res) => {
        dispatch({
          type: 'TRAININGS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Trainings created' });
        dispatch(push('/admin/trainings'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TRAININGS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'TRAININGS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/trainings/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'TRAININGS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Trainings updated' });
        dispatch(push('/admin/trainings'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Trainings update error' });
      dispatch({
        type: 'TRAININGS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
