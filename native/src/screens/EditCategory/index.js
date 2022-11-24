import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/index.js";
import { EditInput } from "../../components/EditInput/index.js";
import { ImgButton } from "../../components/ImgButton/index.js";
import { ButtonText, MainButton } from "../../components/MainButton/styles.js";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { IdContext } from "../../context/index.js";
import { Api } from "../../services/index.js";

export const EditCategory = ({ navigation }) => {

    const { id } = useContext(IdContext);
    const [name, setName] = useState({});
    const [photo, setPhoto] = useState({});

    const getCategory = async () => {
        const { data } = await Api.get(`/categoria/${id}`);
        setName(data.nome);
        setPhoto(data.foto);
    };

    useEffect(() => {
        getCategory();
    }, []);

    function goBack() {
        navigation.goBack();
    };

    function save() {
        Api.put(`/categoria/${id}`, {
            nome: name,
            foto: photo,
        }).then(() => {
            alert("Item editado com sucesso!");
            navigation.goBack();
        });
    };

    return (
        <MainContainer>
            <Header title={"Editar categoria"} goBack={goBack} iconName={"arrow-back"} />
            {/* <ImgButton sourceImg={{ uri: photo }} /> */}
            <ImgButton sourceImage = {photo}/>
            <EditInput
                name={"Nome:"}
                placeHolder={"Informe a categoria"}
                value={name}
                onChangeText={(text) => setName(text)}
                autoCapitalize={"words"}
            />
            <EditInput
                name={"Foto:"}
                placeHolder={"Informe o endereço da imagem"}
                onChangeText={(text) => setPhoto(text)}
                autoCapitalize={"words"}
            />
            <MainButton style={{ marginTop: 60 }} onPress={() => save()} >      
            <ButtonText>
                Salvar
            </ButtonText>
            </MainButton>
        </MainContainer>
    );
};