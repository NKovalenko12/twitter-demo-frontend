import React, { Component } from "react";
import styled from "styled-components";
import more from "./img/IconMore.svg";

const Wrap = styled.div`
  width: auto;
  height: 60px;
  box-shadow: 0px 2px 2px #b0b8be;
`;

const StatBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  max-width: 400px;
`;

const StatTab = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StatLink = styled.a`
  line-height: 21px;
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  color: #707e88;
`;

const StatNumber = styled.span`
  line-height: 21px;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: #707e88;
  border: none;
  cursor: pointer;
`;

const FollowButton = styled.button`
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: #1da1f2;
  border-radius: 100px;
  width: 100px;
  height: 36px;
  line-height: 16px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #1da1f2;
  background: #ffffff;
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 300px;
`;

const MoreButton = styled.button`
  background-image: url(${more});
  background-repeat: no-repeat;
  background-position: center center;
  margin-left: 18px;
  width: 4px;
  height: 16px;
  background-color: white;
  border: none;
  appearance: none;
`;

class Statistics extends Component {
  render() {
    return (
      <Wrap>
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-4">
              <StatBlock>
                <StatTab>
                  <StatLink>Tweets</StatLink>
                  <StatNumber>8058</StatNumber>
                </StatTab>
                <StatTab>
                  <StatLink>Following</StatLink>
                  <StatNumber>721</StatNumber>
                </StatTab>
                <StatTab>
                  <StatLink>Followers</StatLink>
                  <StatNumber>1815</StatNumber>
                </StatTab>
                <StatTab>
                  <StatLink>Likes</StatLink>
                  <StatNumber>460</StatNumber>
                </StatTab>
                <StatTab>
                  <StatLink>Lists</StatLink>
                  <StatNumber>2</StatNumber>
                </StatTab>
              </StatBlock>
            </div>
            <div className="col-md-5">
              <FollowButton>Follow</FollowButton>
              <MoreButton />
            </div>
          </div>
        </div>
      </Wrap>
    );
  }
}

export default Statistics;
