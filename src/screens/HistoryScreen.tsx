import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const HistoryScreen = () => {
  return (

    <View style={{flex:1, backgroundColor: '#0D1B2A'}}>
      
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>My Progress</Text>
      </View>

      <ScrollView style={styles.container}>
        
        {/* History */}
        <View style={styles.statsContainer}>
          <View style={[styles.cirlces]}>
            <Text style={styles.percentText}>33%</Text>
          </View>
          <Text style={styles.dateText}>Oct 28</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={[styles.cirlces]}>
            <Text style={styles.percentText}>30%</Text>
          </View>
          <Text style={styles.dateText}>Oct 27</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={[styles.cirlces]}>
            <Text style={styles.percentText}>28%</Text>
          </View>
          <Text style={styles.dateText}>Oct 25</Text>
        </View>
        
        <View style={styles.marginBottom}>
          <View style={[styles.cirlces]}>
            <Text style={styles.percentText}>34%</Text>
          </View>
          <Text style={styles.dateText}>Oct 23</Text>
        </View>
    
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#415A77',
    // alignItems: 'flex-start', // Align content to the left
    paddingTop: 20, // Padding from top
    paddingLeft: 20, // Padding from left
    paddingBottom: 100,
    borderRadius: 40,
    flex: 1,
  },

  titleText: {
    color:'white',
    fontSize: 28,
    marginTop: 20,
    fontWeight: '900',
  },

  topContainer: {
    width: '100%',
    height: 100,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1B2A',
  },
  
  statsContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    width: '100%', 
    height: 160, 
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: -10,
    flex: 0,
  },
  // Last box
  marginBottom: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    width: '100%', 
    height: 160, 
    marginTop: 10,
    marginBottom: 110,
    marginHorizontal: -10,
    flex: 0,
  },
  cirlces: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: '#415A77',
  },
  dateText: {
    color:'#0D1B2A',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -75,
    marginLeft: 260,
  },
  percentText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
})

export default HistoryScreen