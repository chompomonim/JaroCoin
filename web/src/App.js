import React, { Component } from 'react';

import AntDMenu from './components/AntDMenu'
import HorizontalSeparator from './components/HorizontalSeparator'

// Supporters Component image import (For demo purpose). Needs webpack or related package to be installed
import supporterDemoImage from './images/supporter-demo.jpg';
import jaroCoinDemoImage from './images/jarocoin-demo.jpg';
import tokenDistributionDemoImage from './images/tokendistribution-demo.jpg';
import timelineDemoImage from './images/timeline-demo.jpg';
import youtubeThumbnailDemoImage from './images/youtubethumbnail-demo.jpg';




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
          <div style={{ ...aboutItemStyle.item }}>
            <div style={{ ...aboutItemStyle.number, paddingLeft: '25px' }}>340+</div>
            <p style={{ ...aboutItemStyle.description }}>Projects Completed</p>
          </div>
          <div style={{ ...aboutItemStyle.separator}}>/</div>
          <div style={{ ...aboutItemStyle.item }}>
            <div style={{ ...aboutItemStyle.number }}>7</div>
            <p style={{ ...aboutItemStyle.description }}>Feautred in Wired Magazine</p>
          </div>
          <div style={{ ...aboutItemStyle.separator}}>/</div>
          <div style={{ ...aboutItemStyle.item }}>
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
  image: {
    width: '1000px',
    display: 'block',
    margin: '0 auto'
  }
}
class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <h3 style={{ ...globalStyles.h3 }}>Key Dates</h3>
        <img style={{ ...timelineStyle.image }} src={timelineDemoImage} />
        <div className="key-date-item" style={{ ...timelineStyle }}>
        </div>
      </div>
    );
  }
}

// === USECASES ===

// UseCases Component Styles
let useCasesStyle ={
  list: {
    display: 'flex',
    alignContent: 'center'
  },
  item: {
    width: '380px',
    border: 'solid 1px #d0d0d0',
    textAlign: 'right',
    margin: '0 20px'
  },
  h3: {
    fontSize: '2rem',
    height: '112px'
  },
  label: {
    fontSize: '1.2rem'
  },
  itemContent: {
    padding: '0 20px 20px',
  },
  description: {
    verticalAlign: 'bottom',
    fontSize: '1.5rem',
    height: '84px',
    overflow: 'hidden',
    background: 'linear - gradient(white, transparent)',
    background: '-moz - linear - gradient(white, transparent)',
    background: '-webkit - linear - gradient(white, transparent)'
  },
  image: {
    width: '380px',
    height: '250px',
    display: 'block'
  }
}

class UseCases extends Component {
  render() {
    return (
      <div className="contentContainer">
        <h2 style={{ ...globalStyles.h2, textAlign: 'center' }}>Usecases</h2>
        <div style={{ ...useCasesStyle.list}}>
          <div style={{ ...useCasesStyle.item }}>
            <button style={{ ...useCasesStyle.label }}>Community Baked</button>
            <div style={{ ...useCasesStyle.itemContent }}>
              <h3 style={{ ...useCasesStyle.h3 }}>Ethereum Smart Contract Analysis Algorithm</h3>

              <p style={{ ...useCasesStyle.description }}>This video shows how the right blockchain smart contract analysis should be made</p>
            </div>
            <img style={{ ...useCasesStyle.image }} src={youtubeThumbnailDemoImage} />
          </div>
          <div style={{ ...useCasesStyle.item }}>
            <div style={{ ...useCasesStyle.itemContent }}>
              <h3 style={{ ...useCasesStyle.h3 }}>WonHwaDo Trainings</h3>
              <button style={{ ...useCasesStyle.label }}>Friends Baked</button>
              <p style={{ ...useCasesStyle.description }}>Every Wednesday 1.5h</p>
            </div>
            <img style={{ ...useCasesStyle.image }} src={youtubeThumbnailDemoImage} />
          </div>
          <div style={{ ...useCasesStyle.item }}>
            <div style={{ ...useCasesStyle.itemContent }}>
              <h3 style={{ ...useCasesStyle.h3 }}>Mentorship</h3>
              <button style={{ ...useCasesStyle.label }}>Personal Initiative</button>
              <p style={{ ...useCasesStyle.description }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
            </div>
            <img style={{ ...useCasesStyle.image }} src={youtubeThumbnailDemoImage} />
          </div>
          <div style={{ ...useCasesStyle.item }}>
            <div style={{ ...useCasesStyle.itemContent }}>
              <h3 style={{ ...useCasesStyle.h3 }}>Bora Bora Vacations</h3>
              <button style={{ ...useCasesStyle.label }}>Family Baked</button>
              <p style={{ ...useCasesStyle.description }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
            </div>
            <img style={{ ...useCasesStyle.image }} src={youtubeThumbnailDemoImage} />
          </div>
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
  verticalAlign: 'top',
  width: '300px'
}
let supporterImageStyle = {
  width: '300px'
}
class Supporters extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h2 style={{ ...globalStyles.h2 }}>Supporters</h2>
        <div className="supporter" style={{...supporterStyle}}>
          <img style={{ ...supporterImageStyle }} src={supporterDemoImage} />
          <h3>Ignas Mikalajūnas</h3>
          <p>Senior software Engineer</p>
        </div>
        <div className="supporter" style={{...supporterStyle}}>
          <img style={{ ...supporterImageStyle }} src={supporterDemoImage} />
          <h3>Tomas Jonušas</h3>
          <p>Teacher, profesor, management consultant</p>
        </div>
        <div className="supporter" style={{ ...supporterStyle}}>
          <img style={{ ...supporterImageStyle }} src={supporterDemoImage} />
          <h3>Justina Andriuškevičiutė</h3>
          <p>Public relations and communications advisor</p>
        </div>
        <div className="supporter" style={{...supporterStyle}}>
          <img style={{ ...supporterImageStyle }} src={supporterDemoImage} />
          <h3>Ignas Mikalajūnas</h3>
          <p>Senior software Engineer</p>
        </div>
        <div className="supporter" style={{...supporterStyle}}>
          <img style={{ ...supporterImageStyle }} src={supporterDemoImage} />
          <h3>Tomas Jonušas</h3>
          <p>Teacher, profesor, management consultant</p>
        </div>
        <div className="supporter" style={{...supporterStyle}}>
          <img style={{ ...supporterImageStyle }} src={supporterDemoImage} />
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
       
        <AntDMenu />
        
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
                    <iframe src="https://player.vimeo.com/video/201178499" width="640" height="360" frameBorder="0"></iframe>
              </div>
            </div>

            <button style={{display: 'block', margin: '40px auto'}}>DOWNLOAD WHITE PAPER</button>

            <CountDown />
          </header>

          <HorizontalSeparator />

          <About />

          <HorizontalSeparator />

          <div className="contentContainer" style={{ padding: '0 200px' }}>
            <h2 style={{ ...globalStyles.h2, textAlign: 'center' }}>What is JaroCoin?</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
              <div className="description" style={{width: '600px'}}>
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
                <div style={{width: '30%'}}>
                  <h3>Trade</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                </div>
                <div style={{width: '30%'}}>
                  <h3>HODL</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                </div>
                <div style={{width: '30%'}}>
                  <h3>Ask to Code</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                </div>
                <div style={{width: '30%'}}>
                  <h3>Get Crypto Advice</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                </div>
                <div style={{width: '30%'}}>
                  <h3>Pay for Webinar</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                </div>
                <div style={{width: '30%'}}>
                  <h3>Learn More</h3>

                </div>
              </div>
            </div>
          </div>

          <HorizontalSeparator />

          <div className="contentContainer" style={{padding: '0 200px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <img style={{width: '500px', height: '500px'}} src={tokenDistributionDemoImage} />
              <div style={{width: '40%'}}>
                <h2 style={{ ...globalStyles.h2}}>Token distribution</h2>
                <p>1 JARO = 1 Jaro second = 0.0001 bitcoin</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
                <p>There are only 21 000 000* JARO</p>
                icon<button> Learn more in whitepaper</button>
              </div>
            </div>

          <Timeline />

          </div>

          <HorizontalSeparator />

          <UseCases />

          <HorizontalSeparator />

          <Supporters />

        </div>
      </div>
    );
  }
}

export default App;
