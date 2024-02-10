import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'GRADUATEDSTARTUPFACILITATIONINFO_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'GRADUATEDSTARTUPFACILITATIONINFO_FORM_FIND_STARTED',
      });

      axios.get(`/graduatedstartupfacilitationinfo/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'GRADUATEDSTARTUPFACILITATIONINFO_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'GRADUATEDSTARTUPFACILITATIONINFO_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/graduatedstartupfacilitationinfo'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'GRADUATEDSTARTUPFACILITATIONINFO_FORM_CREATE_STARTED',
      });

      axios
        .post('/graduatedstartupfacilitationinfo', { data: values })
        .then((res) => {
          dispatch({
            type: 'GRADUATEDSTARTUPFACILITATIONINFO_FORM_CREATE_SUCCESS',
          });
          showSnackbar({
            type: 'success',
            message: 'Graduatedstartupfacilitationinfo created',
          });
          dispatch(push('/admin/graduatedstartupfacilitationinfo'));
        });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'GRADUATEDSTARTUPFACILITATIONINFO_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'GRADUATEDSTARTUPFACILITATIONINFO_FORM_UPDATE_STARTED',
      });

      await axios.put(`/graduatedstartupfacilitationinfo/${id}`, {
        id,
        data: values,
      });

      dispatch(doInit());

      dispatch({
        type: 'GRADUATEDSTARTUPFACILITATIONINFO_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Graduatedstartupfacilitationinfo updated',
        });
        dispatch(push('/admin/graduatedstartupfacilitationinfo'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Graduatedstartupfacilitationinfo update error',
      });
      dispatch({
        type: 'GRADUATEDSTARTUPFACILITATIONINFO_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
