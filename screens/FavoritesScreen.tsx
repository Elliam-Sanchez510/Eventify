import React from "react";
import { StyleSheet, } from "react-native";
import Favorites from "../components/favorites/Favorites";

const FavoritesScreen = () => {
    return (
        <Favorites/>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },

});

export default FavoritesScreen;
