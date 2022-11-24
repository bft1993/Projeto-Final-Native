import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ButtonText, MainButton } from "../../components/MainButton/styles";
import { MainContainer } from "../../components/MainContainer/styles";
import { UserCategory } from "../../components/UserCategory";
import { IdContext } from "../../context";
import { Api } from "../../services";


export const UserDelete = ({ navigation }) => {
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
            ativo: "false",
            cpf: fCpf,
            foto: fFoto,
            dtNascimento: fDtNascimento,
            login: fLogin,
            nome: fNome,
            senha: fSenha,
        }).then(() => {
            alert("Usuário desativado com sucesso!");
            navigation.goBack();
        });
    };

    return (
        <MainContainer>
            <Header title = {"Excluir Usuario"} goBack = {goBack} iconName = {"arrow-back"}  />

            <UserCategory statusUsuario={fAtivo} cpfUsuario={fCpf} fotoUsuario={fFoto} dtNascimentoUsuario={fDtNascimento} loginUsuario={fLogin} nomeUsuario={fNome} senhaUsuario={fSenha} identificador={id} />

            <MainButton onPress={() => save()}>
                <ButtonText>
                    Desativar
                </ButtonText>
            </MainButton>

        </MainContainer>
    );
};