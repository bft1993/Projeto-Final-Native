import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import logo from '../../../assets/logo.jpeg';
import { Container, Logo, Title, InputLogin, InputPassword, Recover, LoginButton, LoginText } from './styles';

export default function Login () {
    const [user, setUser] = useState({
        login: '',
        password: '',
        
    });

    const navigation = useNavigation();

    function screenForgotPassword(){
        navigation.navigate('ForgotPassword');
    }

    function screenMenu(){
        navigation.navigate('Menu');
    }

    return (
        <Container>
            <Logo source={logo} />
            <Title>Login</Title>
            <InputLogin value={user.login} onChangeText={setUser} placeholder={'Digite seu Login'} placeholderTextColor={'#22430F font-weight: bold'} />
            <InputPassword value={user.password} onChangeText={setUser} placeholder={'Digite sua senha'} placeholderTextColor={'#22430F font-weight: bold'} />
            <TouchableOpacity onPress={screenForgotPassword}>
                <Recover>Esqueceu sua senha? Clique aqui</Recover>
            </TouchableOpacity>
            <LoginButton>
                <TouchableOpacity onPress={screenMenu}>
                    <LoginText>ENTRAR</LoginText>
                </TouchableOpacity>
            </LoginButton>
            <StatusBar style='auto' />
        </Container>
    );
}