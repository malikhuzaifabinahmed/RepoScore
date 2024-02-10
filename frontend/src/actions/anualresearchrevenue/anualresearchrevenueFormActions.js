import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'ANUALRESEARCHREVENUE_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'ANUALRESEARCHREVENUE_FORM_FIND_STARTED',
      });

      axios.get(`/anualresearchrevenue/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'ANUALRESEARCHREVENUE_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'ANUALRESEARCHREVENUE_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/anualresearchrevenue'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'ANUALRESEARCHREVENUE_FORM_CREATE_STARTED',
      });

      axios.post('/anualresearchrevenue', { data: values }).then((res) => {
        dispatch({
          type: 'ANUALRESEARCHREVENUE_FORM_CREATE_SUCCESS',
        });
        showSnackbar({
          type: 'success',
          message: 'Anualresearchrevenue created',
        });
        dispatch(push('/admin/anualresearchrevenue'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'ANUALRESEARCHREVENUE_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ANUALRESEARCHREVENUE_FORM_UPDATE_STARTED',
      });

      await axios.put(`/anualresearchrevenue/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'ANUALRESEARCHREVENUE_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Anualresearchrevenue updated',
        });
        dispatch(push('/admin/anualresearchrevenue'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Anualresearchrevenue update error',
      });
      dispatch({
        type: 'ANUALRESEARCHREVENUE_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
