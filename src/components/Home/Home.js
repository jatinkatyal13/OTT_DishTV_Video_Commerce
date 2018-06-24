import React, { Component } from 'react';
import { Card, Icon, Row, Col } from 'antd';

import { Link } from 'react-router-dom'

import Button from 'antd/lib/button'

import Data from '../../dummyData'

import './Home.css';

const { Meta } = Card

export default class Home extends Component {
	constructor(props) {
		super(props)

		var vids = []
		Data.map( obj => {
			const { vid, adTags, ...params} = obj
			vids.push(params)
		})

		this.state = {
			vids : vids
		}

	}

	render() {
		return (
			<div>
				<Row gutter={6}>
					{
						this.state.vids.map( obj => (
							<Col span={8}>
								<Card
									cover={<img alt="example" src={obj.cover} />}
									actions={[<Link to={ "/tv/" + obj.id }><Icon type="video-camera" /></Link>, <Icon type="edit" />, <Icon type="ellipsis" />]}
								>
									<Meta
										title={ obj.name }
										description={ obj.desc }
									/>
								</Card>
							</Col>
						))
					}
				</Row>
			</div>
		)
	}
}