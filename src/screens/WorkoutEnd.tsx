import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, Touchable } from 'react-native'
import React from 'react'

const WorkoutEnd = ({ navigation }: {navigation: any}) => {
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'light-content'} />
    
          {/* title text */}
          <Text style={styles.smallText}> 11.18.2023</Text>
          <View style={styles.topContainer}>
            <Text style={styles.titleText}>Morning Shootaround </Text>
          </View>

          {/* top section */}
          <View style={styles.mainContainer}>
    
            {/* stats on left */}
            <View style={styles.topStatsContainer}>
              {/* top left */}
              <View style={styles.labelContainer}>
                <Text style={styles.smallText}>Made</Text>
                <Text style={[styles.topStats, { color: '#6AA760', fontSize: 35 }]}>25</Text>        
              </View>

              {/* bottom left */}
              <View style={styles.labelContainer}>
                <Text style={styles.smallText}>Time</Text>
                <Text style={[styles.topStats, { color: '#fff' }]}>1:26:30</Text>
              </View>
            </View>

            {/* middle circle */}
            <View style={styles.bigCircle}>
              <Text style={styles.bigCircleTxt}>70%</Text>
            </View>

            {/* right stats */}
            <View style={styles.topStatsContainer}>
              {/* top right */}
              <View style={styles.labelContainer}>
                <Text style={styles.smallText}>Made</Text>
                <Text style={[styles.topStats, { color: '#CF5A5A' , fontSize: 35}]}>35</Text>        
              </View>

              {/* bottom right */}
              <View style={styles.labelContainer}>
                <Text style={styles.smallText}>Total</Text>
                <Text style={[styles.topStats, { color: '#fff' }]}>25 / 60</Text>
              </View>
            </View>

          </View>

          {/* two boxes */}
          <Text style={[styles.titleText, { fontSize: 16, marginBottom: 5, fontWeight: '800' }]}> previous workouts </Text>          
          <View style={styles.bottomBoxContainer}>
            <View style={styles.bottomBoxes}></View>
            <View style={styles.bottomBoxes}></View>
          </View>

          {/* big box */}
          <Text style={[styles.titleText, { fontSize: 16, marginBottom: 5, fontWeight: '800' }]}> previous workouts </Text>          
          <View style={styles.bottomBoxContainer}>
            <View style={styles.bigBox}></View>
          </View>
    
          {/* button */}
          <TouchableOpacity
            style={styles.startButton} 
            onPress={() => {
              console.log('GO to STATS!')
              navigation.navigate('Home')
            }}>
            <Text style={styles.startButtonText}>Save Workout</Text>
          </TouchableOpacity>
    
        </SafeAreaView>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D1B2A',
      alignItems: 'center',
    },
    topContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
      color:'white',
      fontFamily: 'Roboto',
      marginTop: 10,
      marginBottom: 5,
      fontSize: 25,
      fontWeight: "800",
    },
    smallText: {
        color:'#415A77',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: "800",
      },
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    topStatsContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 20,
      alignItems: 'center',
    },
    topStats: {
      color:'#415A77',
      fontFamily: 'Roboto',
      marginTop: 10,
      marginBottom: 30,
      marginRight: 7,
      marginLeft: 7,
      fontSize: 24,
      fontWeight: "800",
    },
    labelContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bigCircle: {
      width: 170,
      height: 170,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
      margin: 3,
      borderRadius: 150,
      backgroundColor: '#DCDCDC',
      borderColor: "#415A77",
      borderWidth: 5,
    },
    bigCircleTxt: {
      color:'#415A77',
      fontFamily: 'Roboto',
      marginTop: 5,
      fontSize: 50,
      fontWeight: "900",
    },
    tagsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tagsText: {
      color:'#415A77',
      fontFamily: 'Roboto',
      marginHorizontal: 50,
      fontSize: 25,
      fontWeight: "900",
    },
    bottomBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBoxes: {
      width: 160,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 25,
      marginTop: 15,
      margin: 12,
      backgroundColor: '#415A77',
    },
    bigBox: {
      width: 350,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      marginTop: 15,
      margin: 15,
      backgroundColor: '#415A77',
    },
    innerSmallBox: {
      flexDirection: 'row',

    },
    smallCircles: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
      borderRadius: 150,
      backgroundColor: '#DCDCDC',
      borderColor: "#415A77",
      borderWidth: 6,
    },
    startButton: {
      width: 250,
      heigth: 40,
      borderRadius: 20,
      alignItems: 'center',
      backgroundColor: '#415A77',
      fontFamily: 'Roboto',
      marginTop: 20,
      marginBottom: 30,
    },
    startButtonText: {
      color: '#DCDCDC',
      fontFamily: 'Roboto',
      fontWeight: '900',
      fontSize: 20,
      marginVertical: 15,
    },
  })

export default WorkoutEnd