import { useContext, useState, useEffect } from "react";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { Header } from "../../components/Header/index.js";
import { EditInputUser } from "../../components/EditInputUser/index.js";
import { MainButton, ButtonText } from "../../components/MainButton/styles.js";
import { ImgButton } from "../../components/ImgButton/index.js";
import { Api } from "../../services/index.js";
import { Picker } from '@react-native-picker/picker';
import { IdContext } from "../../context";

export const EditProduct = ({ navigation }) => {
    const { id } = useContext(IdContext);
    const [produtoNome, setProdutoNome] = useState("");
    const [produtoFoto, setProdutoFoto] = useState("https://i.imgur.com/khLyPgQ.png");
    const [categoriaId, setCategoriaId] = useState();
    const [produtoDescricao, setProdutoDescricao] = useState("");
    const [produtoPreco, setProdutoPreco] = useState();
    const [produtoQTDEstoque, setProdutoQTDEstoque] = useState();
    const [categoria, setCategoria] = useState([]);
    
    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const { data } = await Api.get(`/produto/${id}`);
        setProdutoNome(data.nome);
        setProdutoFoto(data.foto);
        setProdutoDescricao(data.descricao);
        setProdutoPreco(data.preco);
        setProdutoQTDEstoque(data.qtdEstoque);
        setCategoriaId(data.categoriaId);
      };     


    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = async () => {
        const { data } = await Api.get("/categoria");
        setCategoria(data);
    };

    function goBack() {
        navigation.goBack();
    }

    function Save() {
        Api.put(`/produto/${id}`, {
          nome: produtoNome,
          foto: produtoFoto,
          descricao: produtoDescricao,
          preco: produtoPreco,
          qtdEstoque: produtoQTDEstoque,
          categoriaId: categoriaId,
        }).then(() => {
          alert("Produto editado com sucesso!");
          navigation.goBack();
        });
      }
    return (
        <MainContainer>
            <Header title={"Editar Produto"} goBack={goBack} iconName={"arrow-back"} />
            <ImgButton sourceImage={produtoFoto} />
            <EditInputUser
                placeHolder={"Informe o Nome"}
                value={produtoNome}
                onChangeText={(text) => setProdutoNome(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o endereço da foto"}
                value={produtoFoto}
                onChangeText={(text) => setProdutoFoto(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe a Descrição"}
                value={produtoDescricao}
                onChangeText={(text) => setProdutoDescricao(text)}
                autoCapitalize={"words"}
            />
             <Picker style={{
                width: 187,
                height: 33,
                marginTop: 40,
                marginBottom: 5,
                borderRadius: 5,
                borderColor: 'transparent',
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 4px #456135",
                backgroundColor: '#87B28E',
                color: '#fff',
            }}
                selectedValue="escolha um valor"
                onValueChange={(itemValue) =>
                setCategoriaId(itemValue)
                }>
                {
                    categoria.map((categoria) => {
                        return (
                            <Picker.Item label={categoria.nome} value={categoria.id} key={categoria.id} />
                        );
                    })
                }
            </Picker>

            <EditInputUser
                placeHolder={"Informe o preço"}
                value={produtoPreco}
                onChangeText={(text) => setProdutoPreco(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o estoque"}
                value={produtoQTDEstoque}
                onChangeText={(text) => setProdutoQTDEstoque(text)}
                autoCapitalize={"words"}
            />

            <MainButton onPress={() => Save()}>
                <ButtonText>
                    Editar
                </ButtonText>
            </MainButton>
        </MainContainer>
    )
};