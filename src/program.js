import React, {Component} from 'react';
import {getPrograms} from "./getData";
import {Typography, Divider} from 'antd';

const {Title, Paragraph} = Typography;

class Program extends Component {
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

export class Programs extends Component {
    state = {
        data: []
    };

    componentWillMount() {
        getPrograms(data =>this.setState({data}));
    }

    render() {
        return (
            <div>
                {this.state.data.map((d, i) => <Program data={d} key={i} order={i}/>)}
            </div>
        )
    }
}