import { connect } from 'react-redux';
import Home from './layout';

import { setKeywords } from './action';
import { setMain } from '../../Layout/action';

const mapStateToProps = (state) => {
    const { ...props } = state.home;
    return ({
        main: { ...state.main },
        ...props
    });
};

const mapActionToProps = {
    setKeywords, setMain
};

export default connect(mapStateToProps, mapActionToProps)(Home);
