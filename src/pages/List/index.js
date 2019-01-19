import { connect } from 'react-redux';
import List from './layout';

import { addMarket, subMarket, delMarket, setMarketNum } from './action';
import { setMain } from '../../Layout/action';

const mapStateToProps = (state) => {
    const { ...props } = state.list, { productRootList } = state.home;
    return ({
        main: { ...state.main },
        productRootList,
        ...props
    });
};

const mapActionToProps = {
    addMarket, subMarket, delMarket, setMarketNum, setMain
};

export default connect(mapStateToProps, mapActionToProps)(List);
