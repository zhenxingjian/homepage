import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Typography} from 'antd';
import {Info} from "./info";
import {Paper} from "./paper";
import './main.css'

const {Text} = Typography;
const {Header, Content, Footer} = Layout;

export class Main extends Component {
    state = {
        content: <Info/>
    };

    handleMenuClick = (item) => {
        const key = item.key;
        let content;
        console.log(key);
        switch (key) {
            case 'info':
                content = <Info/>;
                break;
            case 'paper':
                content = <Paper/>;
                break;
            default:
                content = null;
        }
        this.setState({content})
    };

    render() {
        return (

            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo">Xingjian Zhen</div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['info']}
                        style={{lineHeight: '64px'}}
                        onClick={this.handleMenuClick}
                    >
                        <Menu.Item key="info">Info</Menu.Item>
                        <Menu.Item key="paper">Paper</Menu.Item>
                        <Menu.Item key="program">Program</Menu.Item>
                        <Menu.Item key="intern">Intern</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px', marginTop: 64}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
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
                                                                     copyable>xzhen3@wisc.edu</Text></Footer>
            </Layout>)
    }
}