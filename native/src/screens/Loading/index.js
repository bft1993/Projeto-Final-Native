import logo from '../../../assets/logo.jpeg';
import { Container, Title, Logo} from './styles';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Loading () {

    const navigation = useNavigation();

    function screenLogin(){
        navigation.navigate('Login');
    }

    return (
        <Container>
            <Logo source={logo} />
            <TouchableOpacity onPress={screenLogin}>
                <Title>Loading...</Title>
            </TouchableOpacity>
        </Container>
    );
}