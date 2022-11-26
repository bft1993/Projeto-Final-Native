
import logo from '../../../assets/logo.jpeg';
import { Container, Logo, Title, LoginText, ProdutoButton, UsuarioButton, CategoriaButton, SairButton } from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


export default function Menu () {

    const navigation = useNavigation();

    function screenLoading(){
        navigation.navigate('Loading');
    }

    function screenUser(){
        navigation.navigate('Users');
    }

    function screenCategories(){
        navigation.navigate('Categories');
    }

    function screenProduct(){
        navigation.navigate('Product');
    }
    

    return (
        <Container>
            <Logo source={logo}/>
            <Title>Menu</Title>
            <UsuarioButton>
            <TouchableOpacity onPress={screenUser}>
            <LoginText>Usuario</LoginText>
            </TouchableOpacity>
            </UsuarioButton>

            <CategoriaButton>
            <TouchableOpacity onPress={screenCategories}>
                <LoginText>Categoria</LoginText>
            </TouchableOpacity>
            </CategoriaButton>

            <ProdutoButton>
            <TouchableOpacity onPress={screenProduct}>
                <LoginText>Produto</LoginText>
            </TouchableOpacity>
            </ProdutoButton>
            
            <SairButton>
            <TouchableOpacity onPress={screenLoading}>
                <LoginText>Sair</LoginText>
            </TouchableOpacity>
            </SairButton>
            
            
            
            <StatusBar style="auto" />
        </Container>
    );
 }