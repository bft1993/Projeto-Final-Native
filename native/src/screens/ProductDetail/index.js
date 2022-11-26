import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/index.js";
import { ItemDetail } from "../../components/ItemDetail/index.js";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { Api } from "../../services";

export const ProductDetail = () => {
  const routes = useRoute();
  const navigation = useNavigation();
  const [produto, setProduto] = useState([]);
  
  // const renderItem = ({item}) => (
  //   <ItemDetail id={item.id} name={item.nome} photo={item.foto}  description={item.descricao} price={item.preco} qtyStorage={item.qtdEstoque} category={item.categoriaId}/>
  // );
  
  useEffect(() => {
    getProduct();
  }, []);
  
  const getProduct = async () => {
    const { data } = await Api.get(`/produto/${routes.params.id}`);
    setProduto(data);
    
  };
    
  function goBack() {
    navigation.goBack();
  };
  return (
    <MainContainer>
      <Header title={"Detalhe"} iconName={"arrow-back"} goBack={goBack} /> 
        {/* <FlatList
        data={produto}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      /> */}
      <ItemDetail id={produto.id} name={produto.nome} photo={produto.foto}  description={produto.descricao} price={produto.preco} qtyStorage={produto.qtdEstoque} category={produto.categoriaId}/>
    </MainContainer>
  );

};
