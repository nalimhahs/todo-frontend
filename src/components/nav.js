import React, { Component } from "react";
import styled from 'styled-components';

const NavContainer = styled.div`
  height: 70px;
  background-color: #476C7C;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 10px;
  /* display: flex; */
  /* justify-content:center; */
  -webkit-box-shadow: 3px 4px 15px 0px rgba(129, 129, 129, 0.56);
  -moz-box-shadow: 3px 4px 15px 0px rgba(129, 129, 129, 0.56);
  box-shadow: 3px 4px 15px 0px rgba(129, 129, 129, 0.56);
`

export default class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <header class="navbar">
          <section class="navbar-section">
            <button class="btn btn-link">Docs</button>
            <button class="btn btn-link">Examples</button>
          </section>
          <section class="navbar-center">
            <img alt=""></img>
          </section>
          <section class="navbar-section">
            <button class="btn btn-link">Twitter</button>
            <button class="btn btn-link">GitHub</button>
          </section>
        </header>
      </NavContainer>
    );
  }
}
