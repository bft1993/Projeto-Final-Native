import logo from '../../../assets/logo.jpeg';
import { Logo, Title } from './styles';
import { View } from 'react-native';

export default function Loading () {
    return (
        <View>
            <Logo source={logo} />
            <Title>Loading...</Title>
        </View>
    );
}