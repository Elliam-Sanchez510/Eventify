import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Notification = () => {
    return (
        <ScrollView>
            <View>
                <Text>No hay notificaciones</Text>
            </View>


        </ScrollView>
    )
}
export default Notification;

const styles = StyleSheet.create({
    Container: {
        paddingTop: 100,
        paddingHorizontal: 30,
    },

})