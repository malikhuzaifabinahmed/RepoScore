import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'RESEARCHLINKS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'RESEARCHLINKS_FORM_FIND_STARTED',
      });

      axios.get(`/researchlinks/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'RESEARCHLINKS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'RESEARCHLINKS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/researchlinks'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'RESEARCHLINKS_FORM_CREATE_STARTED',
      });

      axios.post('/researchlinks', { data: values }).then((res) => {
        dispatch({
          type: 'RESEARCHLINKS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Researchlinks created' });
        dispatch(push('/admin/researchlinks'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'RESEARCHLINKS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'RESEARCHLINKS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/researchlinks/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'RESEARCHLINKS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Researchlinks updated' });
        dispatch(push('/admin/researchlinks'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Researchlinks update error' });
      dispatch({
        type: 'RESEARCHLINKS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
