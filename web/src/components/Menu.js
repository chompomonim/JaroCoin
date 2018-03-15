import React, { Component } from 'react'

let menuStyle = {
    background: '#bdbdbd80',
    position: 'fixed',
    width: '100%'
}
let menuItemStyle = {
    display: 'inline-block',
    padding: '20px'
}
class Menu extends Component {
    render() {
        return (
            <nav class="navbar" style={{ position: 'absolute', top: '0' }}>
                <div style={{ ...menuStyle }}>
                    <div style={{ textAlign: 'right' }}>
                        <ul>
                            <li style={{ ...menuItemStyle }} ><a href="#home">Home</a></li>
                            <li style={{ ...menuItemStyle }} ><a href="#about">About</a></li>
                            <li style={{ ...menuItemStyle }} ><a href="#services">Services</a></li>
                            <li style={{ ...menuItemStyle }} ><a href="#roadmap">Roadmap</a></li>
                            <li style={{ ...menuItemStyle }} ><a href="#blog">Blog</a></li>
                            <li style={{ ...menuItemStyle }} ><a href="#contacts">Contacts</a></li>
                        </ul>
                        <button>Mobile Menu Button</button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu