import React, { Component } from 'react'

import { Layout } from 'antd'
import { Divider } from 'antd'

import AntDMenu from './components/AntDMenu'
import HeaderContent from './components/HeaderContent'
import About from './components/About'
import Services from './components/Services'
import Usecases from './components/Usecases'
import LatestPosts from './components/LatestPosts'
import Supporters from './components/Supporters'
import Faq from './components/Faq'
import Quotes from './components/Quotes'

import './globalStyles.antd-custom.css'

const { Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>

        <AntDMenu />

        <Layout style={{maxWidth: '1280px', margin: '0 auto', background: 'white', overflow: 'hidden'}}>

          <HeaderContent />

          <Divider style={{ width: '90%', margin: '80px auto' }} />

          <About />

          <Divider style={{ width: '90%', margin: '80px auto' }} />

          <Services />

          <Divider style={{ width: '90%', margin: '80px auto' }} />

          <Usecases />

          <Divider style={{ width: '90%', margin: '80px auto' }} />

          <LatestPosts />

          <Divider style={{ width: '90%', margin: '80px auto' }} />

          <Supporters />

          <Divider style={{ width: '90%', margin: '80px auto' }} />

          <Faq />

          <Divider style={{ width: '90%', margin: '80px auto' }} />

          <Quotes />

          <Divider style={{ width: '90%', margin: '80px auto' }} />

          <Footer style={{ textAlign: 'center'}}>JaroCoin ©2018</Footer>

        </Layout>
      </div>
    );
  }
}

export default App;