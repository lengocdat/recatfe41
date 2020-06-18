import React, { Component } from 'react'
import BTProduceItem from './BTProduceItem'

export default class BTProduceListComponient extends Component {
    render() {
        return (
            <div className = "container-fluid">
                <div className="row">
                    <div className="col-3">
                        <BTProduceItem />
                    </div>
                    <div className="col-3">
                        <BTProduceItem />
                    </div>
                    <div className="col-3">
                        <BTProduceItem />
                    </div>
                    <div className="col-3">
                        <BTProduceItem />
                    </div>
                </div>
            </div>
        )
    }
}
