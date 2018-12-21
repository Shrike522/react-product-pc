import { connect } from 'react-redux';
import Home from './layout';

import { getName, getUser } from './action';

const mapStateToState = (state) => {
    const { ...props } = state.home;
    return ({ ...props });
};

const mapReducerToState = {
    getName, getUser
};

export default connect(mapStateToState, mapReducerToState)(Home);
