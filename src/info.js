import React, {Component} from 'react';
import {Typography, Timeline, Icon, Row, Col, Divider, Card, Tag, Button} from 'antd';
import {checkUrl, getInfo} from "./getData";

const {Title, Text, Paragraph} = Typography;
const {Meta} = Card;

export class Info extends Component {

    state = {
        info: null
    };

    componentWillMount() {
        getInfo(info => this.setState({info}));
    }

    parseList = () => {
        const where = this.state.info.where;
        const mail = this.state.info.mail;
        let li = [];
        if (where)
            li.push(...where.map((d, i) => {
                if (typeof (d) === "string")
                    return <li key={i}>{d}</li>;
                if (d.url)
                    return <li key={i}><a href={d.url}>{d.text}</a></li>;
                else
                    return <li key={i}>{d.text}</li>;
            }));
        if (mail)
            li.push(<li key='mail'><Icon type='mail' style={{marginRight: 15}}/><Text type='secondary'
                                                                                      copyable>{mail}</Text></li>);
        return <ul>{li}</ul>;
    };
    parseEdu = () => {
        const edu = this.state.info.education;
        if (!edu)
            return [];
        return <Timeline className='timeLine' mode="left">{
            edu.map((e, i) => {
                const dot = e.status === "processing" ?
                    <Icon type="clock-circle-o" style={{fontSize: '16px'}}/> : undefined;
                let descriptions = e.descriptions;
                if (typeof (descriptions) === "string")
                    descriptions = [descriptions];
                descriptions = descriptions.map((d, j) => <Paragraph key={j} type="secondary"
                                                                     className="small">{d}</Paragraph>);
                return <Timeline.Item dot={dot} key={i}>{descriptions}</Timeline.Item>;
            })
        }
        </Timeline>
    };
    parseCourses = () => {
        if (!(this.state.info.courses))
            return [];
        const maxShow = this.state.info.courses.maxShow;
        const courses = this.state.info.courses.list.slice(0, maxShow);
        const presetColors = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];
        let colors = [];
        while (colors.length < courses.length)
            colors.push(...presetColors);
        let tags = courses.map((c, i) => <Tag className='small' key={i} color={colors[i]}>{c}</Tag>);
        if (tags.length === 0)
            return [];
        if (tags.length < this.state.info.courses.list.length)
            tags.push(<Tag key='omitted'>...</Tag>);
        return <Paragraph><Title level={4}>Courses</Title>{tags}</Paragraph>
    };
    parseFYI = () => {
        let fyi = this.state.info.FYI;
        if (!fyi)
            return [];
        return fyi.map((d, i) => <li key={i}><Button type='link' onClick={() => {
            window.open(checkUrl(d.url), '_blank');
        }}>{d.title}</Button></li>)
    };

    render() {
        const info = this.state.info;
        if (!info)
            return <div/>;
        return (
            <div>
                <Row type='flex' justify='space-between'>
                    <Col span={8}>
                        <Title level={2}><Text type='secondary'>HELLO,</Text> <br/> I AM {info.name}</Title>
                        <Paragraph>
                            {this.parseList()}
                        </Paragraph>
                        <div className='margin-bottom-large'/>
                        <Divider orientation='left'> <Title level={3} className="right">EDUCATION</Title></Divider>
                        {this.parseEdu()}
                        {this.parseCourses()}
                    </Col>
                    <Col span={6}>
                        <a href={info.github}>
                            <Card
                                hoverable
                                cover={<img alt="Imagine that I'm very handsome"
                                            src={checkUrl(info.cover)}/>}
                            >
                                <Meta title={info.name} description={<p className='small '>{info.github}</p>}/>
                            </Card>
                        </a>
                    </Col>
                    <Col span={8}>
                        <Divider><Title level={3}>Research Interests</Title></Divider>
                        <Paragraph type='secondary' className='justify indent '>
                            <div dangerouslySetInnerHTML={{__html: info.interests}}/>
                        </Paragraph>
                        <div className="margin-top-large"/>
                        <Divider><Title level={3}>FYI</Title></Divider>
                        <ul>
                            <li><Button type='link' onClick={() => this.props.changeKey('publication')}>My
                                Publication</Button></li>
                            <li><Button type='link' onClick={() => this.props.changeKey('project')}>My Project</Button>
                            </li>
                            <li><Button type='link' onClick={() => this.props.changeKey('work')}>My Work
                                Experience</Button>
                            </li>
                            {this.parseFYI()}
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}
