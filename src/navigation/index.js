import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as screens from "../screens";

const Tab = createBottomTabNavigator();

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={screens.Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) return <MaterialCommunityIcons name="home" color={"#424642"} size={size} />;
              return <MaterialCommunityIcons name="home-outline" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Select"
          component={screens.Select}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) return <MaterialCommunityIcons name="account-edit" color={"#424642"} size={size} />;
              return <MaterialCommunityIcons name="account-edit-outline" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Login"
          component={screens.Login}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) return <MaterialCommunityIcons name="account" color={"#424642"} size={size} />;
              return <MaterialCommunityIcons name="account-outline" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { Navigation };
