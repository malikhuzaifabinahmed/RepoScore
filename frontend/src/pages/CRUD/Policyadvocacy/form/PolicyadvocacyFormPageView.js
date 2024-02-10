import React, { useState, useEffect } from 'react';
import PolicyadvocacyFormView from 'pages/CRUD/Policyadvocacy/form/PolicyadvocacyFormView';
import { push } from 'connected-react-router';
import actions from 'actions/policyadvocacy/policyadvocacyFormActions';
import { connect } from 'react-redux';

const PolicyadvocacyFormPageView = (props) => {
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
        <PolicyadvocacyFormView
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/policyadvocacy'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.policyadvocacy.form.findLoading,
    record: store.policyadvocacy.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(PolicyadvocacyFormPageView);
