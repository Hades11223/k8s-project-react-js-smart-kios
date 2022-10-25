import React, { useState, useEffect, useRef } from "react";
import Header from "@components/header/Header";
import LoadingOverlay from "react-loading-overlay";
import { withRouter } from "react-router-dom";
// import images from '@src/resources/images'
var time;
class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  resetTimer() {
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      if (this.props.history.location.pathname != "/home") {
        this.props.history.push("/home");
      }
    }, 60000);
  }
  componentDidMount() {
    window.onload = this.resetTimer.bind(this);
    document.onmousemove = this.resetTimer.bind(this);
    document.onkeydown = this.resetTimer.bind(this);
    document.onclick = this.resetTimer.bind(this);
    window.onclick = this.resetTimer.bind(this);
    window.onfocus = this.resetTimer.bind(this);
    window.ontouchstart = this.resetTimer.bind(this);
  }
  componentWillUnmount = () => {
    if (time) clearTimeout(time);
  };
  render() {
    return (
      <LoadingOverlay active={this.props.isLoading} spinner text="Vui lòng chờ">
        <div className={this.props.classApp + " app"}>
          <Header {...this.props} />
          <div className="root-container">{this.props.children}</div>
          <div className="logo-isofh">
            {/* <img src={images.logo_isofh} alt="" /> */}
          </div>
        </div>
      </LoadingOverlay>
    );
  }
}

export default withRouter(Container);
