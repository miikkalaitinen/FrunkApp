import { StyleSheet, Dimensions } from 'react-native'

export const isSmallScreen = () => {
  const { height } = Dimensions.get('window')
  return height < 700
}

const setStyle = () => {
  return isSmallScreen() ? smallScreenStyle : bigScreenStyle
}

const bigScreenStyle = StyleSheet.create({
  basiccontainer: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 30,
    width: '100%',
    height: '100%',
    backgroundColor: '#4A8DDC',
  },
  flexColumn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 20,
    marginTop: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  profileImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
    marginTop: -10,
  },
  input: {
    width: '100%',
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#F81E6E',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  modal: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 20,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkView: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'rgba(199, 219, 4, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -15,
    bottom: 10,
  },
  checkmarkPressable: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -25,
    bottom: 0,
  },
  barcodePressable: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: -25,
    bottom: 0,
  },
  textView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10%',
  },
  profileInfo: {
    gap: 20,
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 22,
    fontWeight: '300',
    color: '#fff',
    textAlign: 'left',
  },
  birthdayText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#fff',
    textAlign: 'left',
  },
  profileTextSmall: {
    fontSize: 18,
    fontWeight: '300',
    color: '#fff',
    textAlign: 'left',
  },
  logoView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },
  logo: {
    width: '80%',
    height: 40,
  },
  otherPageText: {
    width: '100%',
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Montserrat_300Light',
  },
})

// SCREENS WITH HEIGHT < 700

const smallScreenStyle = StyleSheet.create({
  basiccontainer: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 30,
    width: '100%',
    height: '100%',
    backgroundColor: '#4A8DDC',
  },
  flexColumn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 20,
    marginTop: -10,
  },
  subtitle: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginTop: -10,
  },
  input: {
    width: '100%',
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#F81E6E',
    paddingHorizontal: 30,
    paddingVertical: 5,
    height: 35,
  },
  modal: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    display: 'flex',
    padding: 20,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkView: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: 'rgba(199, 219, 4, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -10,
    bottom: 15,
  },
  checkmarkPressable: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -20,
    bottom: 5,
  },
  barcodePressable: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: -20,
    bottom: 5,
  },
  textView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '2%',
  },
  profileInfo: {
    gap: 10,
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 18,
    fontWeight: '300',
    color: '#fff',
    textAlign: 'left',
  },
  birthdayText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#fff',
    textAlign: 'left',
  },
  profileTextSmall: {
    fontSize: 15,
    fontWeight: '300',
    color: '#fff',
    textAlign: 'left',
  },
  logoView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
  },
  logo: {
    width: '80%',
    height: 40,
  },
  otherPageText: {
    width: '100%',
    fontSize: 14,
    color: '#FFF',
    fontFamily: 'Montserrat_300Light',
  },
})

export const styles = setStyle()
