import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [name, setName] = useState('Elliam Sánchez');
    const [email, setEmail] = useState('elliamsanchez510@gmail.com');

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Implementa el cambio al modo oscuro en tu aplicación aquí
    };

    return (
        <ScrollView style={darkMode ? styles.containerDark : styles.containerLight}>
            <View style={styles.profileContainer}>
                <MaterialCommunityIcons name="account-circle" size={120} color={darkMode ? '#ffffff' : '#333333'} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={darkMode ? styles.inputFieldDark : styles.inputFieldLight}
                    placeholder="Nombre"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={darkMode ? styles.inputFieldDark : styles.inputFieldLight}
                    placeholder="Correo Electrónico"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>

            <View style={styles.settingsContainer}>
                <View style={styles.settingItem}>
                    <Text style={darkMode ? styles.settingTextDark : styles.settingTextLight}>Modo Oscuro</Text>
                    <Switch value={darkMode} onValueChange={toggleDarkMode} />
                </View>
                {/* Agrega más configuraciones relevantes aquí */}
            </View>

            <TouchableOpacity style={darkMode ? styles.logoutButtonDark : styles.logoutButtonLight}>
                <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    containerDark: {
        flex: 1,
        backgroundColor: '#121212',
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    inputContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    inputFieldLight: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    inputFieldDark: {
        backgroundColor: '#333333',
        color: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    settingsContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    settingTextLight: {
        fontSize: 18,
        color: '#333333',
    },
    settingTextDark: {
        fontSize: 18,
        color: '#ffffff',
    },
    logoutButtonLight: {
        backgroundColor: '#4285f4',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    logoutButtonDark: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Profile;
