import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'PARTNERSHIPINFO_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'PARTNERSHIPINFO_FORM_FIND_STARTED',
      });

      axios.get(`/partnershipinfo/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'PARTNERSHIPINFO_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PARTNERSHIPINFO_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/partnershipinfo'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'PARTNERSHIPINFO_FORM_CREATE_STARTED',
      });

      axios.post('/partnershipinfo', { data: values }).then((res) => {
        dispatch({
          type: 'PARTNERSHIPINFO_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Partnershipinfo created' });
        dispatch(push('/admin/partnershipinfo'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PARTNERSHIPINFO_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'PARTNERSHIPINFO_FORM_UPDATE_STARTED',
      });

      await axios.put(`/partnershipinfo/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'PARTNERSHIPINFO_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Partnershipinfo updated' });
        dispatch(push('/admin/partnershipinfo'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Partnershipinfo update error' });
      dispatch({
        type: 'PARTNERSHIPINFO_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
