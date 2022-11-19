import { useState } from 'react';
import logo from '../../../assets/logo.jpeg';
import { Container, Logo, Title, LoginButton, LoginText } from './styles';
import { StatusBar } from 'expo-status-bar';

export default function Login () {

    const [user, setUser] = useState({
        cpf: '',
        new: '',
        confirm: '',
    });

    return (
        <Container>
            <Logo source={logo}/>
            <Title>Recuperar Senha</Title>
            <InputCPF value={user.cpf} onChangeText={setUser}placeholder={'CPF:'}placeholderTextColor={'#22430F font-weight: bold'} />
            <InputNew value={user.new} onChangeText={setUser}placeholder={'Nova Senha:'}placeholderTextColor={'#22430F font-weight: bold'} />
            <InputConfirm value={user.confirm} onChangeText={setUser}placeholder={'Confirme Nova Senha:'}placeholderTextColor={'#22430F font-weight: bold'} />
            <LoginButton>
                <LoginText>ENVIAR</LoginText>
            </LoginButton>
            <StatusBar style="auto" />
        </Container>
    );
}