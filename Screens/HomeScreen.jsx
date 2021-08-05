import React from 'react'
import { View, Text , SafeAreaView , StyleSheet } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}  >
            
            <Text style={styles.txt}  onPress={()=> navigation.navigate("Day1")} >Animation day 1</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container :{
      paddingTop: 50
  },
  txt: {
      fontSize: 19 , 
      fontWeight:"bold"
  }
})
