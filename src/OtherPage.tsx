import { Entypo, Feather } from '@expo/vector-icons'
import { View, Text, Linking } from 'react-native'
import { styles } from '../styles'
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'

const OtherPage = () => {
  const fonts = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  })

  if (!fonts[0]) {
    return <Text>Loading...</Text>
  }

  return (
    <View
      style={[styles.basiccontainer, { justifyContent: 'center', gap: 15 }]}
    >
      <Text
        style={{
          width: '100%',
          fontSize: 18,
          color: '#FFF',
          fontFamily: 'Montserrat_300Light',
        }}
      >
        Muuta kuvaa, logoa ja muita tietoja asetukset sivulla:{' '}
        <Entypo name="text" size={20} color={'white'} />
        {'\n'}
        Tallennetuasi tiedot, voit päivittää kortin painamalla{' '}
        <Feather name="check" size={24} /> -painiketta.
      </Text>
      <Text
        style={{
          fontSize: 18,
          width: '100%',
          color: '#FFFFFF',
          fontFamily: 'Montserrat_300Light',
        }}
      >
        Tekijänoikeussyistä kortin oikessa alalaidassa ei ole logoa. Voit ladata
        siihen minkä logon tahansa. Esimerkiksi{' '}
        <Text
          onPress={() =>
            Linking.openURL('https://freeimage.host/i/logo.JaY4UNt')
          }
          style={{
            fontSize: 18,
            width: '100%',
            color: '#F81E6E',
            fontFamily: 'Montserrat_500Medium',
            textDecorationLine: 'underline',
          }}
        >
          tälläisen.
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 18,
          width: '100%',
          color: '#FFF',
          fontFamily: 'Montserrat_300Light',
        }}
      >
        Tämän sovelluksen tarkoitus on suoraviivaistaa opiskelijakortin käyttöä.
        Tämä sovellus ei ole virallinen opiskelijakortti. Opiskelijaedut
        kuuluvat vain opiskelijoille, joten käytäthän tätä sovellusta vain jos
        olet opiskelija. Sovelluksen mahdollinen väärinkäyttö ja siitä
        aiheutuvat seuraukset ovat vain ja ainoastaan käyttäjän omalla
        vastuulla.
      </Text>
    </View>
  )
}

export default OtherPage