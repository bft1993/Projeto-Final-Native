import { useContext, useEffect } from "react";
import { Header } from "react-navigation-stack";


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
            <ImgButton sourceImage = {photo}/>
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

            <MainButton style={{ marginTop: 60 }} onPress={() => save()} >      </MainButton>

            <ButtonText>
                Salvar
            </ButtonText>
        </MainContainer>
    );
};