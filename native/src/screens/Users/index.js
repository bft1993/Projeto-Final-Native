import { MainContainer } from "../../components/MainContainer/styles.js";
import { Header } from "../../components/Header/index.js";
import { useNavigation } from "@react-navigation/native";
import { PlusButton } from "../../components/PlusButton/index.js";
import { Api } from "../../services";
import { FlatList } from "react-native";
import { UserCategory } from "../../components/UserCategory/index.js";
import { useState, useEffect } from "react";

export const Users = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState([]);

  const renderItem = ({ item }) => (
    <UserCategory statusUsuario={item.ativo} cpfUsuario={item.cpf} fotoUsuario={item.foto} dtNascimentoUsuario={item.dtNascimento} idUsuario={item.id} loginUsuario={item.login} nomeUsuario={item.nome} senhaUsuario={item.senha}  />
  );

  useEffect(() => {
    getUsers();
  }, [user]);

  const getUsers = async () => {
    const { data } = await Api.get("/usuario");
    setUser(data);
  };

  function goBack() {
    navigation.goBack();
  };

  return (
    <MainContainer>
      <Header title={"Usuários"} iconName={"arrow-back"} goBack={goBack} />
      <PlusButton onPress={() => navigation.navigate("UserRegister")} />
      <FlatList
        data={user}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </MainContainer>
  );
};