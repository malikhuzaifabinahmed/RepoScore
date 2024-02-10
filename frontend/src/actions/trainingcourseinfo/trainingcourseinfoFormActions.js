import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'TRAININGCOURSEINFO_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'TRAININGCOURSEINFO_FORM_FIND_STARTED',
      });

      axios.get(`/trainingcourseinfo/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'TRAININGCOURSEINFO_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TRAININGCOURSEINFO_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/trainingcourseinfo'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'TRAININGCOURSEINFO_FORM_CREATE_STARTED',
      });

      axios.post('/trainingcourseinfo', { data: values }).then((res) => {
        dispatch({
          type: 'TRAININGCOURSEINFO_FORM_CREATE_SUCCESS',
        });
        showSnackbar({
          type: 'success',
          message: 'Trainingcourseinfo created',
        });
        dispatch(push('/admin/trainingcourseinfo'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TRAININGCOURSEINFO_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'TRAININGCOURSEINFO_FORM_UPDATE_STARTED',
      });

      await axios.put(`/trainingcourseinfo/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'TRAININGCOURSEINFO_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Trainingcourseinfo updated',
        });
        dispatch(push('/admin/trainingcourseinfo'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Trainingcourseinfo update error',
      });
      dispatch({
        type: 'TRAININGCOURSEINFO_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
