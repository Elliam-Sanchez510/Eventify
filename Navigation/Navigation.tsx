import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen";
import ReservasScreen from "../screens/ReservasScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AgregarScreen from "../screens/AgregarScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTintColor: '#ffff',
          headerTitle: 'Inicio',
          headerStyle: {
            backgroundColor: '#0693e3'
          },
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, }) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reservas"
        component={ReservasScreen}
        options={{
          headerTintColor: '#ffff',
          headerTitle: 'Reservas',
          headerStyle: {
            backgroundColor: '#0693e3'
          },
          tabBarLabel: "Reservas",
          tabBarIcon: ({ color, }) => (
            <MaterialCommunityIcons
              name="content-save-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favoritos"
        component={FavoritesScreen}
        options={{
          headerTintColor: '#ffff',
          headerTitle: 'Favoritos',
          headerStyle: {
            backgroundColor: '#0693e3'
          },
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Agregar"
        component={AgregarScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ }) => (
            <Ionicons
              name="add-circle-sharp"
              size={35}
              color="#E23E3E"
            />
          ),
        }}

      /> */}

      {/* <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={color}
            />
          ),
          tabBarBadge: 5,
        }}
      /> */}

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTintColor: '#ffff',
          headerTitle: 'Perfil',
          headerStyle: {
            backgroundColor: '#0693e3'
          },
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, }) => (
            <MaterialCommunityIcons
            name="account-supervisor-outline"
            size={24}
            color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
