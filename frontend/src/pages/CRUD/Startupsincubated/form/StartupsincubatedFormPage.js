import React, { useState, useEffect } from 'react';
import StartupsincubatedForm from 'pages/CRUD/Startupsincubated/form/StartupsincubatedForm';
import { push } from 'connected-react-router';
import actions from 'actions/startupsincubated/startupsincubatedFormActions';
import { connect } from 'react-redux';

const StartupsincubatedFormPage = (props) => {
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
        <StartupsincubatedForm
          saveLoading={saveLoading}
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          isEditing={isEditing()}
          isProfile={isProfile()}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/startupsincubated'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.startupsincubated.form.findLoading,
    saveLoading: store.startupsincubated.form.saveLoading,
    record: store.startupsincubated.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(StartupsincubatedFormPage);
