import React, { Component } from 'react'

import { Menu } from 'antd'
import { Icon } from 'antd'
import { Button } from 'antd'

import addEventListener from 'rc-util/lib/Dom/addEventListener'
import MediaQuery from 'react-responsive'

import styles from './antDMenu.module.css'

class AntDMenu extends Component {

    constructor(props) {
        super(props)
        this.menuElements = [
            {key: 'home', value: 'Home', link: '#home', icon: 'home'},
            {key: 'about', value: 'About', link: '#about', icon: 'info-circle-o'},
            {key: 'services', value: 'Services', link: '#services', icon: 'tool'},
            {key: 'usecases', value: 'Usecases', link: '#usecases', icon: 'rocket'},
            {key: 'latestposts', value: 'Latest Posts', link: '#latest-posts', icon: 'bars'},
            {key: 'supporters', value: 'Supporters', link: '#supporters', icon: 'like-o'},
            {key: 'faq', value: 'FAQ', link: '#faq', icon: 'question-circle-o'},
            {key: 'quotes', value: 'Quotes', link: '#quotes', icon: 'heart-o'},
        ]
        this.state = {
            activeLink: 'home' // set active menu item
        }

        this.state = {
            collapsed: true,
        };
        this.toggle = () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
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
            if (document.getElementById(el.key)) {
                const element = document.getElementById(el.key)
                const elementOffset = element.offsetTop

                if (elementOffset > currentOffsetTop) {
                    selections.push({key: el.key, offset: elementOffset})
                }
            }
        }
    
        const bestElement = selections.reduce((acc, el) => acc.offset < el.offset ? el : acc, {offset: 0})

        return bestElement
    }

    render() {
        return (
            <div className={styles.menuWrapper}>
                <MediaQuery query="(min-width: 992px)">
                    <nav className={styles.navDesktop}>
                        <Menu className={styles.menu}
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={[this.state.activeLink]}
                        >
                            {this.menuElements.map(el => <Menu.Item className={styles.menuItem} key={el.key}><a href={el.link}>{el.value}</a></Menu.Item>)}
                            <Menu.Item className={styles.menuItem}>
                                <Button type="primary" className={styles.menuButton}><a href="#get-jaro" target="_blank">GET JARO</a></Button>
                            </Menu.Item>
                        </Menu>
                    </nav>
                </MediaQuery>
                <MediaQuery query="(max-width: 991px)">
                    <nav className={styles.navMobile}>
                        <div className={styles.mobileLogo}>
                            JaroCoin
                        </div>
                        <Button className={styles.mobileToggleButton} type="primary" onClick={this.toggle}>
                            <Icon type={this.state.collapsed ? 'menu-fold' : 'menu-unfold'} />
                        </Button>
                        <Menu
                            className={styles.mobileMenu}
                            defaultSelectedKeys={['1']}
                            mode="inline"
                            theme="light"
                            inlineCollapsed={this.state.collapsed}
                            inlineIndent="30"
                        >
                            <Menu.Item className={styles.mobileMenuItemButton}>
                                <Button type="primary"><a href="#get-jaro" target="_blank">GET JARO</a></Button>
                            </Menu.Item>

                            {this.menuElements.map(el => <Menu.Item className={styles.mobileMenuItem} key={el.key}><a href={el.link}><Icon type={el.icon} />{el.value}</a></Menu.Item>)}
                        
                        </Menu>
                    </nav>
                </MediaQuery>
            </div>
        );
    }

}

export default AntDMenu