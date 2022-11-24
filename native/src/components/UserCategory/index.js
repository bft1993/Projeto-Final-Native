import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../../themes/colors";
import { Card, Photo, TextContainer, Name, ButtonsContainer, CustomButton } from "./styles";
import { IdContext } from "../../context/index"

export const UserCategory = ({ statusUsuario, cpfUsuario, fotoUsuario, dtNascimentoUsuario, loginUsuario, nomeUsuario, senhaUsuario, identificador }) => {
  const {id, setId} = useContext(IdContext);
  const navigation = useNavigation();

  function deleteUsuario(identificador) {
    const itemId = identificador;
    setId(itemId);
    navigation.navigate("UserDelete");
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
        <Name>Nome: {nomeUsuario}</Name>
        <Name>Status: {statusUsuario ? "ativo":"inativo"}</Name>
        <Name>CPF: {cpfUsuario}</Name>
        <Name>Nascimento: {dtNascimentoUsuario}</Name>
        <Name>Login: {loginUsuario}</Name>
        <Name>Senha: {senhaUsuario}</Name>
      </TextContainer>

      <ButtonsContainer>
        <CustomButton onPress={() => deleteUsuario(identificador)}>
          <FontAwesome5 name="trash" size={20} color={colors.primary} />
        </CustomButton>
        <CustomButton onPress={() => editUsuario(identificador)} >
          <MaterialIcons name="edit" size={24} color={colors.primary} />
        </CustomButton>
      </ButtonsContainer>
    </Card>
  );
};
