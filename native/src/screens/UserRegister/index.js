import { useState } from "react";UserRegister
import { MainContainer } from "../../components/MainContainer/styles.js";
import { Header } from "../../components/Header/index.js";
import { EditInputUser } from "../../components/EditInputUser/index.js";
import { MainButton, ButtonText } from "../../components/MainButton/styles.js";
import { ImgButton } from "../../components/ImgButton/index.js";
import { Api } from "../../services/index.js";

export const UserRegister = ({navigation}) => {
    const [ativo, setAtivo] = useState("");
    const [cpf, setCpf] = useState("");
    const [foto, setFoto] = useState("https://i.imgur.com/khLyPgQ.png");
    const [dtNascimento, setDtNascimento] = useState("");
    const [login, setLogin] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");


    const addPost = () => {
        const data = {
            statusUsuario: ativo,
            cpfUsuario: cpf,
            fotoUsuario: foto,
            dtNascimentoUsuario: dtNascimento,
            loginUsuario: login,
            nomeUsuario: nome,
            senhaUsuario: senha,
        };

        Api.post("/usuario", data)
           .then((res) => {
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
            <ImgButton sourceImage = {foto}/>
            <EditInputUser
                placeHolder={"Informe o status"}
                value={ativo}
                onChangeText={(text) => setAtivo(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o CPF"}
                onChangeText={(text) => setCpf(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o endereço da foto"}
                onChangeText={(text) => setFoto(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe a data de nascimento"}
                onChangeText={(text) => setDtNascimento(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o login"}
                onChangeText={(text) => setLogin(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o nome de usuário"}
                onChangeText={(text) => setNome(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe a senha do usuário"}
                onChangeText={(text) => setSenha(text)}
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