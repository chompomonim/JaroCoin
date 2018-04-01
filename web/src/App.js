import React, { Component } from 'react'

import { Layout } from 'antd'
import { Divider } from 'antd'

import AntDMenu from './components/AntDMenu'
import HeaderContent from './components/Header'
import About from './components/About'
import TokenDistributionModel from './components/TokenDistributionModel'

import Services from './components/Services'
import Usecases from './components/Usecases'
import LatestPosts from './components/LatestPosts'
import Supporters from './components/Supporters'
import Faq from './components/Faq'
import Quotes from './components/Quotes'
import GetJaroButton from './components/GetJaroButton'
import Footer from './components/Footer'

import './globalStyles.antd-custom.css'

//const { Footer } = Layout;

class App extends Component {
  render() {
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

          <Divider id="usecases" style={{ width: '90%', margin: '80px auto' }} />

          <Usecases />

          <Divider id="latest-posts" style={{ width: '90%', margin: '80px auto' }} />

          <LatestPosts />

          <Divider id="supporters" style={{ width: '90%', margin: '80px auto' }} />

          <Supporters />

          <Divider id="faq" style={{ width: '90%', margin: '80px auto' }} />

          <Faq />

          <Divider id="quotes" style={{ width: '90%', margin: '80px auto' }} />

          <Quotes />

          <Divider id="contact" style={{ width: '60%', margin: '80px auto' }} />

          <GetJaroButton />

          <Footer />

        </Layout>
      </div>
    );
  }
}

export default App;