import { useState } from "react";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { Header } from "../../components/Header/index.js";
import { EditInputUser } from "../../components/EditInputUser/index.js";
import { MainButton, ButtonText } from "../../components/MainButton/styles.js";
import { ImgButton } from "../../components/ImgButton/index.js";
import { Api } from "../../services/index.js";

export const UserRegister = ({navigation}) => {
    const [fCpf, setFCpf] = useState("");
    const [fFoto, setFFoto] = useState("https://i.imgur.com/khLyPgQ.png");
    const [fDtNascimento, setFDtNascimento] = useState("");
    const [fLogin, setFLogin] = useState("");
    const [fNome, setFNome] = useState("");
    const [fSenha, setFSenha] = useState("");


    const addPost = () => {
        const data = {
            nome: fNome,
            cpf: fCpf,
            dtNascimento: fDtNascimento,
            login: fLogin,
            ativo: "true",
            senha: fSenha,
            foto: fFoto,
        };

        console.log(data);

        Api.post("/usuario", data)
           .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigation.goBack();
           });
    };

    function goBack () {
        navigation.goBack();
    }

    return (
        <MainContainer>
            <Header title = {"Cadastrar Usuario"} goBack = {goBack} iconName = {"arrow-back"}  />
            <ImgButton sourceImage = {fFoto}/>
            <EditInputUser
                placeHolder={"Cpf"}
                onChangeText={(text) => setFCpf(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Link da Foto"}
                onChangeText={(text) => setFFoto(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Data de nascimento"}
                onChangeText={(text) => setFDtNascimento(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Login"}
                onChangeText={(text) => setFLogin(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Nome de usuário"}
                onChangeText={(text) => setFNome(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Senha"}
                onChangeText={(text) => setFSenha(text)}
                autoCapitalize={"words"}
            />

            <MainButton onPress={() => addPost()}>
                <ButtonText>
                    Cadastrar
                </ButtonText>
            </MainButton>
        </MainContainer>
    )
};