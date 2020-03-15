import React, {Component} from 'react';
import {Spin} from "antd";

export class Loading extends Component {
    render() {
        return <Spin className="center margin-top-larger" tip={this.props.tip} size={this.props.size}/>
    }
}

Loading.defaultProps = {
    tip: "Wait a second, I'm coming!",
    size: "large"
};