import React, { Component } from 'react';
import Loadable from 'react-loadable';
import LoadingComponent from '../../component/routeLoading';

const LoadableAnotherComponent = Loadable({
    loader: () => import('./index'),
    loading: LoadingComponent
});

export default class HomeContainer extends Component {
    render() {
        return <LoadableAnotherComponent/>;
    }
}
