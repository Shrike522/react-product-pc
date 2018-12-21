// bundle.js 用于按需加载
import { Component } from 'react';

export default class Bundle extends Component{
    constructor (props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    componentWillMount () {
        this.load(this.props);
    }

    componentWillReceiveProps (nextProps, nextContext) {
        if(nextProps.load !== this.props.load){
            this.load(nextProps);
        }
    }

    load (props) {
        this.setState({
            mod: null
        }, () => {
            props.load().then((mod) => {
                this.setState({
                    mod: mod.default ? mod.default : mod
                })
            });
        })
    }

    render () {
        const { mod } = this.state;
        if (!mod) return false;
        return this.props.children(mod);
    }
}
