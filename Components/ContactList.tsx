import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Miss Bella',
            status: 'React-Native Developer',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            uid: 2,
            name: 'Sandra N.',
            status: 'Graphic Designer',
            imageUrl: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            uid: 3,
            name: 'Emma Watson',
            status: 'Software Engineer',
            imageUrl: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            uid: 4,
            name: 'Nickol Kidman',
            status: 'Cardiologist',
            imageUrl: 'https://images.unsplash.com/photo-1594361487118-f4e2b2288aea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
    ]

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image source={{uri: imageUrl}} style={styles.userImage} />
               <View>
               <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
               </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
      },

      container: {
        paddingHorizontal: 16,
        marginBottom: 4
      },
      userCard: {
        flex:1,
        flexDirection: 'row',
        alignContent: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 14
      },
      userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 14,
      },
      userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
      },
      userStatus: {
        fontSize: 12
      }
})