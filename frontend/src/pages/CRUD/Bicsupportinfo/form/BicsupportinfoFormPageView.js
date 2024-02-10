import React, { useState, useEffect } from 'react';
import BicsupportinfoFormView from 'pages/CRUD/Bicsupportinfo/form/BicsupportinfoFormView';
import { push } from 'connected-react-router';
import actions from 'actions/bicsupportinfo/bicsupportinfoFormActions';
import { connect } from 'react-redux';

const BicsupportinfoFormPageView = (props) => {
  const { dispatch, match, findLoading, record, currentUser } = props;

  const [dispatched, setDispatched] = useState(false);

  const isEditing = () => {
    return !!match.params.id;
  };

  const isProfile = () => {
    return match.url === '/app/profile';
  };

  const doSubmit = (id, data) => {
    if (isEditing() || isProfile()) {
      dispatch(actions.doUpdate(id, data, isProfile()));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  useEffect(() => {
    if (isEditing()) {
      dispatch(actions.doFind(match.params.id));
    } else {
      if (isProfile()) {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const currentUserId = currentUser.user.id;
        dispatch(actions.doFind(currentUserId));
      } else {
        dispatch(actions.doNew());
      }
    }
    setDispatched(true);
  }, [match, dispatch]);

  return (
    <React.Fragment>
      {dispatched && (
        <BicsupportinfoFormView
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/bicsupportinfo'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.bicsupportinfo.form.findLoading,
    record: store.bicsupportinfo.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(BicsupportinfoFormPageView);