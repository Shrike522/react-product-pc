import { connect } from 'react-redux';
import Detail from './layout';

import { getProduct, setProductNum } from './action';
import { addMarket } from '../List/action';
import { setMain } from '../../Layout/action';

const mapStateToProps = (state) => {
    const { productRootList } = state.home, { ...props } = state.detail, { marketList } = state.list;
    return ({
        main: { ...state.main },
        productRootList,
        marketList,
        ...props
    });
};

const mapActionToProps = {
    getProduct, setProductNum, addMarket, setMain
};

export default connect(mapStateToProps, mapActionToProps)(Detail);
