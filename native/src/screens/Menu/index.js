import logo from '../../../assets/logo.jpeg';
import { Container, Logo, Title, LoginText, ProdutoButton, UsuarioButton, CategoriaButton, SairButton } from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Loading from '../Loading';

export default function Menu () {

    const navigation = useNavigation();

    function screenLoadin(){
        navigation.navigate('Loading');
    }

    function screenUsuario(){
        navigation.navigate('usuario');
    }

    function screenCategoria(){
        navigation.navigate('Categoria');
    }

    function screenProduto(){
        navigation.navigate('Produto');
    }
    

    return (
        <Container>
            <Logo source={logo}/>
            <Title>Menu</Title>
            <UsuarioButton>
            <TouchableOpacity onPress={screenUsuario}>
            <LoginText>Usuario</LoginText>
            </TouchableOpacity>
            </UsuarioButton>

            <CategoriaButton>
            <TouchableOpacity onPress={screenCategoria}>
                <LoginText>Categoria</LoginText>
            </TouchableOpacity>
            </CategoriaButton>

            <ProdutoButton>
            <TouchableOpacity onPress={screenProduto}>
                <LoginText>Produto</LoginText>
            </TouchableOpacity>
            </ProdutoButton>
            
            <SairButton>
            <TouchableOpacity onPress={Loading}>
                <LoginText>Sair</LoginText>
            </TouchableOpacity>
            </SairButton>
            
            
            
            <StatusBar style="auto" />
        </Container>
    );
}