import React, {Component} from 'react';
import {Typography, Collapse, Empty} from 'antd';
import {getPapers} from "./getData";

const {Panel} = Collapse;
const {Text} = Typography;
const publicURL = process.env.PUBLIC_URL;

function checkUrl(url) {
    if (url.startsWith('http'))
        return url;
    else
        return publicURL + '/' + url;
}

export class Papers extends Component {
    state = {
        data: []
    };
    static supplementMaterial = (data) => {
        const supplement = data.supplement;
        if (!supplement)
            return <Empty description="There is no supplement materials for this paper."/>;
        if (supplement.type === 'image')
            return <img width='100%' alt='imagine there is a poster' src={checkUrl(supplement.src)}/>;
        else if (supplement.type === 'video')
            return <div dangerouslySetInnerHTML={{__html: supplement.src}}/>;
        else
            return <Empty description="There is no supplement materials for this paper."/>;
    };

    static computeIndexes(str, subStr) {
        if (!subStr)
            return [];
        if (typeof (subStr) === "string")
            subStr = [subStr];
        let indexes = [];
        subStr.forEach(sub => {
            const start = str.indexOf(sub);
            const end = start + sub.length;
            indexes.push(...[...Array(end).keys()].filter(i => i >= start));
        });
        return new Set(indexes);
    }

    static computeClassArray(content, boldIndex, italicIndex, markIndex) {
        const classArray = [...Array(content.length).keys()].map(i => {
            let classes = [];
            if (boldIndex.has(i))
                classes.push('bold');
            if (italicIndex.has(i))
                classes.push('italic');
            if (markIndex.has(i))
                classes.push('mark');
            return classes.join('+');
        });
        let intervals = [];
        let intervalClasses = [];
        let currentClass = classArray[0];
        let currentIndex = 0;
        for (let i = 1; i < classArray.length; i++) {
            if (classArray[i] === currentClass)
                continue;
            intervals.push([currentIndex, i]);
            intervalClasses.push(currentClass);
            currentIndex = i;
            currentClass = classArray[i];
        }
        intervals.push([currentIndex, classArray.length]);
        intervalClasses.push(currentClass);
        return {intervals: intervals, classes: intervalClasses};
    }

    static header = (data) => {
        const content = data.content;
        const boldIndex = Papers.computeIndexes(content, data.bold);
        const italicIndex = Papers.computeIndexes(content, data.italic);
        const markIndex = Papers.computeIndexes(content, data.mark);
        const interval_class = Papers.computeClassArray(content, boldIndex, italicIndex, markIndex);
        let texts = [];
        for (let i = 0; i < interval_class.intervals.length; i++) {
            const interval = interval_class.intervals[i];
            const css = interval_class.classes[i];
            let strong = css.indexOf("bold") > -1;
            let mark = css.indexOf("mark") > -1;
            let cssClass = "";
            if (css.indexOf("italic"))
                cssClass = "italic";
            texts.push(<Text strong={strong} mark={mark} key={i}
                             className={cssClass}>{content.slice(interval[0], interval[1])}</Text>);
        }
        const arxiv = data.arxiv;
        if (arxiv)
            texts.push(<Text key='arxiv'>&nbsp;&nbsp;&nbsp;&nbsp;<a href={arxiv} target="_blank">[arxiv]</a></Text>);
        const pdf = data.pdf;
        if (pdf)
            texts.push(<Text key='pdf'>&nbsp;&nbsp;&nbsp;&nbsp;<a href={checkUrl(pdf)}
                                                                  target="_blank">[PDF]</a></Text>);
        return <Text className='paperInfo'>{texts}</Text>;
    };

    componentWillMount() {
        getPapers(data => this.setState({data}));
    }

    render() {
        return (
            <Collapse bordered={false} defaultActiveKey={[]}>
                {this.state.data.map((d, i) => <Panel key={i}
                                                      header={Papers.header(d)}>{Papers.supplementMaterial(d)}</Panel>)}
            </Collapse>
        )
    }
}