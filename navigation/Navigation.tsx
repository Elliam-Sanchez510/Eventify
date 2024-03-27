import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen";
import CretaeEventsScreen from "../screens/CretaeEventScreen";
import MyEventsScree from "../screens/MyEventsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";


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
          headerTitle: 'Home',
          headerStyle: {
            backgroundColor: '#0693e3'
          },
          tabBarLabel: "Home",
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
        name="Create Event"
        component={CretaeEventsScreen}
        options={{
          headerTintColor: '#ffff',
          headerTitle: 'Create Event',
          headerStyle: {
            backgroundColor: '#0693e3'
          },
          tabBarLabel: "Create Event",
          tabBarIcon: ({ color, }) => (
            <MaterialIcons
              name="create"
              size={24}
              color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My Events"
        component={MyEventsScree}
        options={{
          headerTintColor: '#ffff',
          headerTitle: 'My Events',
          headerStyle: {
            backgroundColor: '#0693e3'
          },
          tabBarLabel: "My Events",
          tabBarIcon: ({ color, }) => (
            <MaterialIcons
              name="event"
              size={24}
              color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerTintColor: '#ffff',
          headerTitle: 'Notifications',
          headerStyle: {
            backgroundColor: '#0693e3'
          },
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, }) => (
            <MaterialIcons
              name="notifications-none"
              size={24}
              color={color} />
          ),
        }}
      />
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
