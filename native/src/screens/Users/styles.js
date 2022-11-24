import styled from 'styled-components/native';
import colors from "../../themes/colors.js";

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.quaternary};
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 380px;
    height: 200px;
    margin-top: -200px;
`;

export const Title = styled.Text`
    color: ${colors.secondary};
    font-weight: 800;
    font-size: 24px;
    margin-top: 42px;
    font-weight: bold;
`;

export const InputCPF = styled.TextInput`
    height: 31px;
    width: 188px;
    border-radius: 5px;
    padding-left: 10px;
    font-family: sans-serif;
    margin-top: 10px;
    margin-bottom: 25px;
    box-shadow: 0 4px 4px ${colors.primary};
    background-color: ${colors.fivenary};
`;

export const InputNew= styled.TextInput`
    height: 31px;
    width: 188px;
    border-radius: 10px;
    padding-left: 5px;
    font-family: sans-serif;
    margin-bottom: 20px;
    box-shadow: 0 4px 4px #456135;
    background-color: ${colors.fivenary};
    left: 39px;
    top: 506px;

`;

export const InputConfirm= styled.TextInput`
    height: 31px;
    width: 188px;
    border-radius: 5px;
    padding-left: 5px;
    font-family: sans-serif;
    margin-bottom: 1px;
    box-shadow: 0 4px 4px ${colors.primary};
    background-color: ${colors.fivenary};
`;

export const LoginText = styled.Text`
    font-family: sans-serif;
    text-align: center;
    color: ${colors.sixnary};
    font-weight: bold;
    position: relative;
`;

export const SairButton = styled.TouchableOpacity`
    height: 33px;
    width: 131px;
    border-radius: 5px;
    margin-top: 40px;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 4px ${colors.primary};
    background-color: ${colors.fivenary};
`;