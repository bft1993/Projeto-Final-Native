import styled from "styled-components/native";
import colors from "../../themes/colors";

export const MainButton = styled.TouchableOpacity`
    height: 33px;
    width: 131px;
    border-radius: 5px;
    margin-top: 40px;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 4px #456135;
    background-color: #87B28E;
`;

export const ButtonText = styled.Text`
    color: #456135;
    font-size: 14px;
    align-self: center;
    position: absolute;
    font-family: "sans-serif";
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
`;