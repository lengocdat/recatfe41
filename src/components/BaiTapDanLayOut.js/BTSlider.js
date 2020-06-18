import React, { Component } from "react";

export default class BTSlider extends Component {
  render() {
    return (
      <div>
        <div id="demo" classname="carousel slide" data-ride="carousel">
          {"{"}/* Indicators */{"}"}
          <ul classname="carousel-indicators">
            <li data-target="#demo" data-slide-to="{0}" classname="active"></li>
            <li data-target="#demo" data-slide-to="{1}"></li>
            <li data-target="#demo" data-slide-to="{2}"></li>
          </ul>
          {"{"}/* The slideshow */{"}"}
          <div classname="carousel-inner">
            <div classname="carousel-item active">
              <img
                src="./img/slide_1.jpg"
                alt="Los Angeles"
                width="100%"
                height="{500}"
              />
            </div>
            <div classname="carousel-item">
              <img
                src="./img/slide_2.jpg"
                alt="Chicago"
                width="100%"
                height="{500}"
              />
            </div>
            <div classname="carousel-item">
              <img
                src="./img/slide_3.jpg"
                alt="New York"
                width="100%"
                height="{500}"
              />
            </div>
          </div>
          {"{"}/* Left and right controls */{"}"}
          <a classname="carousel-control-prev" href="#demo" data-slide="prev">
            <span classname="carousel-control-prev-icon"></span>
          </a>
          <a classname="carousel-control-next" href="#demo" data-slide="next">
            <span classname="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    );
  }
}
