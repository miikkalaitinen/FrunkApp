import { View, Text, TextInput, Pressable } from 'react-native'
import { styles } from '../styles'
import { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'

const SettingsPage = () => {
  const isFocused = useIsFocused()

  // Personal information
  const [firstnames, setFirstnames] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [birthday, setBirthday] = useState<string>('')

  // School information
  const [schoolTitle, setSchoolTitle] = useState<string>('')
  const [school, setSchool] = useState<string>('')
  const [studentnumberTitle, setStudentnumberTitle] = useState<string>('')
  const [studentnumber, setStudentnumber] = useState<string>('')

  const [showModal, setShowModal] = useState<boolean>(false)

  const pickImage = async (pic_type: string) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      if (pic_type === 'profilepic') {
        await AsyncStorage.setItem(
          'profilepic',
          JSON.stringify(result.assets[0])
        )
        alert('Profiilikuva vaihdettu!')
      } else if (pic_type === 'logo') {
        await AsyncStorage.setItem('logo', JSON.stringify(result.assets[0]))
        alert('Logo vaihdettu!')
      }
    }
  }

  const saveTextInfo = async () => {
    await AsyncStorage.setItem('firstnames', firstnames)
    await AsyncStorage.setItem('lastname', lastname)
    await AsyncStorage.setItem('schoolTitle', schoolTitle)
    await AsyncStorage.setItem('school', school)
    await AsyncStorage.setItem('studentnumberTitle', studentnumberTitle)
    await AsyncStorage.setItem('studentnumber', studentnumber)
    await AsyncStorage.setItem('birthday', birthday)
    alert('Tiedot tallennettu!')
  }

  useEffect(() => {
    const getPersonalInfo = async () => {
      const firstnames = await AsyncStorage.getItem('firstnames')
      const lastname = await AsyncStorage.getItem('lastname')
      const birthday = await AsyncStorage.getItem('birthday')
      const schoolTitle = await AsyncStorage.getItem('schoolTitle')
      const school = await AsyncStorage.getItem('school')
      const studentnumberTitle = await AsyncStorage.getItem(
        'studentnumberTitle'
      )
      const studentnumber = await AsyncStorage.getItem('studentnumber')

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
    }
    isFocused && getPersonalInfo()
  }, [isFocused])

  return (
    <View
      style={[
        styles.basiccontainer,
        { justifyContent: 'center', marginVertical: 10 },
      ]}
    >
      <Text style={styles.title}>Asetukset</Text>
      <View style={styles.flexColumn}>
        <Pressable
          style={styles.button}
          onPress={() => pickImage('profilepic')}
        >
          <Text style={{ color: '#F81E6E', fontWeight: '600' }}>
            Vaihda Profiilikuva
          </Text>
        </Pressable>
        <Text style={styles.subtitle}>Henkilötiedot</Text>
        <TextInput
          style={styles.input}
          placeholder="Etunimet"
          value={firstnames}
          onChangeText={(text) => setFirstnames(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sukunimi"
          value={lastname}
          onChangeText={(text) => setLastname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Syntymäpäivä"
          value={birthday}
          inputMode="numeric"
          onChangeText={(text) => setBirthday(text)}
        />
        <Text style={styles.subtitle}>Koulun tiedot</Text>
        <TextInput
          style={styles.input}
          placeholder="Koulu otsikko"
          value={schoolTitle}
          onChangeText={(text) => setSchoolTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Koulu"
          value={school}
          onChangeText={(text) => setSchool(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Opiskelijanumeron otsikko"
          value={studentnumberTitle}
          onChangeText={(text) => setStudentnumberTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Opiskelijanumero"
          value={studentnumber}
          inputMode="numeric"
          onChangeText={(text) => setStudentnumber(text)}
        />

        <Pressable style={styles.button} onPress={() => pickImage('logo')}>
          <Text style={{ color: '#F81E6E', fontWeight: '600' }}>
            Valitse logo
          </Text>
        </Pressable>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#F81E6E',
            borderRadius: 10,
          }}
        />
        <Pressable style={styles.button} onPress={() => saveTextInfo()}>
          <Text style={{ color: '#F81E6E', fontWeight: '600' }}>Tallenna</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SettingsPage
