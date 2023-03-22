import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {


// function for linking
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }    

  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
       <View style={styles.headingContainer}><Text style={styles.cardHeading}>JavaScript</Text></View>
       <Image style={styles.cardImg} source={require('../assets/images/js.jpg')}/>
       <View style={styles.cardBody}>
        <Text numberOfLines={3}>
        Begin learning here by typing in your first name surrounded by quotation marks, and ending with a semicolon. For example, you could type the name "hxn";  and then hit enter.
        </Text>
       </View>
       <View style={styles.cardFooter}>
        <TouchableOpacity onPress={()=>{openWebsite('https://www.javascript.com/')}}>
          <Text style={styles.socialLinks}>Read more</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{openWebsite('https://github.com/hxncodes')}}>
          <Text style={styles.socialLinks}>Follow me on Github</Text>
        </TouchableOpacity>
       </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
    },

    card: {
      height: 360,
      width: 350,
      marginVertical: 12,
      marginHorizontal: 16,
      borderRadius: 6,
      overflow: 'hidden',
    },

    elevatedCard: {
      backgroundColor: '#E07C24',
      elevation: 3,
      shadowOffset: {
          width: 1,
          height: 1
      },
      shadowColor: '#333',
      shadowOpacity: 0.4,
    },

    cardImg: {
      height: 180,
      width: 350,
    },

    headingContainer: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center'
    },
    cardHeading: {
      color: '#000',
      fontSize: 16,
      fontWeight: '600'
    },

    cardBody: {
      padding: 10,
    },

    cardFooter: {
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },

    socialLinks: {
      fontSize: 16,
      color: '#000',
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 6
    }
})