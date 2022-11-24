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
    const [ativo, setAtivo] = useState("");
    const [cpf, setCpf] = useState("");
    const [foto, setFoto] = useState("https://i.imgur.com/khLyPgQ.png");
    const [dtNascimento, setDtNascimento] = useState("");
    const [login, setLogin] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const getUser = async () => {
        const { data } = await Api.get(`/usuario/${id}`);
        setAtivo(data.ativo);
        setCpf(data.cpf);
        setFoto(data.foto);
        setDtNascimento(data.dtNascimento);
        setLogin(data.login);
        setNome(data.nome);
        setSenha(data.senha);
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
            ativo: ativo,
            cpf: cpf,
            foto: foto,
            dtNascimento: dtNascimento,
            login: login,
            nome: nome,
            senha: senha,
        }).then(() => {
            alert("Usuário editado com sucesso!");
            navigation.goBack();
        });
    };

    return (
        <MainContainer>
            <Header title = {"Editar Usuario"} goBack = {goBack} iconName = {"arrow-back"}  />
            <ImgButton sourceImage = {foto}/>
            <EditInputUser
                placeHolder={"Informe o status"}
                value={ativo}
                onChangeText={(text) => setAtivo(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o CPF"}
                value={cpf}
                onChangeText={(text) => setCpf(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o endereço da foto"}
                value={foto}
                onChangeText={(text) => setFoto(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe a data de nascimento"}
                value={dtNascimento}
                onChangeText={(text) => setDtNascimento(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o login"}
                value={login}
                onChangeText={(text) => setLogin(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o nome de usuário"}
                value={nome}
                onChangeText={(text) => setNome(text)}
                autoCapitalize={"words"}
            />

            <MainButton onPress={() => save()}>
                <ButtonText>
                    Cadastrar
                </ButtonText>
            </MainButton>

        </MainContainer>
    );
};