import React, { Component } from 'react'

export default class DataBinding extends Component {
    hocVien = {
        ma:1,
        hoTen:'Nguyen Van a',
        hinhanh:'https://picsum.photos/200/300'
    }
    renderImg(){
        return <img src = "https://picsum.photos/200/300" alt = '123' />
    }
    render() {
        let title = 'hello fe 41'
        return (
            <div>
                <h1>{title}</h1>
                <input value={title} />
                {this.renderImg()}
                <div className = 'container'>
                    <div className = 'card text-left'>
                        <img width = {100} height = {300} className = 'card-img-top' src={this.hocVien.hinhanh}/>
                        <div className='card-body'>
                            <h4 className='card-title'/>{this.hocVien.hoTen}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
