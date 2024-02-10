import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'BICSERVICEOFFERINGINFO_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'BICSERVICEOFFERINGINFO_FORM_FIND_STARTED',
      });

      axios.get(`/bicserviceofferinginfo/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'BICSERVICEOFFERINGINFO_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BICSERVICEOFFERINGINFO_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/bicserviceofferinginfo'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'BICSERVICEOFFERINGINFO_FORM_CREATE_STARTED',
      });

      axios.post('/bicserviceofferinginfo', { data: values }).then((res) => {
        dispatch({
          type: 'BICSERVICEOFFERINGINFO_FORM_CREATE_SUCCESS',
        });
        showSnackbar({
          type: 'success',
          message: 'Bicserviceofferinginfo created',
        });
        dispatch(push('/admin/bicserviceofferinginfo'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BICSERVICEOFFERINGINFO_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'BICSERVICEOFFERINGINFO_FORM_UPDATE_STARTED',
      });

      await axios.put(`/bicserviceofferinginfo/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'BICSERVICEOFFERINGINFO_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Bicserviceofferinginfo updated',
        });
        dispatch(push('/admin/bicserviceofferinginfo'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Bicserviceofferinginfo update error',
      });
      dispatch({
        type: 'BICSERVICEOFFERINGINFO_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
