import { Text, View, Image, Pressable, Platform } from 'react-native'
import { isSmallScreen, styles } from '../styles'
import { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather, FontAwesome6 } from '@expo/vector-icons'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated'
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ProfilePage = () => {
  const fonts = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  })

  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const [profileImage, setProfileImage] =
    useState<ImagePicker.ImagePickerAsset>()
  const [logoImage, setLogoImage] = useState<ImagePicker.ImagePickerAsset>()
  // Personal information
  const [firstnames, setFirstnames] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [birthday, setBirthday] = useState<string>('')

  // School information
  const [schoolTitle, setSchoolTitle] = useState<string>('')
  const [school, setSchool] = useState<string>('')
  const [studentnumberTitle, setStudentnumberTitle] = useState<string>('')
  const [studentnumber, setStudentnumber] = useState<string>('')

  const loadInfo = async () => {
    const picture = await AsyncStorage.getItem('profilepic')
    const logo = await AsyncStorage.getItem('logo')
    const firstnames = await AsyncStorage.getItem('firstnames')
    const lastname = await AsyncStorage.getItem('lastname')
    const birthday = await AsyncStorage.getItem('birthday')
    const schoolTitle = await AsyncStorage.getItem('schoolTitle')
    const school = await AsyncStorage.getItem('school')
    const studentnumberTitle = await AsyncStorage.getItem('studentnumberTitle')
    const studentnumber = await AsyncStorage.getItem('studentnumber')

    if (picture) {
      const parsedPicture = JSON.parse(picture)
      setProfileImage(parsedPicture)
    }
    if (logo) {
      const parsedLogo = JSON.parse(logo)
      setLogoImage(parsedLogo)
    }
    if (firstnames) {
      setFirstnames(firstnames)
    }
    if (lastname) {
      setLastname(lastname)
    }
    if (birthday) {
      setBirthday(birthday)
    }
    if (schoolTitle) {
      setSchoolTitle(schoolTitle)
    }
    if (school) {
      setSchool(school)
    }
    if (studentnumberTitle) {
      setStudentnumberTitle(studentnumberTitle)
    }
    if (studentnumber) {
      setStudentnumber(studentnumber)
    }

    if (!picture && !logo) {
      navigation.navigate('Diamond' as never)
    }
  }

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

  const buttonSize = useSharedValue(1)
  const buttonBGSize = useSharedValue(1)
  const buttonOpacity = useSharedValue(1)

  const buttonBackgrounStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(buttonBGSize.value) }],
    opacity: withSpring(buttonOpacity.value),
  }))

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(buttonSize.value) }],
  }))

  useEffect(() => {
    loadInfo()
    buttonSize.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 20 }),
        withTiming(0.8, { duration: 650 }),
        withTiming(1, { duration: 650 })
      ),
      -1
    )

    isSmallScreen()
      ? (buttonBGSize.value = withRepeat(
          withSequence(
            withTiming(1.8, { duration: 0 }),
            withTiming(2.8, { duration: 820 }),
            withTiming(0.5, { duration: 0 }),
            withTiming(1, { duration: 500 })
          ),
          -1
        ))
      : (buttonBGSize.value = withRepeat(
          withSequence(
            withTiming(1.6, { duration: 0 }),
            withTiming(2.4, { duration: 820 }),
            withTiming(0.5, { duration: 0 }),
            withTiming(1, { duration: 500 })
          ),
          -1
        ))
    buttonOpacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 0 }),
        withTiming(0, { duration: 820 }),
        withTiming(0, { duration: 0 }),
        withTiming(0, { duration: 500 })
      ),
      -1
    )
  }, [])

  if (!fonts[0]) {
    return <Text>Loading...</Text>
  }

  return (
    <View
      style={[
        styles.basiccontainer,
        { paddingTop: isSmallScreen() ? 40 : insets.top },
      ]}
    >
      <Text style={[styles.title, { fontFamily: 'Montserrat_600SemiBold' }]}>
        OPISKELIJAKORTTI
      </Text>
      <View>
        <Image
          style={styles.profileImage}
          source={{
            uri: profileImage?.uri,
          }}
        />
        <Pressable style={styles.barcodePressable} onPress={() => loadInfo()}>
          <FontAwesome6 name="barcode" size={24} />
        </Pressable>
        <Animated.View style={[styles.checkmarkView, buttonBackgrounStyle]} />
        <AnimatedPressable
          style={[styles.checkmarkPressable, animatedButtonStyle]}
          onPress={() => loadInfo()}
        >
          <Feather name="check" size={24} />
        </AnimatedPressable>
      </View>
      <View style={styles.textView}>
        <View style={styles.profileInfo}>
          <View>
            <Text
              style={[
                styles.profileText,
                { fontFamily: 'Montserrat_300Light' },
              ]}
            >
              {firstnames}{' '}
            </Text>
            <Text
              style={[
                styles.profileText,
                { marginTop: -5, fontFamily: 'Montserrat_300Light' },
              ]}
            >
              {lastname}
            </Text>
            <Text
              style={[
                styles.birthdayText,
                { fontFamily: 'Montserrat_300Light' },
              ]}
            >
              {birthday}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.profileTextSmall,
                { fontFamily: 'Montserrat_300Light' },
              ]}
            >
              {schoolTitle}
            </Text>
            <Text
              style={[
                styles.profileTextSmall,
                { fontFamily: 'Montserrat_300Light' },
              ]}
            >
              {school}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.profileTextSmall,
                { fontFamily: 'Montserrat_300Light' },
              ]}
            >
              {studentnumberTitle}
            </Text>
            <Text
              style={[
                styles.profileTextSmall,
                { fontFamily: 'Montserrat_300Light' },
              ]}
            >
              {studentnumber}
            </Text>
          </View>
        </View>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={{
              uri: logoImage?.uri,
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default ProfilePage
