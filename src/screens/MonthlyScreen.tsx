import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const MonthlyScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.topBox}>
      </View>
      <View style={styles.bottomBox}>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  topBox: {
    flex: 1,
    height: 800,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
  },

  bottomBox: {
    flex: 1,
    height: 800,
    backgroundColor: '#',
    alignItems: 'center',
  }
})

export default MonthlyScreen