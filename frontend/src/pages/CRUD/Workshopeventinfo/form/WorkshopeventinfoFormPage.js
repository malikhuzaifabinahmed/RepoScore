import React, { useState, useEffect } from 'react';
import WorkshopeventinfoForm from 'pages/CRUD/Workshopeventinfo/form/WorkshopeventinfoForm';
import { push } from 'connected-react-router';
import actions from 'actions/workshopeventinfo/workshopeventinfoFormActions';
import { connect } from 'react-redux';

const WorkshopeventinfoFormPage = (props) => {
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
        <WorkshopeventinfoForm
          saveLoading={saveLoading}
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          isEditing={isEditing()}
          isProfile={isProfile()}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/workshopeventinfo'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.workshopeventinfo.form.findLoading,
    saveLoading: store.workshopeventinfo.form.saveLoading,
    record: store.workshopeventinfo.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(WorkshopeventinfoFormPage);
