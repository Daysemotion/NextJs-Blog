import React, { useState, useCallback } from "react";

import { Layout } from "antd";
import { Menu } from "antd";
import { IoMoonSharp, IoSunnyOutline, IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const { Header, Content } = Layout;

const HeaderStyle = styled(Header)`
  position: fixed;
  z-index: 6000;
  top: 0;
  left: 0;
  right: 0;
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
    padding-left: 1rem;

    & svg {
      font-size: 1.125rem;
      cursor: pointer;
    }
  }
`;

const AppLayout = ({ children }) => {
  const router = useRouter();
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
      key: "About",
    },
  ];

  return (
    <Layout>
      <HeaderStyle>
        <h1>blog</h1>
        <MenuStyle
          mode="horizontal"
          items={menuItems}
          defaultSelectedKeys={
            router.pathname === "/"
              ? ["Blog"]
              : router.pathname === "/post"
              ? ["Post"]
              : ["About"]
          }
        ></MenuStyle>
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
