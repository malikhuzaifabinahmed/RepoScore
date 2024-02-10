import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import queryString from 'query-string';

async function list(filter) {
  const response = await axios.get(
    filter
      ? `/policyadvocacy?page=${filter.page}&limit=${filter.limit}

    &policyadvocacy=${filter.policyadvocacy ? filter.policyadvocacy : ''}
    &${queryString.stringify(filter.orderBy)}${filter.request}`
      : `/policyadvocacy`,
  );
  return response.data;
}

async function filterPolicyadvocacy(request, filter) {
  const response = await axios.get(
    `/policyadvocacy?page=${filter.page}&limit=${filter.limit}${request}`,
  );
  return response.data;
}

export const actions = {
  doFilter: (request, filter) => async (dispatch, getState) => {
    try {
      const response = await filterPolicyadvocacy(request, filter);

      dispatch({
        type: 'POLICYADVOCACY_LIST_FILTERED',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'POLICYADVOCACY_LIST_FETCH_ERROR',
      });
    }
  },

  doFetch:
    (filter, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: 'POLICYADVOCACY_LIST_FETCH_STARTED',
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

        dispatch({
          type: 'POLICYADVOCACY_LIST_FETCH_SUCCESS',
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: 'POLICYADVOCACY_LIST_FETCH_ERROR',
        });
      }
    },

  doDelete: (filter, id) => async (dispatch) => {
    try {
      dispatch({
        type: 'POLICYADVOCACY_LIST_DELETE_STARTED',
      });

      await axios.delete(`/policyadvocacy/${id}`);

      dispatch({
        type: 'POLICYADVOCACY_LIST_DELETE_SUCCESS',
      });

      const response = await list(filter);
      dispatch({
        type: 'POLICYADVOCACY_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'POLICYADVOCACY_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
    dispatch({
      type: 'POLICYADVOCACY_LIST_OPEN_CONFIRM',
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch) => {
    dispatch({
      type: 'POLICYADVOCACY_LIST_CLOSE_CONFIRM',
    });
  },
};

export default actions;
