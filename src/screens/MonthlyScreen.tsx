import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const MonthlyScreen = () => {
  return (

    <View style={{flex:1, backgroundColor: '#0D1B2A'}}>
      
      <View style={styles.topContainer}>
        <Text style={styles.dateText}>Nov 19 - 25</Text>
      </View>


      <ScrollView style={styles.container}>
        
        {/* Weekly Totals */}
        <Text style={styles.weeklyTotals}>Weekly Totals</Text>
        <View style={styles.statsContainer}>
          
        <View style={styles.columnContainer}>
              <View style={[styles.labelContainer, {margin: 10 }]}>
                <Text style={[styles.boxText, { color: '#1B263B'}]}>Time</Text>      
                <Text style={[styles.boxText, {fontSize: 40, marginTop: 5}]}>17:19</Text>        
              </View>
              <View style={[styles.labelContainer, {margin: 10, alignItems: 'flex-end'}]}>
                <View style={[styles.mediumCircles]}></View>      
              </View>
              <View style={[styles.labelContainer, {margin: 10, alignItems: 'flex-end'}]}>
                <View style={[styles.mediumCircles]}></View>      
              </View>
            </View>
            <View style={styles.columnContainer}>
              <View style={[styles.labelContainer, {margin: 10 }]}>
                <Text style={[styles.boxText, { color: '#1B263B'}]}>Total</Text>      
                <Text style={[styles.boxText, { fontSize: 25, marginTop: 5 }]}>192</Text>        
              </View>
              <View style={[styles.labelContainer, {margin: 10}]}>
                <Text style={[styles.boxText, { color: '#1B263B'}]}>Made</Text>      
                <Text style={[styles.boxText, { fontSize: 25, marginTop: 5 }]}>61</Text>      
              </View>
              <View style={[styles.labelContainer, {margin: 10}]}>    
                <Text style={[styles.boxText, { color: '#1B263B'}]}>Missed</Text>      
                <Text style={[styles.boxText, { fontSize: 25, marginTop: 5 }]}>131</Text>                  
              </View>
              <View style={[styles.labelContainer, {margin: 10}]}>    
                <Text style={[styles.boxText, { color: '#1B263B'}]}>Best Streak</Text>      
                <Text style={[styles.boxText, { fontSize: 25, marginTop: 5 }]}>8</Text>                  
              </View>
            </View>
        </View>

        {/* Daily Charts */}
        <Text style={styles.dailyCharts}>Daily Charts</Text>
        <View style={styles.chartsContainer}>
        </View>


        {/* Daily Charts */}
        <Text style={styles.dailyCharts}>Daily Charts</Text>
        <View style={styles.chartsContainer}>
        </View>


        {/* Daily Charts */}
        <Text style={styles.dailyCharts}>Daily Charts</Text>
        <View style={[styles.chartsContainer, {marginBottom: 100}]}>
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
    borderRadius: 40,
    flex: 1,
  },

  dateText: {
    color:'white',
    fontSize: 28,
    marginTop: 20,
    fontWeight: '900',
  },

  topContainer: {
    width: '100%',
    height: 130,
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

export default MonthlyScreen