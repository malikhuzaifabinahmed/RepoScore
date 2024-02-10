import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import queryString from 'query-string';

async function list(filter) {
  const response = await axios.get(
    filter
      ? `/startupemploment?page=${filter.page}&limit=${filter.limit}

    &startupemploment=${filter.startupemploment ? filter.startupemploment : ''}
    &${queryString.stringify(filter.orderBy)}${filter.request}`
      : `/startupemploment`,
  );
  return response.data;
}

async function filterStartupemploment(request, filter) {
  const response = await axios.get(
    `/startupemploment?page=${filter.page}&limit=${filter.limit}${request}`,
  );
  return response.data;
}

export const actions = {
  doFilter: (request, filter) => async (dispatch, getState) => {
    try {
      const response = await filterStartupemploment(request, filter);

      dispatch({
        type: 'STARTUPEMPLOMENT_LIST_FILTERED',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'STARTUPEMPLOMENT_LIST_FETCH_ERROR',
      });
    }
  },

  doFetch:
    (filter, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: 'STARTUPEMPLOMENT_LIST_FETCH_STARTED',
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

        dispatch({
          type: 'STARTUPEMPLOMENT_LIST_FETCH_SUCCESS',
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: 'STARTUPEMPLOMENT_LIST_FETCH_ERROR',
        });
      }
    },

  doDelete: (filter, id) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPEMPLOMENT_LIST_DELETE_STARTED',
      });

      await axios.delete(`/startupemploment/${id}`);

      dispatch({
        type: 'STARTUPEMPLOMENT_LIST_DELETE_SUCCESS',
      });

      const response = await list(filter);
      dispatch({
        type: 'STARTUPEMPLOMENT_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPEMPLOMENT_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
    dispatch({
      type: 'STARTUPEMPLOMENT_LIST_OPEN_CONFIRM',
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch) => {
    dispatch({
      type: 'STARTUPEMPLOMENT_LIST_CLOSE_CONFIRM',
    });
  },
};

export default actions;
