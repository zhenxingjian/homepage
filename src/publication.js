import React, {Component} from 'react';
import {Typography, Collapse, Empty} from 'antd';
import {getPublications, checkUrl} from "./getData";
import {Loading} from "./elements";

const {Panel} = Collapse;
const {Text} = Typography;

function getIndicesOf(searchStr, str, caseSensitive) {
    let searchStrLen = searchStr.length;
    if (searchStrLen === 0) {
        return [];
    }
    let startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push({start: index, end: index + searchStrLen});
        startIndex = index + searchStrLen;
    }
    return indices;
}

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
            const index = getIndicesOf(sub, str, true);
            index.map(d => indexes.push(...[...Array(d.end).keys()].filter(i => i >= d.start)))
        });
        return new Set(indexes);
    }

    static computeClassArray(content, boldIndex, italicIndex, markIndex, newLineIndex) {
        const classArray = [...Array(content.length).keys()].map(i => {
            let classes = [];
            if (boldIndex.has(i))
                classes.push('bold');
            if (italicIndex.has(i))
                classes.push('italic');
            if (markIndex.has(i))
                classes.push('mark');
            if (newLineIndex.has(i))
                classes.push('br');
            return classes.join('+');
        });
        let intervals = [];
        let intervalClasses = [];
        let currentClass = classArray[0];
        let currentIndex = 0;
        for (let i = 1; i < classArray.length; i++) {
            // if (i in newLineIndex) {
            //     intervals.push([currentIndex, i]);
            //     intervalClasses.push(currentClass);
            // }
            if (classArray[i] === currentClass && classArray[i].indexOf('br') === -1)
                continue;
            intervals.push([currentIndex, i]);
            intervalClasses.push(currentClass);
            currentIndex = i;
            currentClass = classArray[i];

            if (currentClass.indexOf('br') > -1) {
                intervals.push([i, i + 1]);
                intervalClasses.push("br");
                if (currentClass === "br")
                    currentClass = "";
                else
                    currentClass = currentClass.slice(0, -3);
            }
        }
        intervals.push([currentIndex, classArray.length]);
        intervalClasses.push(currentClass);
        return {intervals: intervals, classes: intervalClasses};
    }

    static computeClasses(data) {
        const content = data.content;
        let keys = ["bold", "italic", "mark", "br"];
        if (data.colorMap)
            keys.push(...Object.keys(data.colorMap));
        const keyWords = keys.map(k => k === "br" ? '\n' : k.startsWith('rgb') ? data.colorMap[k] : data[k]);
        const indexes = keyWords.map(words => Publications.computeIndexes(content, words));
        return [...Array(content.length).keys()].map(i => indexes.map((index, j) => index.has(i) ? keys[j] : "").filter(s => s !== ""))
    }

    static header = (data) => {
        const cssClasses = Publications.computeClasses(data);
        const texts = cssClasses.map((css, i) => {
            if (css.indexOf("br")>-1)
                return <br key={i}/>;
            const textColor = css.filter(c => c.startsWith('rgb'));
            const textStyle = textColor.length > 0 ? {color: textColor[0]} : undefined;
            let strong = css.indexOf("bold") > -1;
            let mark = css.indexOf("mark") > -1;
            let cssClass = "";
            if (css.indexOf("italic") > -1)
                cssClass = "italic";
            return <Text strong={strong} mark={mark} key={i}
                         className={cssClass} style={textStyle}>{data.content[i]}</Text>

        });
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
    // static header = (data) => {
    //     const content = data.content;
    //     const boldIndex = Publications.computeIndexes(content, data.bold);
    //     const italicIndex = Publications.computeIndexes(content, data.italic);
    //     const markIndex = Publications.computeIndexes(content, data.mark);
    //     const newLineIndex = Publications.computeIndexes(content, '\n');
    //     const colorMap = data.colorMap;
    //     const interval_class = Publications.computeClassArray(content, boldIndex, italicIndex, markIndex, newLineIndex);
    //     let texts = [];
    //     for (let i = 0; i < interval_class.intervals.length; i++) {
    //         const interval = interval_class.intervals[i];
    //         const css = interval_class.classes[i];
    //         if (css === "br") {
    //             texts.push(<br key={i}/>);
    //             continue;
    //         }
    //         let strong = css.indexOf("bold") > -1;
    //         let mark = css.indexOf("mark") > -1;
    //         let cssClass = "";
    //         if (css.indexOf("italic") > -1)
    //             cssClass = "italic";
    //         texts.push(<Text strong={strong} mark={mark} key={i}
    //                          className={cssClass}>{content.slice(interval[0], interval[1])}</Text>);
    //     }
    //     const arxiv = data.arxiv;
    //     if (arxiv)
    //         texts.push(<Text key='arxiv'>&nbsp;&nbsp;&nbsp;&nbsp;<a href={arxiv} target="_blank">[arxiv]</a></Text>);
    //     const pdf = data.pdf;
    //     if (pdf)
    //         texts.push(<Text key='pdf'>&nbsp;&nbsp;&nbsp;&nbsp;<a href={checkUrl(pdf)}
    //                                                               target="_blank">[pdf]</a></Text>);
    //     const github = data.github;
    //     if (github)
    //         texts.push(<Text key='github'>&nbsp;&nbsp;&nbsp;&nbsp;<a href={checkUrl(github)}
    //                                                                  target="_blank">[github]</a></Text>);
    //     return <Text className='paperInfo' style={{"background": data.background}}>{texts}</Text>;
    //
    // };

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