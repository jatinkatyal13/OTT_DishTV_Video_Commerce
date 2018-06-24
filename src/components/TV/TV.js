import React, { Component } from 'react';

import { Player } from 'video-react'
import { toast, ToastContainer } from 'react-toastify'

import { Row, Col } from 'antd'

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
      activeAds: []
    }

  }

  componentDidMount() {
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this))
  }

  ToastAd = ({obj}) => {
    function handleClick(){
      
    }
  
    return (
      <div>
        <h3>
          { obj.title } <Button type="primary" onClick={handleClick}>Like</Button>
        </h3>
      </div>
    );
  }

  handleStateChange(state, prevState) {
    var currentTime = state.currentTime
    this.state.vid.adTags.map( obj => {
      if (obj.secStart < currentTime && currentTime < obj.secEnd && this.state.activeAds.indexOf(obj.id) < 0) {
        console.log(this.state.activeAds)
        this.setState( prevState => { activeAds: prevState.activeAds.push(obj.id) } )
        toast.update(<this.ToastAd obj = { obj }/>, {
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
        <Row>
          <Col span={16}>
            <Player
              ref = "player"
            >
              <ToastContainer closeOnClick={false} position="top-right"/>
              <source src={ this.state.vid.vid } />
            </Player>
          </Col>
        </Row>
      </div>
    );
  }
}