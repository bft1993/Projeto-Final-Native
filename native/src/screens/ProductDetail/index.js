import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Header } from "../../components/Header/index.js";
import { Api } from "../../services";

export const ProductDetail = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const [product, setProduct] = useState();

  useEffect(() => {
    Api.get(`/produto/${routes.params.id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  function goBack() {
    navigation.goBack();
  }

  return (
    <View>
      <Header title={"Produtos"} iconName={"arrow-back"} goBack={goBack} />
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: product?.foto }}
          style={{ width: 350, height: 350 }}
        />
        <Text>{product?.nome}</Text>
        <Text>R$ {product?.preco.toFixed(2)}</Text>
      </View>
    </View>
  );
};
