import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
const url = 'http://127.0.0.1:5000/player-stats';
import { convertToISO8601, formatDate, isDateInPastYear, formatTime, fetchJsonData } from './functions';

import {
  PieChart
} from "react-native-chart-kit";

const YearlyScreen = () => {
  const [playerData, setPlayerData] = useState({ shotsMade: 0, shotsTaken: 0, date: "Sat Jan 1 00:00:00 0000", timeOfSession: 0});
  const [yearlydata, setyearlydata] = useState({ shotsMade: 0, shotsTaken: 0})
  useEffect(() => {
    // Function to fetch data
    const fetchData = () => {
      fetchJsonData(url)
        .then(data => {
          const latestData = data[data.length - 1];
          setPlayerData(latestData);
          var yearlydata = {
            shotsMade: 0,
            shotsTaken: 0,
          }
          for (let i=0;i<data.length;i++) {
            console.log(data[i]['date']);
            if (isDateInPastYear(data[i]['date'])) {
              yearlydata.shotsMade += data[i].shotsMade;
              yearlydata.shotsTaken += data[i].shotsTaken;
              }
            } 
          setyearlydata(yearlydata);
        })
        .catch(error => console.error('Error in fetching data:', error));
    };
  
    // Initial fetch
    fetchData();
  
    // Set up polling
    const interval = setInterval(fetchData, 10000); // Polling every 10 seconds
  
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);


  const data = [
    {
      name: "made",
      percentage: (yearlydata.shotsMade),
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "missed",
      percentage: (yearlydata.shotsTaken-yearlydata.shotsMade),
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  
  return (

    <View style={{flex:1, backgroundColor: '#0D1B2A'}}>
      
      <View style={styles.topContainer}>
        <Text style={styles.dateText}>2023</Text>
      </View>

      <PieChart
        data={data}
        width={300}
        height={300}
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
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#415A77',
    // alignItems: 'flex-start', // Align content to the left
    paddingTop: 20, // Padding from top
    paddingLeft: 20, // Padding from left
    borderRadius: 40,
    flex: 1,
  },

  pieChart: {
    marginLeft: 50,
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

  topPart: {
    width: '100%',
    backgroundColor: 'black',
  },

  // Weekly Totals
  weeklyTotals: {
    color:'white',
    fontSize: 28,
    marginTop: 20,
    fontWeight: 'bold',
  },
  
  statsContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    width: '100%', 
    height: 205, 
    marginTop: 15,
    marginHorizontal: -10,
    flex: 0, // Prevent the container from growing
  },

  // Daily Charts
  dailyCharts: {
    color:'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 45,
  },

  chartsContainer: {
    backgroundColor: '#0D1B2A',
    borderRadius: 25,
    padding: 30,
    width: '100%',
    height: 205, 
    marginTop: 15,
    marginHorizontal: -10,
    flex: 0, // Prevent the container from growing
  },

  titleText: {
    color:'white',
    fontFamily: 'Roboto',
    marginTop: 5,
    marginBottom: 3,
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
    marginTop: 5,
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
    width: 165,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    marginTop: 10,
    margin: 12,
    backgroundColor: '#415A77',
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 0,
  },
  bigBox: {
    width: 355,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 25,
    marginTop: 10,
    margin: 3,
    backgroundColor: '#415A77',
  },
  boxText: {
    color:'#1B263B',
    fontSize: 16,
    fontWeight: "800",
  },
  boxRowContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediumCircles: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: '#415A77',
  },
  endButton: {
    width: 250,
    heigth: 40,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#415A77',
    fontFamily: 'Roboto',
    marginTop: 30,
    marginBottom: 30,
  },
  endButtonText: {
    color: '#DCDCDC',
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
  },

})

export default YearlyScreen