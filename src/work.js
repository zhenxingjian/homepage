import React, {Component} from 'react';
import {Typography, Descriptions, Divider} from 'antd';
import {getWorks} from "./getData";

const {Title, Paragraph, Text} = Typography;

class Work extends Component {
    parseData = (key, val) => {
        const span = val.span;
        const value = val.value || val;
        if (typeof (value) === "string") // val is a string
            return <Descriptions.Item span={span} label={key} key={key}>{value}</Descriptions.Item>;
        else if (value.length !== undefined) // val is a list
            return <Descriptions.Item span={span} label={key} key={key}>
                <ul>{value.map((d, i) => <li key={i}>{d}</li>)}</ul>
            </Descriptions.Item>;
        else {
            return <div/>;
        }
    };

    render() {
        const basicInfo = this.props.data.required;
        const detailInfo = this.props.data.detail;
        const title = <Divider orientation="left"><Title level={3}>{basicInfo.title} <Text
            type="secondary" className='smaller'>({basicInfo.from} - {basicInfo.to})</Text></Title></Divider>;
        return (
            <Descriptions className="margin-top-large" title={title} bordered>
                {Object.keys(detailInfo).map(k => this.parseData(k, detailInfo[k]))}
            </Descriptions>
        )
    }
}

export class Works extends Component {

    state = {
        data: []
    };

    componentWillMount() {
        getWorks(data => this.setState({data}));
    }

    render() {
        return (
            <div>
                {this.state.data.map((d, i) => <Work data={d} key={i}/>)}
            </div>
        )
    }
}