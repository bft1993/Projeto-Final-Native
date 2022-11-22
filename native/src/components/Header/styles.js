import styled from "styled-components/native";
// import colors from "../../themes/colors.js";

export const Container = styled.View`
  align-self: flex-start;
  width: 100%;
  height: 77px;
  background-color: #648E4B;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
  padding: 0 10px 0 10px;
`;

export const TitleContainer = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  color: #456135;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 50px;
`;





