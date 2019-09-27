import React, {Component} from 'react';
import {Typography, Collapse, Timeline, Icon, Row, Col, Divider, Card} from 'antd';
import posterNips from './paper/SPD-SRU-NIPS/poster-SPD-SRU.png';
import posterAAIC from './paper/DTI-AAIC/poster.png';

const {Panel} = Collapse;
const {Text} = Typography;
const infoNips = <Text className='paperInfo'>Rudrasis Chakraborty, <Text mark>Xingjian Zhen</Text>, Chun-Hao Yang,
    Monami Banerjee, Derek Archer, David Vaillancourt, Vikas Singh, Baba C. Vemuri. <Text strong>"<a
        href='https://arxiv.org/abs/1805.11204'>A Statistical Recurrent Model on the Manifold of Symmetric Positive
        Definite Matrices.</a>"</Text> In <Text className='italic'>Thirty-second Annual Conference on Neural Information
        Processing Systems (NeurIPS), 2018</Text></Text>;
const infoAAIC = <Text className='paperInfo'><Text mark>Xingjian Zhen</Text>, Rudrasis Chakraborty, Nicholas Vogt, Seong
    Jae Hwang, Sterling C. Johnson, Barbara B. Bendlin, Vikas Singh. <Text strong>"Group Analysis for PiB Status with
        Seqential Deep Learning Model on DTI."</Text><Text className='italic'>Alzheimer's Association International
        Conference (AAIC), 2019</Text></Text>;
const infoICCV = <Text className='paperInfo'><Text mark>Xingjian Zhen</Text>, Rudrasis Chakraborty, Nicholas Vogt,
    Barbara B. Bendlin, Vikas Singh. <Text strong>"Dilated Convolutional Neural Networks for Sequential Manifoldvalued
        Data."</Text> <Text className='italic'> IEEE International Conference on Computer Vision (ICCV),
        2019</Text></Text>;

export class Paper extends Component {
    render() {
        return (
            <div>
                <Collapse bordered={false} defaultActiveKey={[]}>
                    <Panel header={infoNips} key="1">
                        <img width='100%' alt='imagine there is a poster' src={posterNips}/>
                    </Panel>
                    <Panel header={infoAAIC} key="2">
                        <img width='100%' alt='imagine there is a poster' src={posterAAIC}/>
                    </Panel>
                    <Panel header={infoICCV} key="3">
                        <iframe width="966" height="543" src="https://www.youtube.com/embed/_nT2hrYQL0w" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}