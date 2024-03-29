import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'MENTORSHIPINFO_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'MENTORSHIPINFO_FORM_FIND_STARTED',
      });

      axios.get(`/mentorshipinfo/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'MENTORSHIPINFO_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'MENTORSHIPINFO_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/mentorshipinfo'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'MENTORSHIPINFO_FORM_CREATE_STARTED',
      });

      axios.post('/mentorshipinfo', { data: values }).then((res) => {
        dispatch({
          type: 'MENTORSHIPINFO_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Mentorshipinfo created' });
        dispatch(push('/admin/mentorshipinfo'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'MENTORSHIPINFO_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'MENTORSHIPINFO_FORM_UPDATE_STARTED',
      });

      await axios.put(`/mentorshipinfo/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'MENTORSHIPINFO_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Mentorshipinfo updated' });
        dispatch(push('/admin/mentorshipinfo'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Mentorshipinfo update error' });
      dispatch({
        type: 'MENTORSHIPINFO_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
