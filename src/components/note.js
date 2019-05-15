import React, { Component } from "react";

import '../assets/styles/card.css'

export default class Note extends Component {
  render() {
    return (
      <>
        <div class="card">
          <div class="card-header">
            <div class="card-title h5">{this.props.title}</div>
            <div class="card-subtitle text-gray">{this.props.subtitle}</div>
          </div>
          <div class="line"></div>
          <div class="card-body">{this.props.content}</div>
          {/* <div class="card-footer">
            <button class="btn btn-primary">Click Me.</button>
          </div> */}
        </div>
      </>
    );
  }
}
