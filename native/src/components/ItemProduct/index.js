import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { IdContext } from "../../context/index";
import { Api } from "../../services";
import colors from "../../themes/colors";
import {
  ButtonsContainer,
  Card,
  CustomButton,
  Name,
  Photo,
  TextContainer
} from "./styles";

export const ItemProduct = ({
  idProduct,
  categoriaProduct,
  descricaoProduct,
  fotoProduct,
  nomeProduct,
  precoProduct,
  qtdEstoqueProduct,
  identificador,
}) => {
  const { id, setId } = useContext(IdContext);
  const navigation = useNavigation();

  function deleteProduct(identificador) {
    Api.delete(`/produto/${identificador}`).then((res) => {
      alert("Produto excluido com sucesso!");
      navigation.navigate("Product");
    });
  }

  function editProduct(identificador) {
    const itemId = identificador;
    setId(itemId);
    navigation.navigate("EditProduct");
  }

  const screenDetails = () => {
    navigation.navigate("ProductDetails", {
      id: idProduct,
    });
  };

  return (
    <TouchableOpacity onPress={screenDetails}>
      <Card>
        <Photo source={{ uri: fotoProduct }} />
        <TextContainer>
          <Name>{nomeProduct}</Name>
          <Name>{descricaoProduct}</Name>
          <Name>{precoProduct}</Name>
          <Name>{qtdEstoqueProduct}</Name>
          <Name>{categoriaProduct.nome}</Name>
          <Photo
            style={{ width: 15, height: 15 }}
            source={{ uri: categoriaProduct.foto }}
          />
        </TextContainer>

        <ButtonsContainer>
          <CustomButton onPress={() => deleteProduct(identificador)}>
            <FontAwesome5 name="trash" size={20} color={colors.primary} />
          </CustomButton>
          <CustomButton onPress={() => editProduct(identificador)}>
            <MaterialIcons name="edit" size={24} color={colors.primary} />
          </CustomButton>
        </ButtonsContainer>
      </Card>
    </TouchableOpacity>
  );
};
