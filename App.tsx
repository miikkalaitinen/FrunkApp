import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfilePage from './src/ProfilePage'
import SettingsPage from './src/SettingsPage'
import {
  Ionicons,
  AntDesign,
  SimpleLineIcons,
  Entypo,
} from '@expo/vector-icons'
import OtherPage from './src/OtherPage'
import { StatusBar } from 'expo-status-bar'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import React from 'react'
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="black" />
      <Routing />
    </SafeAreaProvider>
  )
}

const Routing = () => {
  const insets = useSafeAreaInsets()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabel: '',
          tabBarStyle: {
            borderTopWidth: 0,
            height: 50,
            paddingTop: 10,
            paddingBottom: 0,
            marginBottom: insets.bottom ? insets.bottom - 5 : 0,
          },
          tabBarActiveTintColor: '#F81E6E',
          tabBarInactiveTintColor: '#000000',
        }}
        initialRouteName="Profile"
      >
        <Tab.Screen
          name="Diamond"
          component={OtherPage}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="diamond-outline" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="idcard" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Magnifier"
          component={OtherPage}
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="magnifier" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Star"
          component={OtherPage}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="star-outline" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Text"
          component={SettingsPage}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="text" size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
