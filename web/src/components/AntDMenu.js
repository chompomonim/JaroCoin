import React, { Component } from 'react'

import { Menu } from 'antd'

import 'antd/dist/antd.css';

class AntDMenu extends Component {

    render() {
        return (
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ position: 'fixed', 
                        width: '100%', 
                        lineHeight: '55px', 
                        textAlign: 'right' 
                    }}
            >
                <Menu.Item key="1"><a href="#home">Home</a></Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
                <Menu.Item key="3"><a href="#roadmap">Services</a></Menu.Item>
                <Menu.Item key="4">
                    <a href="#roadmap">Roadmap</a>
                </Menu.Item>
                <Menu.Item key="5">Usecases</Menu.Item>
                <Menu.Item key="6">Supporters</Menu.Item>
            </Menu>
        )
    }

}

export default AntDMenu