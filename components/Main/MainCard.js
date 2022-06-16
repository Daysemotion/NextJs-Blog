import React from "react";
import { Typography, Card, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledMainCard = styled.div`
  position: relative;
  margin-top: 100px;
`;

const TitleStyle = styled(Typography.Title)`
  text-align: center;
`;

const MainCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const CardStyle = styled(Card)`
  margin: 0 20px;
`;

const CardButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 50px;
`;

const MainCard = ({ title }) => {
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
