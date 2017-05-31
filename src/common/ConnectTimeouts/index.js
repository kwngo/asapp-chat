import React, {Component} from 'react';

export default function connectTimeouts(ChildComponent) {
    class ComponentWithTimeouts extends Component {
        constructor(props) {
            super(props);
            this.setTimeout = this.setTimeout.bind(this);
            this.clearTimeouts = this.clearTimeouts.bind(this);
            this.clearTimeout = this.clearTimeout.bind(this);
            this.state = {
                timeouts: []
            }
        }

        setTimeout() {
            this.state.timeouts.push(
                setTimeout.apply(null, arguments)
            )
        }

        clearTimeouts() {
            this.state.timeouts.forEach(clearTimeout)
        }

        clearTimeout(id) {
            let index = this.state.timeouts.indexOf(id);
            if (index !== -1) {
                clearTimeout(this.state.timeouts[index])
                this.state.timeouts.splice(index, 1);
            }
        }

        render() {
            return (
                <ChildComponent {...this.props} 
                    clearTimeout={this.clearTimeout}
                    clearTimeouts={this.clearTimeouts}
                    setTimeout={this.setTimeout}
                />
            )
        }
    }
    return ComponentWithTimeouts;
}
