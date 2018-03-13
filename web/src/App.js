import React, { Component } from 'react';

// Supporters Component image import (For demo purpose). Needs webpack or related package to be installed
import supporterDemoImage from './images/supporter-demo.jpg';
import jaroCoinDemoImage from './images/jarocoin-demo.jpg';


// === MENU ===

// Menu Component Styles
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
      <nav class="navbar" style={{position: 'absolute', top: '0'}}>
        <div style={{ ...menuStyle }}>
          <div style={{textAlign: 'right'}}>
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

// === HORIZONTAL SEPARATOR ===

// Horizontal Separator Component Styles
let horizontalSeparatorStyle = {
  margin: '80px auto',
  width: '70%',
  borderTop: 'none',
  borderBottom: '1px solid #e7e7e7'
}
class HorizontalSeparator extends Component {
  render() {
    return (
      <hr class="horizontal-separator" style={{ ...horizontalSeparatorStyle }} />
    );
  }
}

// === COUNTDOWN ===

// CountDown Component Styles
let countDownStyle = {
  width: '70%',
  margin: '0 auto',
  background: '#ececec',
  border: 'solid 1px #e0e0e0',
  padding: '88px',
  display: 'flex',
  justifyContent: 'space-between'
}
class CountDown extends Component {
  render() {
    return (
      <div style={{ ...countDownStyle }}>
        <div>Count Down</div>
        <button>NOTIFY ME</button>
      </div>
    );
  }
}

// === ABOUT 'Who is Jaro?' ===

// About Compoment Styles
let aboutItemStyle = {
  content: {
    display: 'flex', 
    alignItems: 'center',
    minHeight: '600px'
  },
  h2: {
    textAlign: 'center'
  },
  item: {
    display: 'inline-block',
    width: '30%',
    textAlign: 'center'
  },
  number: {
    fontSize: '6rem'
  },
  description: {
    fontSize: '1.5rem'
  },
  separator: {
    fontSize: '8rem',
    display: 'inline-block'
  }
}
class About extends Component {
  render() {
    return (
      <div>
        <h2 style={{ ...globalStyles.h2, ...aboutItemStyle.h2 }}>Who is Jaro</h2>
        <div style={{ ...aboutItemStyle.content }}>
          <div class="about-item" style={{ ...aboutItemStyle.item }}>
            <div style={{ ...aboutItemStyle.number, paddingLeft: '25px' }}>340+</div>
            <p style={{ ...aboutItemStyle.description }}>Projects Completed</p>
          </div>
          <div style={{ ...aboutItemStyle.separator}}>/</div>
          <div class="about-item" style={{ ...aboutItemStyle.item }}>
            <div style={{ ...aboutItemStyle.number }}>7</div>
            <p style={{ ...aboutItemStyle.description }}>Feautred in Wired Magazine</p>
          </div>
          <div style={{ ...aboutItemStyle.separator}}>/</div>
          <div class="about-item" style={{ ...aboutItemStyle.item }}>
            <div style={{ ...aboutItemStyle.number }}>11</div>
            <p style={{ ...aboutItemStyle.description }}>Years in Business</p>
          </div>
        </div>
      </div>
    );
  }
}


// === TIMELINE ===

// Timeline Component Styles
let timelineStyle = {

}
class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <h3 style={{ ...globalStyles.h3 }}>Key Dates</h3>
        <div class="key-date-item" style={{ ...timelineStyle }}>
          <img src={supporterDemoImage} style={{ ...supporterImageStyle }} />
          <h3>Justina Andriuškevičiutė</h3>
          <p>Public relations and communications advisor</p>
        </div>
      </div>
    );
  }
}

// === SUPPORTERS ===

// Supporters Component Styles
let supporterStyle = {
  display: 'inline-block',
  padding: '30px',
  verticalAlign: 'top'
}
let supporterImageStyle = {
  width: '300px'
}
class Supporters extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h2 style={{ ...globalStyles.h2 }}>Supporters</h2>
        <div class="supporter" style={{...supporterStyle}}>
          <img src={supporterDemoImage} style={{...supporterImageStyle}} />
          <h3>Ignas Mikalajūnas</h3>
          <p>Senior software Engineer</p>
        </div>
        <div class="supporter" style={{...supporterStyle}}>
          <img src={supporterDemoImage} style={{...supporterImageStyle}} />
          <h3>Tomas Jonušas</h3>
          <p>Teacher, profesor, management consultant</p>
        </div>
        <div class="supporter" style={{ ...supporterStyle}}>
          <img src={supporterDemoImage} style={{...supporterImageStyle}} />
          <h3>Justina Andriuškevičiutė</h3>
          <p>Public relations and communications advisor</p>
        </div>
        <div class="supporter" style={{...supporterStyle}}>
          <img src={supporterDemoImage} style={{...supporterImageStyle}} />
          <h3>Ignas Mikalajūnas</h3>
          <p>Senior software Engineer</p>
        </div>
        <div class="supporter" style={{...supporterStyle}}>
          <img src={supporterDemoImage} style={{...supporterImageStyle}} />
          <h3>Tomas Jonušas</h3>
          <p>Teacher, profesor, management consultant</p>
        </div>
        <div class="supporter" style={{...supporterStyle}}>
          <img src={supporterDemoImage} style={{...supporterImageStyle}} />
          <h3>Justina Andriuškevičiutė</h3>
          <p>Public relations and communications advisor</p>
        </div>
      </div>
    );
  }
}

// === HOMEPAGE 'App.js' ===

// Global Styles
let globalStyles = {
      h1: {
        fontSize: '3.2rem'
      },
      h2: {
        fontSize: '2.5rem'
      },
      h3: {
        fontSize: '1.8rem'
      }
    }
let containerStyle = {
  margin: '0 50px'
}
class App extends Component {
  render() {
    return (
      <div className="layout">
        <Menu />
        <div className="container" style={containerStyle}>
          <header style={{padding: '0 100px'}}>
            <div id="home" style={{textAlign: 'center', padding: '200px 0 100px'}}>
              <h1 style={{...globalStyles.h1}}>Jaro Coin</h1>
              <h3 style={{ ...globalStyles.h3 }}>Crypto currency fully baked by my Time</h3>
            </div>
            <div style={{ fontSize: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ padding: '20px' }}>
                <p>JaroCoin is the future of global blockchainification of personal time of smart specialists.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
              </div>
              <div className="video-container">
                    <iframe src="https://player.vimeo.com/video/201178499" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
            </div>

            <button style={{display: 'block', margin: '40px auto'}}>DOWNLOAD WHITE PAPER</button>

            <CountDown />
          </header>

          <HorizontalSeparator />

          <About />

          <HorizontalSeparator />

          <div className="contentContainer" style={{ padding: '0 100px' }}>
            <h2 style={{ ...globalStyles.h2, textAlign: 'center' }}>What is JaroCoin?</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="description">
                <p>JaroCoin is crypto asset 100% backed by Jaro time.</p>
                <p>Time is most preciouse asset we have. JaroCoin can't go to zero, you can not just trade it, hodl it or use as medium of exchange. You can withdrawal it for Jaro time and services.</p>
                <ul>
                  <li>It's higly valuble investment.</li>
                  <li>True utility coin.</li>
                  <li>Truely limited suply > JARO suply is limited as time is.</li>
                </ul>
              </div>
              <img src={jaroCoinDemoImage} />
            </div>
          </div>

          <HorizontalSeparator />

          <div className="contentContainer">
            <h2 style={{ ...globalStyles.h2, textAlign: 'center' }}>With JaroCoin You Can</h2>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <div class="contentContainerItem" style={{width: '30%'}}>
                  <h3>Trade</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                </div>
                <div class="contentContainerItem" style={{width: '30%'}}>
                  <h3>HODL</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                </div>
                <div class="contentContainerItem" style={{width: '30%'}}>
                  <h3>Ask to Code</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                </div>
                <div class="contentContainerItem" style={{width: '30%'}}>
                  <h3>Get Crypto Advice</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                </div>
                <div class="contentContainerItem" style={{width: '30%'}}>
                  <h3>Pay for Webinar</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                </div>
                <div class="contentContainerItem" style={{width: '30%'}}>
                  <h3>Learn More</h3>

                </div>
              </div>
            </div>
          </div>

          <HorizontalSeparator />
            
          <Supporters />

        </div>
      </div>
    );
  }
}

export default App;
