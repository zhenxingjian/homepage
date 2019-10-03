import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Typography, Button} from 'antd';
import {Info} from "./info";
import {Publications} from "./publication";
import {Projects} from "./project";
import {Works} from "./work";
import './main.css';
import {getInfo} from "./getData";

const {Text} = Typography;
const {Header, Content, Footer} = Layout;

export class Main extends Component {
    changeKey = (key) => {
        const item = {key: key};
        this.handleMenuClick(item);
    };
    state = {
        info: [],
        content: <Info changeKey={this.changeKey.bind(this)}/>,
        title: "About Me",
        key: "info"
    };
    handleMenuClick = (item) => {
        const key = item.key;
        let content;
        let title;
        switch (key) {
            case 'info':
                content = <Info changeKey={this.changeKey.bind(this)}/>;
                title = "About Me";
                break;
            case 'publication':
                content = <Publications/>;
                title = "Publication";
                break;
            case 'project':
                content = <Projects/>;
                title = "Project";
                break;
            case 'work':
                content = <Works/>;
                title = "Work Experience";
                break;
            default:
                content = null;
                title = "";
        }
        this.setState({content, title, key});
    };

    componentWillMount() {
        getInfo(info => {
            this.setState({info: info})
        });
    }

    render() {
        const info = this.state.info;
        if (!info)
            return <div/>;
        return (
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo">{info.name}</div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['info']}
                        selectedKeys={[this.state.key]}
                        style={{lineHeight: '64px'}}
                        onClick={this.handleMenuClick}
                    >
                        <Menu.Item key="info">About Me</Menu.Item>
                        <Menu.Item key="publication">Publication</Menu.Item>
                        <Menu.Item key="project">Project</Menu.Item>
                        <Menu.Item key="work">Work Experience</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px', marginTop: 64}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item><Button type='link' style={{padding: 0}}
                                                 onClick={() => this.changeKey("info")}>{info.name}</Button></Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.title}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{
                        background: '#fff',
                        padding: 24,
                        minHeight: 380,
                    }}>
                        {this.state.content}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Contact: <Text type='secondary'
                                                                     copyable>{info.mail}</Text></Footer>
            </Layout>)
    }
}