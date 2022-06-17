import styled from "styled-components";
import { Typography, Card, Button } from "antd";

export const StyledMainCard = styled.div`
  position: relative;
  margin-top: 100px;
`;

export const TitleStyle = styled(Typography.Title)`
  text-align: center;
`;

export const MainCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const CardStyle = styled(Card)`
  margin: 0 20px;
`;

export const CardButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 50px;
`;
