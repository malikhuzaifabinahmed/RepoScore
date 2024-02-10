import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'ACTIVEGRADUATEDSTARTUPINFO_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'ACTIVEGRADUATEDSTARTUPINFO_FORM_FIND_STARTED',
      });

      axios.get(`/activegraduatedstartupinfo/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'ACTIVEGRADUATEDSTARTUPINFO_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'ACTIVEGRADUATEDSTARTUPINFO_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/activegraduatedstartupinfo'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'ACTIVEGRADUATEDSTARTUPINFO_FORM_CREATE_STARTED',
      });

      axios
        .post('/activegraduatedstartupinfo', { data: values })
        .then((res) => {
          dispatch({
            type: 'ACTIVEGRADUATEDSTARTUPINFO_FORM_CREATE_SUCCESS',
          });
          showSnackbar({
            type: 'success',
            message: 'Activegraduatedstartupinfo created',
          });
          dispatch(push('/admin/activegraduatedstartupinfo'));
        });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'ACTIVEGRADUATEDSTARTUPINFO_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ACTIVEGRADUATEDSTARTUPINFO_FORM_UPDATE_STARTED',
      });

      await axios.put(`/activegraduatedstartupinfo/${id}`, {
        id,
        data: values,
      });

      dispatch(doInit());

      dispatch({
        type: 'ACTIVEGRADUATEDSTARTUPINFO_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Activegraduatedstartupinfo updated',
        });
        dispatch(push('/admin/activegraduatedstartupinfo'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Activegraduatedstartupinfo update error',
      });
      dispatch({
        type: 'ACTIVEGRADUATEDSTARTUPINFO_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
