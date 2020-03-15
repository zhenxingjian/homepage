import React, {Component} from 'react';
import {getProjects} from "./getData";
import {Typography, Divider} from 'antd';
import {Loading} from "./elements";

const {Title, Paragraph} = Typography;

class Project extends Component {
    render() {
        const data = this.props.data;
        const orient = this.props.order % 2 ? 'right' : 'left';
        return (
            <Typography className='margin-top-large'>
                <Divider orientation={orient}> <Title level={3}>{data.title}</Title></Divider>
                <Paragraph type="secondary"
                           className={orient + ' margin-' + orient}>{data.start} - {data.end}</Paragraph>
                <Paragraph className={orient === 'right' ? 'margin-right' : ''}>
                    <ul className={orient + 'List'}>
                        {data.descriptions.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                </Paragraph>
            </Typography>
        )
    }
}

export class Projects extends Component {
    state = {
        data: [],
        loading: false,
    };

    componentWillMount() {
        this.setState({loading: true});
        getProjects(data => this.setState({data, loading: false}));
    }

    render() {
        if (this.state.loading)
            return <Loading tip="Wait a second, my projects are wonderful!" size="large"/>;
        return (
            <div>
                {this.state.data.map((d, i) => <Project data={d} key={i} order={i}/>)}
            </div>
        )
    }
}