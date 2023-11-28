import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import {
  PieChart
} from "react-native-chart-kit";

const YearlyScreen = () => {

  const data = [
<<<<<<< Updated upstream
    {
      name: "made",
      percentage: 33, //(yearlydate.shotsmade/yearlydate.shotstaken) * 100,
      color: "#3FA937",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "missed",
      percentage: 66, //100 - ((yearlydate.shotsmade/yearlydate.shotstaken) * 100),
      color: "#D83030",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
=======
    // {
    //   name: "made",
    //   percentage: (yearlydate.shotsmade/yearlydate.shotstaken) * 100,
    //   color: "rgba(131, 167, 234, 1)",
    //   legendFontColor: "#7F7F7F",
    //   legendFontSize: 15
    // },
    // {
    //   name: "missed",
    //   percentage: 100 - ((yearlydate.shotsmade/yearlydate.shotstaken) * 100),
    //   color: "#F00",
    //   legendFontColor: "#7F7F7F",
    //   legendFontSize: 15
    // }
>>>>>>> Stashed changes
  ];
  
  return (

    <View style={{flex:1, backgroundColor: '#0D1B2A'}}>
      
      <View style={styles.topContainer}>
        <Text style={styles.dateText}>2023</Text>
      </View>

      <View style={styles.circle}>
        <PieChart
          data={data}
          width={400}
          height={400}
          style={styles.pieChart}
          hasLegend={false}
          chartConfig={{
            backgroundGradientFrom: "#415A77",
            backgroundGradientTo: "#415A77",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForHorizontalLabels: {
              fontWeight: 'bold',
            },
            style: {
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              width: 900,
            },
          }}
          accessor={"percentage"}
          backgroundColor={"transparent"}
          paddingLeft={"70"}
          center={[0, 0]}
          absolute
        />
      </View>

      <View style={styles.legendContainer}>
        <View style={styles.greenCircle}></View>
        <Text style={styles.legend}>Made</Text>
        <View style={styles.redCircle}></View>
        <Text style={styles.legend}>Missed</Text>
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#415A77',
    paddingTop: 20, // Padding from top
    paddingLeft: 20, // Padding from left
    borderRadius: 40,
    flex: 1,
  },

  pieChart: {
    marginLeft: 5,
  },

  dateText: {
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
  circle: {
    width: 350,
    height: 350,
    justifyContent: 'center',
    marginLeft: 40,
    marginBottom: 20,
    borderRadius: 175,
    backgroundColor: 'white',
  },
  legendContainer: {
    backgroundColor: '#0D1B2A',
    // alignItems: 'flex-start', // Align content to the left
    paddingTop: 20, // Padding from top
    paddingLeft: 20, // Padding from left
    borderRadius: 40,
    flexDirection: 'row',
    flex: 1,
  },
  greenCircle: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginLeft: 40,
    marginBottom: 20,
    borderRadius: 175,
    backgroundColor: '#3FA937',
  },
  redCircle: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginLeft: 40,
    marginBottom: 20,
    borderRadius: 175,
    backgroundColor: '#D83030',
  },
  legend: {
    color:'white',
    fontSize: 28,
    marginTop: 0,
    marginLeft: 10,
    fontWeight: '800',
  },
})

export default YearlyScreen