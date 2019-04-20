import React, { Component } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
  margin: 64px 0;
  padding: 35px 100px;
  display: flex;
  width: 100%;
  height: 500px;
  background: white;
  box-sizing: border-box;
  .header-box {
    padding: 20px 10px;
  }
  .scroll-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-y: hidden;
    white-space: nowrap;
    padding:20px 20px 20px 0;
  }

  @media screen and (max-width: 992px) {
    padding: 35px 30px;
  }
`;
const ScrollBox = props => {
  return (
    <StyledBox>
      <div class="header-box">
        <h3>{props.header}</h3>
      </div>
      <div class="scroll-box">{props.children}</div>
    </StyledBox>
  );
};
export default ScrollBox;
