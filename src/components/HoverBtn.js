import React, { Component } from 'react';
import './HoverBtn.css'
class HoverBtn extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }
  onClickMouseHoverBtn () {
      window.open("https://github.com/yoyounn18");
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div >
        <div
        className="hover-btn"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
        <img src="https://static.blex.kr/image/2019/12/04/0_nZBp85JR98k6gzb.png"></img>
        {this.state.isHovering
        &&<div className="hover-inner" onClick={this.onClickMouseHoverBtn}>
             프로젝트
          </div>}
      </div>
      </div>
    );
  }
}

export default HoverBtn;