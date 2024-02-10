import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'RESEARCHPROPOSALANDGRANTS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'RESEARCHPROPOSALANDGRANTS_FORM_FIND_STARTED',
      });

      axios.get(`/researchproposalandgrants/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'RESEARCHPROPOSALANDGRANTS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'RESEARCHPROPOSALANDGRANTS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/researchproposalandgrants'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'RESEARCHPROPOSALANDGRANTS_FORM_CREATE_STARTED',
      });

      axios.post('/researchproposalandgrants', { data: values }).then((res) => {
        dispatch({
          type: 'RESEARCHPROPOSALANDGRANTS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({
          type: 'success',
          message: 'Researchproposalandgrants created',
        });
        dispatch(push('/admin/researchproposalandgrants'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'RESEARCHPROPOSALANDGRANTS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'RESEARCHPROPOSALANDGRANTS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/researchproposalandgrants/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'RESEARCHPROPOSALANDGRANTS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Researchproposalandgrants updated',
        });
        dispatch(push('/admin/researchproposalandgrants'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Researchproposalandgrants update error',
      });
      dispatch({
        type: 'RESEARCHPROPOSALANDGRANTS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
