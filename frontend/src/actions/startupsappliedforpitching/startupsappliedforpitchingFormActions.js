import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'STARTUPSAPPLIEDFORPITCHING_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPSAPPLIEDFORPITCHING_FORM_FIND_STARTED',
      });

      axios.get(`/startupsappliedforpitching/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'STARTUPSAPPLIEDFORPITCHING_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPSAPPLIEDFORPITCHING_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/startupsappliedforpitching'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPSAPPLIEDFORPITCHING_FORM_CREATE_STARTED',
      });

      axios
        .post('/startupsappliedforpitching', { data: values })
        .then((res) => {
          dispatch({
            type: 'STARTUPSAPPLIEDFORPITCHING_FORM_CREATE_SUCCESS',
          });
          showSnackbar({
            type: 'success',
            message: 'Startupsappliedforpitching created',
          });
          dispatch(push('/admin/startupsappliedforpitching'));
        });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPSAPPLIEDFORPITCHING_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'STARTUPSAPPLIEDFORPITCHING_FORM_UPDATE_STARTED',
      });

      await axios.put(`/startupsappliedforpitching/${id}`, {
        id,
        data: values,
      });

      dispatch(doInit());

      dispatch({
        type: 'STARTUPSAPPLIEDFORPITCHING_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Startupsappliedforpitching updated',
        });
        dispatch(push('/admin/startupsappliedforpitching'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Startupsappliedforpitching update error',
      });
      dispatch({
        type: 'STARTUPSAPPLIEDFORPITCHING_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
