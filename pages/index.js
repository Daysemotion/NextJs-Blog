import { Avatar, Button, Typography, Card } from "antd";
import React from "react";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import { UserOutlined, GithubOutlined, AuditOutlined } from "@ant-design/icons";
import MainCard from "../components/MainCard";

const MainInfoCard = styled.div`
  position: relative;
  display: flex;
  width: 60%;
  height: 250px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  & .ant-avatar {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const MainInfoDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const MainInfoLink = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  & button {
    margin-right: 10px;
  }
`;

const NextJsBlog = () => {
  return (
    <AppLayout>
      <MainInfoCard>
        <Avatar size={120} icon={<UserOutlined />} />
        <MainInfoDesc>
          <h2>Oh GyungHwan</h2>
          <p>안녕하세요 오경환의 개발 블로그 입니다</p>
        </MainInfoDesc>
        <MainInfoLink>
          <Button icon={<GithubOutlined />}>Github</Button>
          <Button icon={<AuditOutlined />}>Portfolio</Button>
        </MainInfoLink>
      </MainInfoCard>
      <MainCard title="Posts" />
      <MainCard title="Porfolio" />
    </AppLayout>
  );
};

export default NextJsBlog;
