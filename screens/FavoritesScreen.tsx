import React from "react";
import Favorites from '../Components/Favorites/Favorites';
import { StyleSheet, } from "react-native";

const FavoritesScreen = () => {
    return(
        <Favorites/>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
    },
  
  });

export default FavoritesScreen;