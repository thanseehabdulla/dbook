import React, {Component} from 'react';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

export default function asyncComponent(importComponent) {
    class AsyncFunc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            };
        }

        componentWillMount() {

        }

        async componentDidMount() {
            const {default: Component} = await importComponent();
            this.setState({
                component: <Component {...this.props} />
            });
        }

        render() {
            const Component = this.state.component || <div/>;
            return (
                <ReactPlaceholder type="text" rows={7} ready={Component !== null}>
                    {Component}
                </ReactPlaceholder>
            );
        }
    }

    return AsyncFunc;
}
