import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Api } from "../../services";
import colors from "../../themes/colors";
import { Card, Photo, TextContainer, Name, ButtonsContainer, CustomButton } from "./styles";
import { IdContext } from "../../context/index"

export const UserCategory = ({ statusUsuario, cpfUsuario, fotoUsuario, dtNascimentoUsuario, loginUsuario, nomeUsuario, senhaUsuario, identificador }) => {
  const {id, setId} = useContext(IdContext);
  const navigation = useNavigation();

  function deleteUsuario(identificador) {
    Api.delete(`/usuario/${identificador}`)
      .then(res => {
      alert("Usuário excluido com sucesso!");
      navigation.navigate("Users")
     });
  };

  function editUsuario (identificador) {
    const itemId = identificador;
    setId(itemId);
    navigation.navigate("UserEdit");
  };

  return (
    <Card>
      <Photo source={{ uri: fotoUsuario }} />
      <TextContainer>
        <Name>{nomeUsuario}</Name>
        <Name>{statusUsuario}</Name>
        <Name>{cpfUsuario}</Name>
        <Name>{dtNascimentoUsuario}</Name>
        <Name>{loginUsuario}</Name>
        <Name>{senhaUsuario}</Name>
      </TextContainer>

      <ButtonsContainer>
        <CustomButton onPress={() => deleteUsuario(id)}>
          <FontAwesome5 name="trash" size={20} color={colors.primary} />
        </CustomButton>
        <CustomButton onPress={() => editUsuario(identificador)} >
          <MaterialIcons name="edit" size={24} color={colors.primary} />
        </CustomButton>
      </ButtonsContainer>
    </Card>
  );
};
