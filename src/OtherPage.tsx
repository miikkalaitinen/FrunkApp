import { Entypo, Feather } from '@expo/vector-icons'
import { View, Text, Linking } from 'react-native'
import { styles } from '../styles'
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'
import React from 'react'

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
      <Text style={styles.otherPageText}>
        Muuta kuvaa, logoa ja muita tietoja asetukset sivulla:{' '}
        <Entypo name="text" size={20} color={'white'} />
        {'\n'}
        Tallennetuasi tiedot, niiden pitäisi tulla näkyviin kortiin. Voit
        päivittää kortin manuaalisesti painamalla{' '}
        <Feather name="check" size={24} /> -painiketta.
      </Text>
      <Text style={styles.otherPageText}>
        Tekijänoikeussyistä kortin oikessa alalaidassa ei ole logoa. Voit ladata
        siihen minkä logon tahansa. Esimerkiksi{' '}
        <Text
          onPress={() =>
            Linking.openURL('https://freeimage.host/i/logo.JaY4UNt')
          }
          style={[
            styles.otherPageText,
            {
              color: '#F81E6E',
              fontFamily: 'Montserrat_500Medium',
              textDecorationLine: 'underline',
            },
          ]}
        >
          tälläisen.
        </Text>
      </Text>
      <Text style={styles.otherPageText}>
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
