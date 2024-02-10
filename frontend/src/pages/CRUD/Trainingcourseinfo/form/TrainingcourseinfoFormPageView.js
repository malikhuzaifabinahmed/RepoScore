import React, { useState, useEffect } from 'react';
import TrainingcourseinfoFormView from 'pages/CRUD/Trainingcourseinfo/form/TrainingcourseinfoFormView';
import { push } from 'connected-react-router';
import actions from 'actions/trainingcourseinfo/trainingcourseinfoFormActions';
import { connect } from 'react-redux';

const TrainingcourseinfoFormPageView = (props) => {
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
        <TrainingcourseinfoFormView
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/trainingcourseinfo'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.trainingcourseinfo.form.findLoading,
    record: store.trainingcourseinfo.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(TrainingcourseinfoFormPageView);