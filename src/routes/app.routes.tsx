import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Call from "../pages/Call";
import Icon from "react-native-vector-icons/Feather";
import Contacts from "../pages/Contacts";
import Profile from "../pages/Profile";

const App = createBottomTabNavigator();

const customTabBarStyle = {
  activeTintColor: '#6e37e0',
  inactiveTintColor: 'white',
  style: { backgroundColor: '#16161B', height: 60 },
};

const AppRoutes = () => {
  return (
    <App.Navigator
      initialRouteName="call"
      tabBarOptions={customTabBarStyle}
    >
      <App.Screen name="call"
        options={{
          tabBarLabel: 'Ligar',
          tabBarIcon: ({ color }) => (
            <Icon name="phone" color={color} size={26} />
          ),
        }}
        component={Call}
      />
      <App.Screen name="contacts"
        options={{
          tabBarLabel: 'Contatos',
          tabBarIcon: ({ color }) => (
            <Icon name="user-plus" color={color} size={26} />
          ),
        }}
        component={Contacts}
      />
      <App.Screen name="profile"
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={26} />
          ),
        }}
        component={Profile}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
