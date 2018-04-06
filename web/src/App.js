import React, { Component } from 'react'
import ReactGA from 'react-ga'

import { Layout } from 'antd'
import { Divider } from 'antd'

import AntDMenu from './components/AntDMenu'
import HeaderContent from './components/Header'
import About from './components/About'
import TokenDistributionModel from './components/TokenDistributionModel'

import Services from './components/Services'
import Quotes from './components/Quotes'
import Footer from './components/Footer'

import './globalStyles.antd-custom.css'

class App extends Component {
  render() {
    ReactGA.initialize('UA-117095638-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
    return (
      <div>

        <AntDMenu />

        {/* <Layout style={{maxWidth: '1280px', margin: '0 auto', overflow: 'hidden'}}> */}
        <Layout style={{overflow: 'hidden'}}>

          <HeaderContent />

          <Divider id="about" style={{ width: '90%', margin: '80px auto' }} />

          <About />

          <Divider id="token-distribution-model" className="divider" />

          <TokenDistributionModel />

          <Divider id="services" style={{ width: '90%', margin: '80px auto' }} />

          <Services />

          <Divider id="quotes" style={{ width: '90%', margin: '80px auto' }} />

          <Quotes />

          <Divider id="contact" style={{ width: '60%', margin: '80px auto' }} />

          <Footer />

        </Layout>
      </div>
    );
  }
}

export default App;