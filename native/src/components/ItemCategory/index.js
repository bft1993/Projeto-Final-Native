import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Api } from "../../services";
import colors from "../../themes/colors";
import { Card, Photo, TextContainer, Name, ButtonsContainer, CustomButton } from "./styles";
import { IdContext } from "../../context/index"

export const ItemCategory = ({ name, photo }) => {
  const {id, setId} = useContext(IdContext);
  const navigation = useNavigation();

  function deleteItem(identificador) {
    Api.delete(`/categoria/${identificador}`)
      .then(res => {
      alert("Item excluido com sucesso!");
      navigation.navigate("Categories")
     }).catch(() => alert("Erro!"));
  };

  function editItem (identificador) {
    const itemId = identificador;
    setId(itemId);
    navigation.navigate("EditCategory");
  };

  return (
    <Card>
      <Photo source={{ uri: photo }} />
      <TextContainer>
        <Name>{name}</Name>
      </TextContainer>
      <ButtonsContainer>
        <CustomButton onPress={() => deleteItem(id)}>
          <FontAwesome5 name="trash" size={20} color={colors.primary} />
        </CustomButton>
        <CustomButton onPress={() => editItem(id)} >
          <MaterialIcons name="edit" size={24} color={colors.primary} />
        </CustomButton>
      </ButtonsContainer>
    </Card>
  );
};