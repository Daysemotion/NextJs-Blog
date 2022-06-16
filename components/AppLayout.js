import React, { useState, useCallback } from "react";

import { Layout } from "antd";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { IoMoonSharp, IoSunnyOutline, IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import Link from "next/link";

const { Header, Content } = Layout;

const HeaderStyle = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  & h1 {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const MenuStyle = styled(Menu)`
  width: 300px;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    padding: 0px 10px;
    margin: 0px 5px;

    & svg {
      font-size: 1.125rem;
      cursor: pointer;
    }
  }
`;

const AppLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const onDarkmode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);
  const menuItems = [
    {
      label: (
        <Link href="/">
          <a>Blog</a>
        </Link>
      ),
      key: "Blog",
    },
    {
      label: (
        <Link href="/post">
          <a>Post</a>
        </Link>
      ),
      key: "Post",
    },
    {
      label: (
        <Link href="/about">
          <a>About</a>
        </Link>
      ),
      key: "Abou323t",
    },
  ];

  return (
    <Layout>
      <HeaderStyle>
        <h1>blog</h1>
        <MenuStyle mode="horizontal" items={menuItems}></MenuStyle>
        <IconWrapper>
          <div onClick={onDarkmode}>
            {isDarkMode ? <IoSunnyOutline /> : <IoMoonSharp />}
          </div>
          <div>
            <IoSearchOutline />
          </div>
        </IconWrapper>
      </HeaderStyle>
      <Content style={{ background: "white" }}>{children}</Content>
    </Layout>
  );
};

export default AppLayout;
