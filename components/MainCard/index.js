import React from "react";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  CardButton,
  CardStyle,
  MainCardWrapper,
  StyledMainCard,
  TitleStyle,
} from "./mainCardStyle";
import { useSelector } from "react-redux";
const MainCard = ({ title }) => {
  const content = useSelector((state) => state.post.user);
  console.log(content);

  return (
    <StyledMainCard>
      <TitleStyle level={2}>{title}</TitleStyle>
      <MainCardWrapper>
        <CardStyle
          hoverable={true}
          style={{ width: 250 }}
          cover={
            <img
              alt=""
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Card.Meta
            avatar={<Avatar>{<UserOutlined />}</Avatar>}
            title="Card title"
            description="This is the description"
          />
        </CardStyle>
        <CardStyle
          hoverable={true}
          style={{ width: 250 }}
          cover={
            <img
              alt=""
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Card.Meta
            avatar={<Avatar>{<UserOutlined />}</Avatar>}
            title="Card title"
            description="This is the description"
          />
        </CardStyle>
        <CardStyle
          hoverable={true}
          style={{ width: 250 }}
          cover={
            <img
              alt=""
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Card.Meta
            avatar={<Avatar>{<UserOutlined />}</Avatar>}
            title="Card title"
            description="This is the description"
          />
        </CardStyle>
      </MainCardWrapper>
      <CardButton>More Posts</CardButton>
    </StyledMainCard>
  );
};
export default MainCard;
