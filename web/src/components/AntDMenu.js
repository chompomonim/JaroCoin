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
            {key: 'about', value: 'About', link: '#intro', icon: 'info-circle-o'},
            {key: 'token', value: 'Token', link: '#what-is-jaro', icon: 'info-circle-o'},
            {key: 'services', value: 'Services', link: '#services', icon: 'tool'},
            {key: 'quotes', value: 'Quotes', link: '#quotes', icon: 'heart-o'},
        ]
        this.state = {
            activeLink: 'home', // set active menu item
            collapsed: true
        }
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
        let activeLink = this.menuElements[0].key
        let maxOffset = -1

        for (let el of this.menuElements) {
            const element = document.getElementById(el.link.slice(1))
            if (element) {
                const elementOffset = element.offsetTop

                if (elementOffset <= currentOffsetTop && elementOffset > maxOffset) {
                    maxOffset = elementOffset
                    activeLink = el.key
                }
            }
        }

        return {key: activeLink, offset: maxOffset}
    }

    render() {
        return (
            <div className={styles.menuWrapper}>
                <MediaQuery query="(min-width: 992px)">
                    <nav className={styles.navDesktop}>
                        <Menu className={styles.menu}
                            theme="light"
                            mode="horizontal"
                            selectedKeys={[this.state.activeLink]}
                        >
                            {this.menuElements.map(el => <Menu.Item className={styles.menuItem} key={el.key}><a href={el.link}>{el.value}</a></Menu.Item>)}
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
                            selectedKeys={[this.state.activeLink]}
                            mode="inline"
                            theme="light"
                            inlineCollapsed={this.state.collapsed}
                            inlineIndent="30"
                        >

                            {this.menuElements.map(el => <Menu.Item className={styles.mobileMenuItem} key={el.key}><a href={el.link}><Icon type={el.icon} />{el.value}</a></Menu.Item>)}

                        </Menu>
                    </nav>
                </MediaQuery>
            </div>
        );
    }

}

export default AntDMenu