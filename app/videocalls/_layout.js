import React from "react";
import { View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./index";
const Quran = () => null;
const Settings = () => null;
const QibleDirection2 = () => null;
const Home2 = () => null;
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const btnbackground2 = "#FEC903",
    background = "#000",
    txtWhite = "#676D75";
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: Platform.OS === "android" ? 5 : 0,
        },
        tabBarActiveTintColor: btnbackground2,
        tabBarInactiveTintColor: txtWhite,
        tabBarStyle: {
          height: 60,
          backgroundColor: background,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="InitialTab"
        component={Main}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: txtWhite,
          title: "Portfolio",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="chart-line"
                size={20}
                color={focused ? btnbackground2 : txtWhite}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Signals"
        component={Main}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: txtWhite,
          title: "Signals",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="signal"
                size={20}
                color={focused ? btnbackground2 : txtWhite}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="home"
                size={20}
                color={focused ? btnbackground2 : txtWhite}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Courses"
        component={Main}
        options={{
          title: "courses",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="file"
                size={20}
                color={focused ? btnbackground2 : txtWhite}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Video Calls"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="video"
                size={20}
                color={focused ? btnbackground2 : txtWhite}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
