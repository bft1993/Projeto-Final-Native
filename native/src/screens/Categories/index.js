import { useNavigation } from "@react-navigation/native";
import { Api } from "../../services";
import { FlatList } from "react-native";
import { ItemCategory } from "../../components/ItemCategory/index.js";
import { useState, useEffect } from "react";
import logo from '../../../assets/logo.jpeg';
import { Container, Logo, Title, PlusButton } from './styles';
import { Header } from "../../components/Header/index.js";
export const Categories = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState([]);

  const renderItem = ({ item }) => (
    <ItemCategory name={item.nome} photo={item.foto} />
  );

  useEffect(() => {
    getCategories();
  }, [category]);

  const getCategories = async () => {
    const { data } = await Api.get("/categoria");
    setCategory(data);
  };

  function goBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header title={"categorias"} iconName={"arrow-back"} goBack={goBack} />
      <Logo source={logo} />
      <Title>Categorias</Title>
      <PlusButton onPress={() => navigation.navigate("CategoryRegister")} />
      <FlatList
        data={category}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Container>
  );
};
