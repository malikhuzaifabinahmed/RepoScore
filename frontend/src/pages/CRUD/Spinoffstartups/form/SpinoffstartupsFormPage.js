import React, { useState, useEffect } from 'react';
import SpinoffstartupsForm from 'pages/CRUD/Spinoffstartups/form/SpinoffstartupsForm';
import { push } from 'connected-react-router';
import actions from 'actions/spinoffstartups/spinoffstartupsFormActions';
import { connect } from 'react-redux';

const SpinoffstartupsFormPage = (props) => {
  const { dispatch, match, saveLoading, findLoading, record, currentUser } =
    props;

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
        <SpinoffstartupsForm
          saveLoading={saveLoading}
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          isEditing={isEditing()}
          isProfile={isProfile()}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/spinoffstartups'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.spinoffstartups.form.findLoading,
    saveLoading: store.spinoffstartups.form.saveLoading,
    record: store.spinoffstartups.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(SpinoffstartupsFormPage);
