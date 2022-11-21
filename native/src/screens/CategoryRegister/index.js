import { useState } from "react";
import { Api } from "../../services/index"
import { Container, Logo, Title, Input, PlusButton } from './styles';
export const CategoryRegister = ({navigation}) => {
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");

    const addPost = () => {
        const data = {
            nome: name,
            foto: photo,
        };

        Api.post("/categoria", data)
           .then((res) => {
                alert("Item cadastrado com sucesso!");
                navigation.goBack();
           });
    };

    function goBack() {
        navigation.goBack();
    }; 

    return (
        <Container>
            <Logo source={logo} />
            <Title>Cadastrar categoria</Title>
            <PlusButton sourceImage={photo} />
            <Input
                placeHolder={"Informe a cartegoria"}
                value={name}
                onChangeText={(text) => setName(text)}
                autoCapitalize={"words"}
            />
            <Input
                placeHolder={"Informe o endereço da imagem"}
                onChangeText={(text) => setPhoto(text)}
                autoCapitalize={"words"}
            />
            <PlusButton onPress={() => addPost()} >
                <ButtonText>
                    Cadastrar
                </ButtonText>
            </PlusButton>
        </Container>
    )
};