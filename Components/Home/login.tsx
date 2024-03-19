import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
    return (
        <ScrollView>

            <View style={styles.Login}>
                <TextInput
                    placeholder='Correo@gmail.com'
                    style={styles.Input}
                />

                <TextInput
                    placeholder='Password'
                    style={styles.Input}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.TextButton}>Login</Text>
                </TouchableOpacity>

                <View style={styles.Register}>
                    <TouchableOpacity style={styles.ButtonFacebook}>
                        <Text style={styles.TextButton}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonGoogle}>
                        <Text style={styles.TextButton}>Google</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    )
}
export default Login;

const styles = StyleSheet.create({
    Login: {
        paddingStart: 10,
        backgroundColor: 'gray',
        width: '100%',
        height: '73%',
        left: 10
    },
    Input: {
        flexDirection: 'row',
        width: '90%',
        padding: 8,
        marginTop: 16,
        borderWidth: 2,
        borderColor: '#03A9F4',
        borderRadius: 15,
        backgroundColor: '#ffffff',
        paddingStart: 20
    },
    Button: {
        margin: 10,
        backgroundColor: '#004dcf',
        borderRadius: 8,
        width: '35%',
        height: 35,
        left: 100
    },
    TextButton: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        alignItems: 'center',
        padding: 3,
    },
    Register: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 150,
        left: 60,
        width: '50%',
    },
    ButtonFacebook: {
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    ButtonGoogle: {
        backgroundColor: 'red',
        borderRadius: 5,
    }

})