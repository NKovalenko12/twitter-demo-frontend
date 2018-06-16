import React, { Component } from "react";
import styled from "styled-components";
import home from "./img/IconHome.svg";
import messages from "./img/IconMessages.svg";
import moments from "./img/IconMoments.svg";
import notifications from "./img/IconNotifications.svg";
import tlogo from "./img/IconTwitterLogo.svg";
import magnifier from "./img/IconMagnifier.svg";
import avatar from "./img/MiniAvatar.svg";

const Wrap = styled.header`
  width: 100%;
  background: white;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 414px;
  height: 19px;
  margin-top: 13px;
  margin-bottom: 13px;
`;

const NavLinkBlock = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  line-height: 15px;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 0.01px;
  color: #667580;
`;

const NavIcon = styled.img`
  margin-right: 4.2px;
`;

const TwitterLogo = styled.img`
  margin-top: 16px;
  margin-bottom: 12.5px;
  display: inline-block;
`;

const RightFunctionality = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 155px;
`;
const SearchInput = styled.input`
  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #e6ecf0;
  border-radius: 100px;
  line-height: 14px;
  font-size: 12px;
  color: #687b8a;
  padding-left: 11px;
  width: 220px;
  padding-top: 9px;
  padding-bottom: 8px;
  background-image: url(${magnifier});
  background-repeat: no-repeat;
  background-position: 193px 9px;
  margin-right: 18px;
  margin-top: 6px;
  margin-bottom: 7px;
  outline: none;
`;

const TweetButton = styled.button`
  width: 72px;
  height: 32px;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  background: #1da1f2;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 6px;
  margin-bottom: 7px;
  margin-left: 19px;
  border: none;
`;

const Avatar = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 4px;
  margin-left: 15px;
`;

class Header extends Component {
  render() {
    return (
      <Wrap>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <Nav>
                <NavLinkBlock>
                  <NavIcon src={home} />
                  <NavLink>Home</NavLink>
                </NavLinkBlock>
                <NavLinkBlock>
                  <NavIcon src={moments} />
                  <NavLink>Moments</NavLink>
                </NavLinkBlock>
                <NavLinkBlock>
                  <NavIcon src={notifications} />
                  <NavLink>Notifications</NavLink>
                </NavLinkBlock>
                <NavLinkBlock>
                  <NavIcon src={messages} />
                  <NavLink>Messages</NavLink>
                </NavLinkBlock>
              </Nav>
            </div>
            <div className="col-md-2 center-md">
              <TwitterLogo src={tlogo} />
            </div>
            <div className="col-md-5">
              <RightFunctionality>
                <SearchInput placeholder="Search Twitter" />
                <Avatar src={avatar} />
                <TweetButton>Tweet</TweetButton>
              </RightFunctionality>
            </div>
          </div>
        </div>
      </Wrap>
    );
  }
}

export default Header;
