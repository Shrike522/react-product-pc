import { connect } from 'react-redux';
import Home from './layout';

import { getName, getUser } from './action';
import { setMain } from '../../Layout/action';

const mapStateToProps = (state) => {
    const { ...props } = state.home;
    return ({
        main: { ...state.main },
        ...props
    });
};

const mapActionToProps = {
    getName, getUser, setMain
};

export default connect(mapStateToProps, mapActionToProps)(Home);
