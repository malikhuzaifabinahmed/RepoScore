import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'COURSEDETAILSINFO_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'COURSEDETAILSINFO_FORM_FIND_STARTED',
      });

      axios.get(`/coursedetailsinfo/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'COURSEDETAILSINFO_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'COURSEDETAILSINFO_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/coursedetailsinfo'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'COURSEDETAILSINFO_FORM_CREATE_STARTED',
      });

      axios.post('/coursedetailsinfo', { data: values }).then((res) => {
        dispatch({
          type: 'COURSEDETAILSINFO_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Coursedetailsinfo created' });
        dispatch(push('/admin/coursedetailsinfo'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'COURSEDETAILSINFO_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'COURSEDETAILSINFO_FORM_UPDATE_STARTED',
      });

      await axios.put(`/coursedetailsinfo/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'COURSEDETAILSINFO_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Coursedetailsinfo updated' });
        dispatch(push('/admin/coursedetailsinfo'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Coursedetailsinfo update error',
      });
      dispatch({
        type: 'COURSEDETAILSINFO_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
