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

    useEffect(() => {
        getUser();
    }, []);

    function goBack() {
        navigation.goBack();
    };

    function save() {
        Api.put(`/usuario/${id}`, {
            statusUsuario: ativo,
            cpfUsuario: cpf,
            fotoUsuario: foto,
            dtNascimentoUsuario: dtNascimento,
            loginUsuario: login,
            nomeUsuario: nome,
            senhaUsuario: senha,
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

            <MainButton onPress={() => save()}>
                <ButtonText>
                    Cadastrar
                </ButtonText>
            </MainButton>

        </MainContainer>
    );
};