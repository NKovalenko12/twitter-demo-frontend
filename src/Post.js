import React from "react";
import styled from "styled-components";
import Preview from "./Preview";

import pinned from "./img/IconPinned.svg";
import comments from "./img/IconComments.svg";
import retweets from "./img/IconRetweet.svg";
import loves from "./img/IconLoves.svg";
import envelope from "./img/IconEnvelope.svg";
import avatar from "./img/MiniAvatar.svg";

const Wrap = styled.div`
  padding: 8px 0 12px 18px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e1e8ed;
`;

const PostBlock = styled.div`
  margin-left: 13px;
  display: flex;
  flex-direction: column;
`;

const AvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Name = styled.span`
  line-height: 19px;
  font-weight: 500;
  font-size: 15px;
  color: #292f33;
`;

const ProfileName = styled.span`
  line-height: 19px;
  font-size: 13px;
  font-weight: 400;
  color: #697787;
`;

const AvatarImage = styled.img`
  width: 42px;
  height: 42px;
`;

const Text = styled.p`
  line-height: 22px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.2px;
  color: #292f33;
  margin-top: 0;
`;

const BigText = styled.p`
  line-height: 30px;
  font-size: 25px;
  font-weight: 200;
  color: #292f33;
  margin: 0 0 13px 0;
`;

const Icon = styled.img`
  margin-right: 11px;
  cursor: pointer;
`;

const Pin = styled.img`
  margin-bottom: 10px;
`;

const Action = styled.div`
  display: flex;
`;

const ActionCount = styled.span`
  font-size: 13px;
  letter-spacing: -0.2px;
  color: ${props => (props.liked ? "#E2264D" : "#667580")};
  font-weight: ${props => (props.liked ? "bold" : "normal")};
`;

const ActionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
`;

const Pinned = styled.span`
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 12px;
  letter-spacing: -0.2px;
  color: #707e88;
  margin-bottom: 4px;
  display: block;
`;

const ImageBlock = styled.div`
  margin: 0 11px 14px 0;
  cursor: pointer;
`;

const PostedImage = styled.img`
  width: 495px;
`;

const Post = props => (
  <Wrap>
    <AvatarBlock pinned={props.pinned}>
      {props.pinned && <Pin src={pinned} />}
      <AvatarImage src={avatar} />
    </AvatarBlock>
    <PostBlock>
      <div>
        {props.pinned && <Pinned>Pinned Tweet</Pinned>}
        <Name>{props.name} </Name>
        <ProfileName>
          @{props.profileName} • {props.time}
        </ProfileName>
      </div>
      {props.bigFont && <BigText>{props.children}</BigText>}
      {!props.bigFont && <Text>{props.children}</Text>}
      {props.preview && (
        <Preview
          image={props.preview.image}
          link={props.preview.link}
          title={props.preview.title}
        >
          {props.preview.description}
        </Preview>
      )}
      {props.image && (
        <ImageBlock>
          <PostedImage src={props.image} />
        </ImageBlock>
      )}
      <ActionBlock>
        <Action>
          <Icon src={comments} />
        </Action>
        <Action>
          <Icon src={retweets} />
        </Action>
        <Action>
          <Icon src={loves} />
        </Action>
        <Action>
          <Icon src={envelope} />
        </Action>
      </ActionBlock>
    </PostBlock>
  </Wrap>
);

export default Post;
