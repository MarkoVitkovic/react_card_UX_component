import React, { Component } from 'react'
import Card from './CardUI'
import Img from '../assets/ps.jpg'
import Img2 from '../assets/bridge.jpg'
import Img3 from '../assets/table.jpg'

export default class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4 p-5">
                        <Card imgsrc={Img} title="Games"/>
                    </div>
                    <div className="col-md-4 p-5">
                        <Card imgsrc={Img2} title="Adventure"/>
                    </div>
                    <div className="col-md-4 p-5">
                        <Card imgsrc={Img3} title="Old but gold"/>
                    </div>
                </div>
            </div>
        )
    }
}
