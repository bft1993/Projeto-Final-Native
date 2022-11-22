import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 380px;
    height: 200px;
    margin-top: -200px;
`;

export const ButtonText = styled.Text`
    font-family: sans-serif;
    text-align: center;
    color: #22430F;
    font-weight: bold;
    position: absolute;
`;

export const PlusButton = styled.TouchableOpacity`
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

export const Recover = styled.Text`
    color: #120a8f;
    font-family: sans-serif;
    font-size: 12px;
`;

export const InputLogin = styled.TextInput`
    height: 31px;
    width: 188px;
    border-radius: 5px;
    padding-left: 5px;
    font-family: sans-serif;
    margin-top: 30px;
    margin-bottom: 30px;
    box-shadow: 0 4px 4px #456135;
    background-color: #87B28E;
`;

export const InputPassword = styled.TextInput`
    height: 31px;
    width: 188px;
    border-radius: 5px;
    padding-left: 5px;
    font-family: sans-serif;
    margin-bottom: 5px;
    box-shadow: 0 4px 4px #456135;
    background-color: #87B28E;
`;

export const Title = styled.Text`
    color: #648E4B;
    font-weight: 800;
    font-size: 24px;
    margin-top: 42px;
    font-weight: bold;
`;