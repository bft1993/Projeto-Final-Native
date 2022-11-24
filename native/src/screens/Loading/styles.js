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