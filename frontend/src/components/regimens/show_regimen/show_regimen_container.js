import { connect } from 'react-redux';

import { fetchRegimen } from '../../../actions/regimen_actions';
import { deleteRegimens } from '../../../actions/regimen_actions';
import RegimenShow from './show_regimen';

const mSTP = (state, ownProps) => {

    return {
        currentUserId: state.session.user.id,
        regimen: state.entities.regimens[ownProps.match.params.regimenId]
    };
};

const mDTP = (dispatch) => {
    return {
        fetchRegimen: regimenId => dispatch(fetchRegimen(regimenId)),
        deleteRegimens: regimenId => dispatch(deleteRegimens(regimenId))
    };
};

export default connect(mSTP, mDTP)(RegimenShow);
