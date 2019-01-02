import { connect } from 'react-redux';
import Login from './layout';

import { setName, setPassword, setNewName, setNewPassword, setConfirmDirty, setCord, getCord, getTabPane, setUsers } from './action';
import { setMain, setUserStatus } from '../../Layout/action';

const mapStateToProps = (state) => {
    const { ...props } = state.login;
    return ({
        main: { ...state.main },
        ...props
    });
};

const mapActionToProps = {
    setName, setPassword, setNewName, setNewPassword, setConfirmDirty, setCord, getCord, getTabPane, setUsers, setMain, setUserStatus
};

export default connect(mapStateToProps, mapActionToProps)(Login);
