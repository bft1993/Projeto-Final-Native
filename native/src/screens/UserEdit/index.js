import { useContext, useEffect, useState } from "react";
import { EditInputUser } from "../../components/EditInputUser";
import { Header } from "../../components/Header";
import { ImgButton } from "../../components/ImgButton";
import { ButtonText, MainButton } from "../../components/MainButton/styles";
import { MainContainer } from "../../components/MainContainer/styles";
import { IdContext } from "../../context";
import { Api } from "../../services";


export const UserEdit = ({ navigation }) => {
    const { id } = useContext(IdContext);
    const [fAtivo, setFAtivo] = useState("");
    const [fCpf, setFCpf] = useState("");
    const [fFoto, setFFoto] = useState("https://i.imgur.com/khLyPgQ.png");
    const [fDtNascimento, setFDtNascimento] = useState("");
    const [fLogin, setFLogin] = useState("");
    const [fNome, setFNome] = useState("");
    const [fSenha, setFSenha] = useState("");

    const getUser = async () => {
        const { data } = await Api.get(`/usuario/${id}`);
        setFAtivo(data.ativo);
        setFCpf(data.cpf);
        setFFoto(data.foto);
        setFDtNascimento(data.dtNascimento);
        setFLogin(data.login);
        setFNome(data.nome);
        setFSenha(data.senha);
    };

    console.log(id)

    useEffect(() => {
        getUser();
    }, []);

    function goBack() {
        navigation.goBack();
    };

    function save() {
        Api.put(`/usuario/${id}`, {
            ativo: fAtivo,
            cpf: fCpf,
            foto: fFoto,
            dtNascimento: fDtNascimento,
            login: fLogin,
            nome: fNome,
            senha: fSenha,
        }).then(() => {
            alert("Usuário editado com sucesso!");
            navigation.goBack();
        });
    };

    return (
        <MainContainer>
            <Header title = {"Editar Usuario"} goBack = {goBack} iconName = {"arrow-back"}  />
            <ImgButton sourceImage = {fFoto}/>
            <EditInputUser
                placeHolder={"Informe o CPF"}
                value={fCpf}
                onChangeText={(text) => setFCpf(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o endereço da foto"}
                value={fFoto}
                onChangeText={(text) => setFFoto(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe a data de nascimento"}
                value={fDtNascimento}
                onChangeText={(text) => setFDtNascimento(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o login"}
                value={fLogin}
                onChangeText={(text) => setFLogin(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o nome de usuário"}
                value={fNome}
                onChangeText={(text) => setFNome(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe a senha"}
                value={fSenha}
                onChangeText={(text) => setFSenha(text)}
                autoCapitalize={"words"}
            />

            <MainButton onPress={() => save()}>
                <ButtonText>
                    Editar
                </ButtonText>
            </MainButton>

        </MainContainer>
    );
};