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
import { useEffect } from 'react'
import { expo } from './app.json'
import { Alert, Linking } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

  useEffect(() => {
    const checkOldVersion = async () => {
      const response = await fetch(
        'https://api.github.com/repos/miikkalaitinen/FrunkApp/releases/latest'
      )
      const data = await response.json()
      const latestVersion = data.tag_name
      const currentVersion = `v${expo.version}`
      const apkUrl = data.assets[0].browser_download_url
      const dontAskForUpdate = await AsyncStorage.getItem('dontAskForUpdate')
      // If the latest version is newer than the current version, show an alert
      if (
        latestVersion > currentVersion &&
        latestVersion !== dontAskForUpdate
      ) {
        Alert.alert(
          'Uusi päivitys saatavilla',
          `FrunkAppiin on saatavavilla päivitys. Haluatko ladata sen nyt? \n\n ${currentVersion} -> ${latestVersion} `,
          [
            {
              text: 'Lataa',
              onPress: () => Linking.openURL(apkUrl),
            },
            {
              text: 'Ohita',
              style: 'cancel',
            },
            {
              text: 'Älä kysy enää',
              style: 'destructive',
              onPress: async () => {
                Alert.alert(
                  'Älä kysy',
                  'Oletko varma että et halua enää nähdä tätä ilmoitusta?',
                  [
                    {
                      text: 'Älä kysy enää',
                      onPress: async () => {
                        await AsyncStorage.setItem(
                          'dontAskForUpdate',
                          latestVersion
                        )
                      },
                    },
                    {
                      text: 'Peruuta',
                      style: 'cancel',
                    },
                  ]
                )
              },
            },
          ],
          { cancelable: true }
        )
      }
    }

    checkOldVersion()
  }, [])

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
