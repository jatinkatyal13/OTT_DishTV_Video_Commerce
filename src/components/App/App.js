import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Layout, Breadcrumb, Menu } from 'antd'

import SideBar from '../SideBar'
import Button from 'antd/lib/button'

import { Link } from 'react-router-dom';

import './App.css';

const { Header, Content } = Layout

export default class App extends Component{

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar />
        <Layout>
          <Header style={{ background: '#fff', padding: 2 }} >
            <h1> Ad Tags </h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }

}

App.propTypes = {
  children: PropTypes.any
}
