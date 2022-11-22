import { useContext, useState } from "react";
import { AppRegistry } from "react-native-web";
import { Container, Logo, Title, Input, PlusButton, ButtonText } from './styles';
import logo from '../../../assets/logo.jpeg';

export const EditCategory = ({ navigation }) => {
    const {id} = useContext(IdContext);
    const [name, setName] = useState({});
    const [photo, setPhoto] = useState({});
    const getCategory = async() => {
        const {data} = await Api.get(`/categoria/${id}`);
        setName(data.name);
        setPhoto(data.photo);
    };

    useEffect(() => {
        getCategory();
    }, []);

    function goBack() {
        navigation.goBack();
    };

    function save() {
        App.put(`/categoria/${id}`, {
            nome: name,
            foto: photo,
        }).then(() => {
            alert("Item editado com sucesso!");
            navigation.goBack();
        })
    };

    return (
        <Container>
            <Logo source={logo} />
            <Title>Editar categoria</Title>
            <ImgButton sourceImg={{ uri: photo }} />
            <Input name={"Nome:"} value={name} onChangeText={(text) => setName(text)} />
            <PlusButton style={{ marginTop: 60 }} onPress={() => save()}>
                <ButtonText>
                    Salvar
                </ButtonText>
            </PlusButton>
        </Container>
    )
};