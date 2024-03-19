import React from 'react';
import { ScrollView, StyleSheet, Text, View, } from 'react-native';

const Favorites = () => {
    return (
        <ScrollView>
            <View style={styles.Container}>
                <Text style={styles.TextFavorites}>No hay elementos agregados</Text>
            </View>

        </ScrollView>
    )
}
export default Favorites;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    TextFavorites: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    }
   
})