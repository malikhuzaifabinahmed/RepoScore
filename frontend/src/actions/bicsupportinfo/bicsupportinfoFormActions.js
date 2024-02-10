import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'BICSUPPORTINFO_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'BICSUPPORTINFO_FORM_FIND_STARTED',
      });

      axios.get(`/bicsupportinfo/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'BICSUPPORTINFO_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BICSUPPORTINFO_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/bicsupportinfo'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'BICSUPPORTINFO_FORM_CREATE_STARTED',
      });

      axios.post('/bicsupportinfo', { data: values }).then((res) => {
        dispatch({
          type: 'BICSUPPORTINFO_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Bicsupportinfo created' });
        dispatch(push('/admin/bicsupportinfo'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BICSUPPORTINFO_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'BICSUPPORTINFO_FORM_UPDATE_STARTED',
      });

      await axios.put(`/bicsupportinfo/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'BICSUPPORTINFO_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Bicsupportinfo updated' });
        dispatch(push('/admin/bicsupportinfo'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Bicsupportinfo update error' });
      dispatch({
        type: 'BICSUPPORTINFO_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
