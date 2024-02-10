import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'WORKSHOPEVENTINFO_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'WORKSHOPEVENTINFO_FORM_FIND_STARTED',
      });

      axios.get(`/workshopeventinfo/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'WORKSHOPEVENTINFO_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'WORKSHOPEVENTINFO_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/workshopeventinfo'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'WORKSHOPEVENTINFO_FORM_CREATE_STARTED',
      });

      axios.post('/workshopeventinfo', { data: values }).then((res) => {
        dispatch({
          type: 'WORKSHOPEVENTINFO_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Workshopeventinfo created' });
        dispatch(push('/admin/workshopeventinfo'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'WORKSHOPEVENTINFO_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'WORKSHOPEVENTINFO_FORM_UPDATE_STARTED',
      });

      await axios.put(`/workshopeventinfo/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'WORKSHOPEVENTINFO_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Workshopeventinfo updated' });
        dispatch(push('/admin/workshopeventinfo'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Workshopeventinfo update error',
      });
      dispatch({
        type: 'WORKSHOPEVENTINFO_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
