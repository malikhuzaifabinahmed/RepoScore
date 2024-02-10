import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'ORICDATA_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'ORICDATA_FORM_FIND_STARTED',
      });

      axios.get(`/oricdata/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'ORICDATA_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'ORICDATA_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/oricdata'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'ORICDATA_FORM_CREATE_STARTED',
      });

      axios.post('/oricdata', { data: values }).then((res) => {
        dispatch({
          type: 'ORICDATA_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Oricdata created' });
        dispatch(push('/admin/oricdata'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'ORICDATA_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ORICDATA_FORM_UPDATE_STARTED',
      });

      await axios.put(`/oricdata/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'ORICDATA_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Oricdata updated' });
        dispatch(push('/admin/oricdata'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Oricdata update error' });
      dispatch({
        type: 'ORICDATA_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
