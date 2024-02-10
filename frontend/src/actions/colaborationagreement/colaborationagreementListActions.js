import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import queryString from 'query-string';

async function list(filter) {
  const response = await axios.get(
    filter
      ? `/colaborationagreement?page=${filter.page}&limit=${filter.limit}

    &colaborationagreement=${
      filter.colaborationagreement ? filter.colaborationagreement : ''
    }
    &${queryString.stringify(filter.orderBy)}${filter.request}`
      : `/colaborationagreement`,
  );
  return response.data;
}

async function filterColaborationagreement(request, filter) {
  const response = await axios.get(
    `/colaborationagreement?page=${filter.page}&limit=${filter.limit}${request}`,
  );
  return response.data;
}

export const actions = {
  doFilter: (request, filter) => async (dispatch, getState) => {
    try {
      const response = await filterColaborationagreement(request, filter);

      dispatch({
        type: 'COLABORATIONAGREEMENT_LIST_FILTERED',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'COLABORATIONAGREEMENT_LIST_FETCH_ERROR',
      });
    }
  },

  doFetch:
    (filter, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: 'COLABORATIONAGREEMENT_LIST_FETCH_STARTED',
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

        dispatch({
          type: 'COLABORATIONAGREEMENT_LIST_FETCH_SUCCESS',
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: 'COLABORATIONAGREEMENT_LIST_FETCH_ERROR',
        });
      }
    },

  doDelete: (filter, id) => async (dispatch) => {
    try {
      dispatch({
        type: 'COLABORATIONAGREEMENT_LIST_DELETE_STARTED',
      });

      await axios.delete(`/colaborationagreement/${id}`);

      dispatch({
        type: 'COLABORATIONAGREEMENT_LIST_DELETE_SUCCESS',
      });

      const response = await list(filter);
      dispatch({
        type: 'COLABORATIONAGREEMENT_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'COLABORATIONAGREEMENT_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
    dispatch({
      type: 'COLABORATIONAGREEMENT_LIST_OPEN_CONFIRM',
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch) => {
    dispatch({
      type: 'COLABORATIONAGREEMENT_LIST_CLOSE_CONFIRM',
    });
  },
};

export default actions;
