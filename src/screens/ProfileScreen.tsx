import { StyleSheet, Text, Dimensions, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const ProfileScreen = () => {

  const data = {
    labels: ["Test1", "Test2"],
    legend: ["L1", "L2", "L3"],
    data: [
      [60, 60, 60],
      [30, 30, 60]
    ],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
        <Text style={styles.titleScreen}>Profile</Text>
      <SafeAreaView style={styles.bigCircle}></SafeAreaView>


      <StackedBarChart
        style={styles.container}
        data={data}
        width={400}
        height={220}
        hideLegend={true}
        chartConfig={{
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }

        }}
      />
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    alignItems: 'center',
  },
  barChart: {

  },
  titleScreen: {
    color:'white',
    fontFamily: 'Arial',
    fontSize: 32,
    fontWeight: 'bold',
  },
  bigCircle: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 150,
    backgroundColor: '#DCDCDC',
    borderColor: "#415A77",
    borderWidth: 10,
  },
})

export default ProfileScreen