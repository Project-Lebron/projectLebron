import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import moment from 'moment';
import {
  StackedBarChart,
  ProgressChart
} from "react-native-chart-kit";
import { convertToISO8601, formatDate, isDateInPastWeek, formatTime, fetchJsonData } from './functions';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const url = 'http://127.0.0.1:5000/player-stats';


const WeeklyScreen = () => {

  function getCurrentWeekRange(): string {
    // Get the current date
    const currentDate = new Date();
  
    // Calculate the previous or current Monday
    const dayOfWeek = currentDate.getDay();
    const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const monday = new Date(currentDate);
    monday.setDate(currentDate.getDate() - daysSinceMonday);
  
    // Calculate the next Sunday
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
  
    // Function to format a date as "MMM. DD"
    const formatDate = (date: Date): string => {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
    };
  
    // Format the start and end dates
    return `${formatDate(monday)} - ${formatDate(sunday)}`;
  }

  function getDayOfWeekWithinPastWeek(dateStr: string): number {
    const inputDate = moment(dateStr, 'ddd MMM DD HH:mm:ss YYYY');
    const currentDate = moment();
  
    const daysDifference = currentDate.diff(inputDate, 'days');
  
    if (daysDifference >= 0 && daysDifference <= 6) {
      // The date is within the past week, return the day of the week
      return inputDate.day()-1;
    } else {
      // The date is not within the past week
      return -1;
    }
  }

  const [weekTotal, setWeekTotal] = useState({ shotsMade: 0, shotsTaken: 0, shotsMissed: 0, timeOfSession: 0, highestStreak: 0});
  const [weekData, setWeekData] = useState([
    { shotsMade: 0, shotsMissed: 0 },
    { shotsMade: 0, shotsMissed: 0 },
    { shotsMade: 0, shotsMissed: 0 },
    { shotsMade: 0, shotsMissed: 0 },
    { shotsMade: 0, shotsMissed: 0 },
    { shotsMade: 0, shotsMissed: 0 },
    { shotsMade: 0, shotsMissed: 0 },
  ]);
    
  // Define an async function to fetch JSON data
  async function fetchJsonData(url: string): Promise<any> {
    try {
        // Fetch data from the provided URL
        const response = await fetch(url);
        // Parse the response as JSON
        const data = await response.json();
        return data;
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching data:', error);
        throw error;
    }
  }

  useEffect(() => {
    // Function to fetch data
    const fetchData = () => {
      fetchJsonData(url)
        .then(data => {
          var week_total = { shotsMade: 0, shotsTaken: 0, shotsMissed: 0, timeOfSession: 0, highestStreak: 0}
          var week_data = [
            { shotsMade: 0, shotsMissed: 0 },
            { shotsMade: 0, shotsMissed: 0 },
            { shotsMade: 0, shotsMissed: 0 },
            { shotsMade: 0, shotsMissed: 0 },
            { shotsMade: 0, shotsMissed: 0 },
            { shotsMade: 0, shotsMissed: 0 },
            { shotsMade: 0, shotsMissed: 0 },
          ]
          for (let i=0;i<data.length;i++) {
            let index = getDayOfWeekWithinPastWeek(data[i].date);
            console.log("date: " + data[i].date);
            console.log("index: " + index);
            if (index != -1) {
              week_data[index].shotsMade += data[i].shotsMade;
              week_data[index].shotsMissed += data[i].shotsMissed;
            }
          }
          setWeekData(week_data);
          for (let i=0;i<data.length;i++) {
            if (isDateInPastWeek(data[i]['date'])) {
              week_total.shotsMade += data[i].shotsMade;
              week_total.shotsTaken += data[i].shotsTaken;
              week_total.shotsMissed += data[i].shotsMissed;
              week_total.timeOfSession += data[i].timeOfSession;
              if (data[i].highestStreak > week_total.highestStreak) {
                week_total.highestStreak = data[i].highestStreak;
              }
            }
          }
          setWeekTotal(week_total);
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

  const data = {
    labels: ["Mon     ", "Tues   ", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    legend: ["made", "missed"],
    data: [
      [weekData[0].shotsMade, weekData[0].shotsMissed],
      [weekData[1].shotsMade, weekData[1].shotsMissed],
      [weekData[2].shotsMade, weekData[2].shotsMissed],
      [weekData[3].shotsMade, weekData[3].shotsMissed],
      [weekData[4].shotsMade, weekData[4].shotsMissed],
      [weekData[5].shotsMade, weekData[5].shotsMissed],
      [weekData[6].shotsMade, weekData[6].shotsMissed],
    ],
    barColors: ["#58B449", "#B53E3E"]
  };

  const goalData = {
    labels: ["Taken", "Made"], // optional
    data: [(weekTotal.shotsTaken > 500 ? 1 : weekTotal.shotsTaken/500), (weekTotal.shotsMade > 100 ? 1 : weekTotal.shotsMade/100)]
  };

  
  return (

    <View style={{flex:1, backgroundColor: '#0D1B2A'}}>
      
      <View style={styles.topContainer}>
        <Text style={styles.dateText}>Weekly</Text>
      </View>


      <ScrollView style={styles.container}>
        
        {/* Weekly Totals */}
        <Text style={styles.weeklyTotals}>Weekly Totals</Text>
        <View style={styles.statsContainer}>
          
        <View style={styles.columnContainer}>
              <View style={[styles.labelContainer, {margin: 10 }]}>
                <Text style={[styles.boxText, { color: '#1B263B'}]}>Time</Text>      
                <Text style={[styles.boxText, {fontSize: 40, marginTop: 5}]}>{formatTime(weekTotal.timeOfSession)}</Text>        
              </View>
              <View style={[styles.labelContainer, {margin: 10, alignItems: 'flex-end'}]}>
                <View style={[styles.mediumCircles]}>
                <Text style={[styles.boxText, { fontSize: 20, marginTop: 5, color: 'white'}]}>{weekTotal.shotsTaken != 0 ? (Math.round((weekTotal.shotsMade/weekTotal.shotsTaken)*100)).toString() + "%" : "0%"}</Text></View>      
              </View>
              <View style={[styles.labelContainer, {margin: 10, alignItems: 'flex-end'}]}>
                <View style={[styles.mediumCircles]}>
                  <Text style={[styles.boxText, { fontSize: 20, marginTop: 5, color: 'white'}]}>{weekTotal.shotsMade} / {weekTotal.shotsTaken}</Text>
                </View>      
              </View>
            </View>
            <View style={styles.columnContainer}>
              <View style={[styles.labelContainer, {margin: 10 }]}>
                <Text style={[styles.boxText, { color: '#1B263B'}]}>Total</Text>      
                <Text style={[styles.boxText, { fontSize: 25, marginTop: 5 }]}>{weekTotal.shotsTaken}</Text>        
              </View>
              <View style={[styles.labelContainer, {margin: 10}]}>
                <Text style={[styles.boxText, { color: '#1B263B'}]}>Made</Text>      
                <Text style={[styles.boxText, { fontSize: 25, marginTop: 5 }]}>{weekTotal.shotsMade}</Text>      
              </View>
              <View style={[styles.labelContainer, {margin: 10}]}>    
                <Text style={[styles.boxText, { color: '#1B263B'}]}>Missed</Text>      
                <Text style={[styles.boxText, { fontSize: 25, marginTop: 5 }]}>{weekTotal.shotsMissed}</Text>                  
              </View>
              <View style={[styles.labelContainer, {margin: 10}]}>    
                <Text style={[styles.boxText, { color: '#1B263B'}]}>Best Streak</Text>      
                <Text style={[styles.boxText, { fontSize: 25, marginTop: 5 }]}>{weekTotal.highestStreak}</Text>                  
              </View>
            </View>
        </View>

        {/* Daily Charts */}
        <Text style={[styles.dailyCharts, {marginBottom: 15}]}>Daily Charts</Text>
        <View style={styles.barChartContainer}>
          <StackedBarChart
            style={styles.barChart}
            data={data}
            width={400}
            height={200}
            hideLegend={true}
            withHorizontalLabels={false}
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
          />
        </View>


        {/* Daily Charts */}
        <Text style={styles.dailyCharts}>Weekly Goals</Text>
        <ProgressChart
          data={goalData}
          style={styles.progressChart}
          width={300}
          height={220}
          strokeWidth={16}
          radius={32}
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
          hideLegend={false}
        />

    
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
    borderRadius: 40,
    flex: 1,
  },

  barChartContainer: {
    marginRight: 0,
  },

  barChart: {
    backgroundColor:'#415A77',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 105,
  },
  
  progressChart: {
    marginBottom: 100,
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
})

export default WeeklyScreen