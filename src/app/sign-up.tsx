import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import { router } from 'expo-router'

export default function SignUp() {
  function back() {
    if (!router.canGoBack) {
      return Alert.alert('Não é possível voltar!')
    }

    router.back()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
  },

  back: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
