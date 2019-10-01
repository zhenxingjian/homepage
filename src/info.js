import React, {Component} from 'react';
import {Typography, Timeline, Icon, Row, Col, Divider, Card} from 'antd';
import selfie from './img/Selfie.png'

const {Title, Text, Paragraph} = Typography;
const {Meta} = Card;

export class Info extends Component {
    render() {
        return (
            <div>
                <Row type='flex' justify='space-between'>
                    <Col span={8}>
                        <Title level={2}><Text type='secondary'>HELLO,</Text> <br/> I AM Xingjian Zhen</Title>
                        <Paragraph>
                            <ul>
                                <li><Text> <a href="https://www.wisc.edu/">University of Wisconsin-Madison</a></Text>
                                </li>
                                <li><Text type='secondary'><a href="http://www.cs.wisc.edu/">Department of Computer
                                    Science</a></Text></li>
                                <li><Icon type='mail' style={{marginRight: 15}}/><Text type='secondary'
                                                                                       copyable>xzhen3@wisc.edu</Text>
                                </li>
                            </ul>
                        </Paragraph>
                        <Divider orientation='left'> <Title level={3}
                                                            className='right'>EDUCATION</Title></Divider>
                        <Timeline mode="left">
                            <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>}><Text
                                type='secondary' className='small'>Aug.2017 - present<br/>Ph.D. Student<br/>Department
                                of Computer Science<br/>UW-Madision,
                                WI, U.S.</Text></Timeline.Item>
                            <Timeline.Item><Text type='secondary' className='small'>Aug.2013 - Jul. 2017<br/>B.E.
                                Department of Electronic
                                Engineering<br/>Tsinghua University, Beijing, P.R. China</Text></Timeline.Item>
                        </Timeline>
                    </Col>
                    <Col span={6}>
                        <a href='https://github.com/zhenxingjian'>
                            <Card
                                hoverable
                                // style={{width: }}
                                cover={<img alt="Imagine that there is a photo" src={selfie}/>}
                            >
                                <Meta title="Xingjian Zhen"
                                      description={<p className='small'>https://github.com/zhenxingjian</p>}/>
                            </Card>
                        </a>
                    </Col>
                    <Col span={8}>
                    <Divider className='margin-top'><Title level={3} >Research Interests</Title></Divider>
                    <Paragraph type='secondary' className='justify indent'> My research interest is about different
                        structured data for medical
                        application in
                        Computer Vision. Since it's quite mature for Euclidean space machine learning, I
                        would like to explore some different structured data or constrained data. For
                        example,
                        the Symmetric Positive Definite matrix in medical data (DTI) or covariance matrix
                        are the data with constraint. I want to try some neural networks in Euclidean space,
                        and extend them to the structured data, manifold data as an example, to do the
                        classification or regression. I believe this will be useful in diagnosis from a
                        medical
                        perspective or analysis of the video/image information.</Paragraph>
                    </Col>
                </Row>
            </div>
        )
    }
}
