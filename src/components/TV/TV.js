import React, { Component } from 'react';

import { Player } from 'video-react'
import { toast, ToastContainer } from 'react-toastify'

import { Row, Col, Card } from 'antd'

import Button from 'antd/lib/button'

import 'react-toastify/dist/ReactToastify.css'
import './TV.css';
import './player.css';

import Data from '../../dummyData'

export default class TV extends Component {
  
  constructor(props) {
    super(props)

    var vid = Data.find( obj => obj.id === parseInt(this.props.match.params.id) )

    console.log(vid)

    this.state = {
      vid: vid,
      activeAds: [],
      wishList: []
    }

  }

  componentDidMount() {
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this))
  }

  ToastAd = ({obj, likeCallback, followCallback}) => {
    function handleLikeClick(){
      likeCallback()
    }

    function handleFollowClick() {
      followCallback()
    }
  
    return (
      <div>
        <h3>
          { obj.title } <Button type="primary" onClick={handleLikeClick.bind(this)}>Like</Button> <Button type="primary" onClick={handleFollowClick.bind(this)}>Follow</Button>
        </h3>
      </div>
    );
  }

  handleStateChange(state, prevState) {
    var currentTime = state.currentTime
    this.state.vid.adTags.map( obj => {
      if (obj.secStart < currentTime && currentTime < obj.secEnd && this.state.activeAds.indexOf(obj.id) < 0) {
        this.setState( prevState => { activeAds: prevState.activeAds.push(obj.id) } )
        toast(
        <this.ToastAd 
          obj = { obj }
          likeCallback = { (() => {
            this.setState((prevState) => { wishList: prevState.wishList.push(obj) }, () => { console.log(this.state.wishList) })
          }).bind(this)}
          followCallback = { () => {
            this.refs.player.pause() 
            var win = window.open(obj.followLink, '_blank')
            win.focus()
          }}
        
        />, {
          position: "top-right",
          autoClose: (obj.secEnd - obj.secStart)*1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        })
      } else if (obj.secStart > currentTime || obj.secEnd < currentTime) {
        if (this.state.activeAds.indexOf(obj.id) >= 0)
          this.setState( prevState => { activeAds: prevState.activeAds.splice(prevState.activeAds.indexOf(obj.id), 1) } )
      }
    })

  }

  render() {

    return (
      <div>
        <Row gutter = {10}>
          <Col span={16}>
          <ToastContainer closeOnClick={false} position="top-right"/>
            <Player
              poster = { this.state.vid.cover }
              ref = "player"
            >
              <source src={ this.state.vid.vid } />
            </Player>
          </Col>
          <Col span={8}>
            <h2> <center> Wishlist </center> </h2>
            <div style={{ overflow: 'scroll', height: 400 }}>
              <Card title="HP Laptop" extra={<a href="https://www.amazon.in/HP-15-bs145tu-15-6-inch-Integrated-Sparkling/dp/B078LQ1W9Q/ref=sr_1_cc_1?s=aps&ie=UTF8&qid=1529812307&sr=1-1-catcorr&keywords=laptop+hp">More</a>} style={{ width: 300 }} />
              <Card title="Looking for keyboard?" extra={<a href="https://www.amazon.in/HP-15-bs145tu-15-6-inch-Integrated-Sparkling/dp/B078LQ1W9Q/ref=sr_1_cc_1?s=aps&ie=UTF8&qid=1529812307&sr=1-1-catcorr&keywords=laptop+hp">More</a>} style={{ width: 300 }} />
              {
                this.state.wishList.map(obj => (
                  <Card title={ obj.title } extra={<a href={ obj.followLink }>More</a>} style={{ width: 300 }} />
                ))
              }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}