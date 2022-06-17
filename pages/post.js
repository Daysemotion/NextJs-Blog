import React from "react";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import { Layout, Input, Menu } from "antd";
import styled from "styled-components";
const { Sider, Content } = Layout;

const PostLayout = styled(Layout)`
  margin-top: 100px;
`;

const SiderStyle = styled(Sider)`
  & p {
    font-size: 0.875rem;
    text-align: center;
  }
`;

const PostContentStyle = styled(Content)`
  background: white;
  padding: 0px 4rem;
`;

const BottomBorder = styled.div`
  width: 70%;
  height: 1px;
  background: black;
  margin: 1.5rem auto;
`;

const menuItem = [
  {
    label: "전체보기",
    key: 1,
  },
  {
    label: "리액트",
    key: 2,
  },
];

const post = () => {
  return (
    <AppLayout>
      <PostLayout>
        <SiderStyle theme="light" width={250}>
          <div style={{ position: "fixed" }}>
            <p>Tags</p>
            <BottomBorder />
            <Menu
              items={menuItem}
              style={{ width: 240 }}
              mode="inline"
              theme="light"
            />
          </div>
        </SiderStyle>
        <PostContentStyle>
          <div>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </PostContentStyle>
      </PostLayout>
    </AppLayout>
  );
};

export default post;
