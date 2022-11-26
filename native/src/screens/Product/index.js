import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Header } from "../../components/Header/index.js";
import { ItemProduct } from "../../components/ItemProduct/index.js";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { PlusButton } from "../../components/PlusButton/index.js";
import { Api } from "../../services";

export const Product = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);

  const renderItem = ({ item }) => (
    <ItemProduct  idProduct={item.id} nomeProduct={item.nome} fotoProduct={item.foto} descricaoProduct={item.descricao} qtdEstoqueProduct={item.qtdEstoque} precoProduct={item.preco} categoriaProduct={item.categoria} identificador={item.id}  />
  );

  useEffect(() => {
    getProduct();
  }, [product]);

  const getProduct = async () => {
    const { data } = await Api.get("/produto");
    setProduct(data);
  };

  function goBack() {
    navigation.goBack();
  };

  return (
    <MainContainer>
      <Header title={"Produtos"} iconName={"arrow-back"} goBack={goBack} />
      <PlusButton onPress={() => navigation.navigate("ProductRegister")} />
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </MainContainer>
  );
};