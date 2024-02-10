import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'UNIVERSITYADVANCEDSTUDIESANDRESEARCHBOARD_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'UNIVERSITYADVANCEDSTUDIESANDRESEARCHBOARD_FORM_FIND_STARTED',
      });

      axios
        .get(`/universityadvancedstudiesandresearchboard/${id}`)
        .then((res) => {
          const record = res.data;

          dispatch({
            type: 'UNIVERSITYADVANCEDSTUDIESANDRESEARCHBOARD_FORM_FIND_SUCCESS',
            payload: record,
          });
        });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'UNIVERSITYADVANCEDSTUDIESANDRESEARCHBOARD_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/universityadvancedstudiesandresearchboard'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'UNIVERSITYADVANCEDSTUDIESANDRESEARCHBOARD_FORM_CREATE_STARTED',
      });

      axios
        .post('/universityadvancedstudiesandresearchboard', { data: values })
        .then((res) => {
          dispatch({
            type: 'UNIVERSITYADVANCEDSTUDIESANDRESEARCHBOARD_FORM_CREATE_SUCCESS',
          });
          showSnackbar({
            type: 'success',
            message: 'Universityadvancedstudiesandresearchboard created',
          });
          dispatch(push('/admin/universityadvancedstudiesandresearchboard'));
        });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'UNIVERSITYADVANCEDSTUDIESANDRESEARCHBOARD_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'UNIVERSITYADVANCEDSTUDIESANDRESEARCHBOARD_FORM_UPDATE_STARTED',
      });

      await axios.put(`/universityadvancedstudiesandresearchboard/${id}`, {
        id,
        data: values,
      });

      dispatch(doInit());

      dispatch({
        type: 'UNIVERSITYADVANCEDSTUDIESANDRESEARCHBOARD_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Universityadvancedstudiesandresearchboard updated',
        });
        dispatch(push('/admin/universityadvancedstudiesandresearchboard'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Universityadvancedstudiesandresearchboard update error',
      });
      dispatch({
        type: 'UNIVERSITYADVANCEDSTUDIESANDRESEARCHBOARD_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
