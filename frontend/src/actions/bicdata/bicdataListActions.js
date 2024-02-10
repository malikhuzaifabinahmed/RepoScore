import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import queryString from 'query-string';

async function list(filter) {
  const response = await axios.get(
    filter
      ? `/bicdata?page=${filter.page}&limit=${filter.limit}

    &bicdata=${filter.bicdata ? filter.bicdata : ''}
    &${queryString.stringify(filter.orderBy)}${filter.request}`
      : `/bicdata`,
  );
  return response.data;
}

async function filterBicdata(request, filter) {
  const response = await axios.get(
    `/bicdata?page=${filter.page}&limit=${filter.limit}${request}`,
  );
  return response.data;
}

export const actions = {
  doFilter: (request, filter) => async (dispatch, getState) => {
    try {
      const response = await filterBicdata(request, filter);

      dispatch({
        type: 'BICDATA_LIST_FILTERED',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'BICDATA_LIST_FETCH_ERROR',
      });
    }
  },

  doFetch:
    (filter, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: 'BICDATA_LIST_FETCH_STARTED',
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

        dispatch({
          type: 'BICDATA_LIST_FETCH_SUCCESS',
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: 'BICDATA_LIST_FETCH_ERROR',
        });
      }
    },

  doDelete: (filter, id) => async (dispatch) => {
    try {
      dispatch({
        type: 'BICDATA_LIST_DELETE_STARTED',
      });

      await axios.delete(`/bicdata/${id}`);

      dispatch({
        type: 'BICDATA_LIST_DELETE_SUCCESS',
      });

      const response = await list(filter);
      dispatch({
        type: 'BICDATA_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BICDATA_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
    dispatch({
      type: 'BICDATA_LIST_OPEN_CONFIRM',
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch) => {
    dispatch({
      type: 'BICDATA_LIST_CLOSE_CONFIRM',
    });
  },
};

export default actions;
