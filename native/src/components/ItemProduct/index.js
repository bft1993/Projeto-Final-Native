import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Api } from "../../services";
import colors from "../../themes/colors";
import { Card, Photo, TextContainer, Name, ButtonsContainer, CustomButton } from "./styles";
import { IdContext } from "../../context/index"

export const ItemProduct = ({ categoriaProduct, descricaoProduct, fotoProduct, nomeProduct, precoProduct, qtdEstoqueProduct, identificador }) => {
  const {id, setId} = useContext(IdContext);
  const navigation = useNavigation();

  function deleteProduct(identificador) {
    Api.delete(`/produto/${identificador}`)
      .then(res => {
      alert("Produto excluido com sucesso!");
      navigation.navigate("Product")
     });
  };

  function editProduct (identificador) {
    const itemId = identificador;
    setId(itemId);
    navigation.navigate("EditProduct");
  };

  return (
    <Card>
      <Photo source={{ uri: fotoProduct }} />
      <TextContainer>
        <Name>{nomeProduct}</Name>
        <Name>{descricaoProduct}</Name>
        <Name>{precoProduct}</Name>
        <Name>{qtdEstoqueProduct}</Name>
        <Name>{categoriaProduct.nome}</Name>
        <Photo style={{width: 15, height: 15}} source={{ uri: categoriaProduct.foto }} />
      </TextContainer>
        
      <ButtonsContainer>
        <CustomButton onPress={() => deleteProduct(identificador)}>
          <FontAwesome5 name="trash" size={20} color={colors.primary} />
        </CustomButton>
        <CustomButton onPress={() => editProduct(identificador)} >
          <MaterialIcons name="edit" size={24} color={colors.primary} />
        </CustomButton>
      </ButtonsContainer>
    </Card>
  );
};
