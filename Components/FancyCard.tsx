import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        {/* Network Image */}
        <Image source={{uri: 'https://plus.unsplash.com/premium_photo-1661901647310-4deafc6f29a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF3YSUyMG1haGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}} style={styles.cardImg} />
     {/* Local image */}
      {/* <Image source={require('../assets/images/girl.jpg')} style={styles.cardImg}/> */}
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa Mahal</Text>
        <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
        <Text style={styles.cardDescription}>The Hawa Mahal is a place in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace</Text>
        <View style={styles.footer}><Text style={styles.cardFooter}>12 mins away</Text></View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

card: {
  width: 350,
  height: 350,
  borderRadius: 6,
  marginVertical: 12,
  marginHorizontal: 16,
},

cardElevated:{
  backgroundColor: "#fff",
  elevation: 3,
  shadowOffset: {
    width: 1,
    height:1
  },
},

cardImg: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 16
},

cardBody:{
  flex: 1,
  flexGrow: 1,
  paddingHorizontal: 12
},

cardTitle:{
  color: "#E21717",
  fontSize: 16,
  fontWeight: 'bold',
},

cardLabel:{
  color: "#BF3325",
  fontSize: 14,
  marginBottom: 4
},

cardDescription:{
  color: "#242B2E",
  fontSize: 12,
  marginTop: 6,
  marginBottom: 12,
  flexShrink: 1
},

footer: {
  flex: 1,
  flexDirection: 'row-reverse'
},

cardFooter:{
  color: "#000",
  
}})