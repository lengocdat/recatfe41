import React, { Component } from "react";
import BTHeader from "./BTHeader";
import BTSlider from "./BTSlider";
import BTProduceListComponient from "./BTProduceList";
import BTFooter from "./BTFooter";

export default class BaiTapDanLayOut extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTSlider />
        <BTProduceListComponient />
        <BTFooter />
      </div>
    );
  }
}
