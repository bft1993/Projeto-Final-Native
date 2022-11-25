import { useEffect, useState } from "react";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { Header } from "../../components/Header/index.js";
import { EditInputUser } from "../../components/EditInputUser/index.js";
import { MainButton, ButtonText } from "../../components/MainButton/styles.js";
import { ImgButton } from "../../components/ImgButton/index.js";
import { Api } from "../../services/index.js";
import { Picker } from "@react-native-picker/picker";

export const ProductRegister = ({ navigation }) => {
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("https://i.imgur.com/khLyPgQ.png");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState();
    const [qtdEstoque, setQTDEstoque] = useState();
    const [categoria, setCategoria] = useState([]);


    const addPost = () => {
        const data = {
            categoria: categoria,
            descricao: descricao,
            foto: foto,
            nome: nome,
            preco: preco,
            qtdEstoque: qtdEstoque,
        };

        Api.post("/produto", data)
            .then((res) => {
                alert("Produto cadastrado com sucesso!");
                navigation.goBack();
            });  
    };

    useEffect(() => {
        getCategoria();
    }, [categoria]);
    
    const getCategoria = async () => {
        const { data } = await Api.get("/categoria");
        setCategoria(data);
    }

    function goBack() {
        navigation.goBack();
    }
    return (
        <MainContainer>
            <Header title={"Cadastrar Produto"} goBack={goBack} iconName={"arrow-back"} />
            <ImgButton sourceImage={foto} />
            <EditInputUser
                placeHolder={"Informe o Nome"}
                onChangeText={(text) => setNome(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o endereço da foto"}
                onChangeText={(text) => setFoto(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe a Descrição"}
                onChangeText={(text) => setDescricao(text)}
                autoCapitalize={"words"}
            />
            <Picker
                selectedValue="Escolha uma categoria"
                onValueChange={(itemValue, itemIndex) => 
                    this.setCategoria({itemValue, itemIndex})
                }>
                    {
                        categoria.map(cr => {
                            console.log("+++++++",cr) 
                            return <Picker.item label={cr} value={cr}/>
                        })
                    }
            </Picker>
            <EditInputUser
                placeHolder={"Informe o preço"}
                onChangeText={(number) => setPreco(number)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o estoque"}
                onChangeText={(number) => setQTDEstoque(number)}
                autoCapitalize={"words"}
            />

            <MainButton onPress={() => addPost()}>
                <ButtonText>
                    Cadastrar
                </ButtonText>
            </MainButton>
        </MainContainer>
    )
}