import React, {Component} from 'react';
import {Typography, Collapse, Empty} from 'antd';
import {getPublications, checkUrl} from "./getData";
import {Loading} from "./elements";

const {Panel} = Collapse;
const {Text} = Typography;

export class Publications extends Component {
    state = {
        data: [],
        loading: false
    };
    static supplementMaterial = (data) => {
        const supplement = data.supplement;
        if (!supplement)
            return <Empty description="There is no supplement materials for this paper."/>;
        let supplementArray;
        if (supplement.length === undefined)
            supplementArray = [supplement];
        else
            supplementArray = supplement;
        return supplementArray.map((s, i) => {
            if (s.type === 'image')
                return <img key={i} width='100%' alt='imagine there is a poster' src={checkUrl(s.src)}/>;
            else if (s.type === 'video')
                return <div key={i} dangerouslySetInnerHTML={{__html: s.src}}/>;
            else
                return <div key={i}/>;

        });
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
        const boldIndex = Publications.computeIndexes(content, data.bold);
        const italicIndex = Publications.computeIndexes(content, data.italic);
        const markIndex = Publications.computeIndexes(content, data.mark);
        const interval_class = Publications.computeClassArray(content, boldIndex, italicIndex, markIndex);
        let texts = [];
        for (let i = 0; i < interval_class.intervals.length; i++) {
            const interval = interval_class.intervals[i];
            const css = interval_class.classes[i];
            let strong = css.indexOf("bold") > -1;
            let mark = css.indexOf("mark") > -1;
            let cssClass = "";
            if (css.indexOf("italic") > -1)
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
                                                                  target="_blank">[pdf]</a></Text>);
        const github = data.github;
        if (github)
            texts.push(<Text key='github'>&nbsp;&nbsp;&nbsp;&nbsp;<a href={checkUrl(github)}
                                                                     target="_blank">[github]</a></Text>);
        return <Text className='paperInfo' style={{"background": data.background}}>{texts}</Text>;

    };

    componentWillMount() {
        this.setState({loading: true});
        getPublications(data => this.setState({data, loading: false}));
    }

    render() {
        if (this.state.loading)
            return <Loading tip="Wait a second, u will see wonderful papers!"/>;
        return (
            <Collapse bordered={false} defaultActiveKey={[]}>
                {this.state.data.map((d, i) => <Panel key={i}
                                                      header={Publications.header(d)}>{Publications.supplementMaterial(d)}</Panel>)}
            </Collapse>
        )
    }
}