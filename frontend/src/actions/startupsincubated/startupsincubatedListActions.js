import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import queryString from 'query-string';

async function list(filter) {
  const response = await axios.get(
    filter
      ? `/startupsincubated?page=${filter.page}&limit=${filter.limit}

    &startupsincubated=${
      filter.startupsincubated ? filter.startupsincubated : ''
    }
    &${queryString.stringify(filter.orderBy)}${filter.request}`
      : `/startupsincubated`,
  );
  return response.data;
}

async function filterStartupsincubated(request, filter) {
  const response = await axios.get(
    `/startupsincubated?page=${filter.page}&limit=${filter.limit}${request}`,
  );
  return response.data;
}

export const actions = {
  doFilter: (request, filter) => async (dispatch, getState) => {
    try {
      const response = await filterStartupsincubated(request, filter);

      dispatch({
        type: 'STARTUPSINCUBATED_LIST_FILTERED',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'STARTUPSINCUBATED_LIST_FETCH_ERROR',
      });
    }
  },

  doFetch:
    (filter, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: 'STARTUPSINCUBATED_LIST_FETCH_STARTED',
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

        dispatch({
          type: 'STARTUPSINCUBATED_LIST_FETCH_SUCCESS',
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: 'STARTUPSINCUBATED_LIST_FETCH_ERROR',
        });
      }
    },

  doDelete: (filter, id) => async (dispatch) => {
    try {
      dispatch({
        type: 'STARTUPSINCUBATED_LIST_DELETE_STARTED',
      });

      await axios.delete(`/startupsincubated/${id}`);

      dispatch({
        type: 'STARTUPSINCUBATED_LIST_DELETE_SUCCESS',
      });

      const response = await list(filter);
      dispatch({
        type: 'STARTUPSINCUBATED_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STARTUPSINCUBATED_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
    dispatch({
      type: 'STARTUPSINCUBATED_LIST_OPEN_CONFIRM',
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch) => {
    dispatch({
      type: 'STARTUPSINCUBATED_LIST_CLOSE_CONFIRM',
    });
  },
};

export default actions;
