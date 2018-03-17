import React, { Component } from 'react'

import addEventListener from 'rc-util/lib/Dom/addEventListener';

import { Menu } from 'antd'
import 'antd/dist/antd.css'

import styles from './antDMenu.module.css'

class AntDMenu extends Component {
    constructor(props) {
        super(props)
        this.menuElements = [
            {key: 'home', value: 'Home', link: '#home'},
            {key: 'about', value: 'About', link: '#about'}, // > Who is Jaro?; > What is JaroCoin?; > Token Distribution
            {key: 'supporters', value: 'Supporters', link: '#supporters'},
        /*
        // If Component Id isn't defined in App.js => Uncaught TypeError: Cannot read property 'offsetTop' of null
           
            {key: 'services', value: 'Services', link: '#services'}, // > With JaroCoin you can
            {key: 'usecases', value: 'Usecases', link: '#usecases'}, // > Community Baked; > Friends Baked; > Family Baked; > Personal Initiative
            {key: 'supporters', value: 'Supporters', link: '#supporters'},
            {key: 'latestposts', value: 'Latest Posts', link: '#latest-posts'},
            {key: 'faq', value: 'Questions and Answers (FAQ)', link: '#faq'},
            {key: 'quotes', value: 'Quotes', link: '#quotes'},
            {key: 'getjaro', value: 'GET JARO', link: 'get-jaro'}
        */
        ]
        this.state = {
            activeLink: 'home' // set active menu item
        }
    }

    componentDidMount() {
        this.scrollEvent = addEventListener(window, 'scroll', this.handleScroll)
    }

    handleScroll = () => {
        const currentTop = document.documentElement.scrollTop //window.innerHeight
        this.setState({
            activeLink: this.getCurrentAnchor(currentTop).key
        })
    }

    getCurrentAnchor(currentOffsetTop) {
        let selections = []
        
        for (let el of this.menuElements) {
            const element = document.getElementById(el.key)
            const elementOffset = element.offsetTop

            if (elementOffset > currentOffsetTop) {
                selections.push({key: el.key, offset: elementOffset})
            }
        }
    
        const bestElement = selections.reduce((acc, el) => acc.offset < el.offset ? el : acc, {offset: 0})

        return bestElement
    }

    render() {
        return (
            <Menu className={styles.menu}
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={[this.state.activeLink]}
            >
                {this.menuElements.map(el => <Menu.Item className={styles.menuItem} key={el.key}><a href={el.link}>{el.value}</a></Menu.Item>)}
            </Menu>
        );
    }

}

export default AntDMenu