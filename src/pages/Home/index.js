import { connect } from 'react-redux';
import Home from './layout';

import { setKeywords } from './action';
import { addMarket } from '../List/action';
import { setMain } from '../../Layout/action';

const mapStateToProps = (state) => {
    const { ...props } = state.home, { marketList } = state.list;
    return ({
        main: { ...state.main },
        marketList,
        ...props
    });
};

const mapActionToProps = {
    setKeywords, addMarket, setMain
};

export default connect(mapStateToProps, mapActionToProps)(Home);
