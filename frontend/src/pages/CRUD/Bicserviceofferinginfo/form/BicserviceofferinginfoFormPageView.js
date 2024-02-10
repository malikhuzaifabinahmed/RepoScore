import React, { useState, useEffect } from 'react';
import BicserviceofferinginfoFormView from 'pages/CRUD/Bicserviceofferinginfo/form/BicserviceofferinginfoFormView';
import { push } from 'connected-react-router';
import actions from 'actions/bicserviceofferinginfo/bicserviceofferinginfoFormActions';
import { connect } from 'react-redux';

const BicserviceofferinginfoFormPageView = (props) => {
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
        <BicserviceofferinginfoFormView
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/bicserviceofferinginfo'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.bicserviceofferinginfo.form.findLoading,
    record: store.bicserviceofferinginfo.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(BicserviceofferinginfoFormPageView);
