import { StyleSheet, Text, Image, TouchableOpacity, View, Linking } from 'react-native';
import React from 'react';

const ProfileCard = () => {

    // function for linking
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (
        <View style={styles.container}>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={styles.cardHeader}>
                    <View style={styles.proBadge}>
                        <Text style={styles.proText}>PRO</Text>
                    </View>
                    <Image source={require('../assets/images/hxnCodes.jpg')} style={styles.cardImg} />
                    <Text style={styles.cardTitle}>Hasnat Rana</Text>
                    <Text style={styles.cardDescription}>React and React Native Developer </Text>
                    <Text style={styles.cardDescription}>MERN Stack Developer </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => { openWebsite('https://www.twitter.com/hxncodes') }}>
                            <Text style={[styles.cardButton, styles.activeButton]}>Contact me</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { openWebsite('https://www.github.com/hxncodes') }}>
                            <Text style={[styles.cardButton, styles.deActiveButton]}>Follow me</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardFooter}>
                    <Text style={styles.footerTitle}>Skills</Text>
                    <View style={styles.skillArea}>
                        <Text style={styles.skill}>React-Native</Text>
                        <Text style={styles.skill}>Mongo DB</Text>
                        <Text style={styles.skill}>Express JS</Text>
                        <Text style={styles.skill}>React</Text>
                        <Text style={styles.skill}>Node JS</Text>
                        <Text style={styles.skill}>JavaScript</Text>
                        <Text style={styles.skill}>TypeScript</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28223F',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    card: {
        backgroundColor: '#231E39',
        borderRadius: 6,
        paddingTop: 30,
        width: 350,
    },
    cardElevated: {},
    cardHeader: {
        // justifyContent: 'center',
        alignItems: 'center',
    },
    proBadge: {
        position: 'absolute',
        top: 5,
        left: 20,
        backgroundColor: '#FEBB0B',
        height: 25,
        width: 40,
        borderRadius: 3,
        paddingHorizontal: 5,
        paddingVertical: 3
    },
    proText: {
        color: '#000'
    },
    cardImg: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: '700',
        paddingTop: 8,
        paddingBottom: 5
    },
    cardDescription: {
        fontSize: 16,
    },
    buttonContainer: {
        paddingVertical: 30,
        flexDirection: 'row',
    },
    cardButton: {
        padding: 8,
        borderRadius: 3,
        marginHorizontal: 10,
        width: 100,
        textAlign: 'center',
    },
    activeButton: {
        backgroundColor: '#038FCB',
        color: '#1E1937'
    },
    deActiveButton: {
        borderWidth: 1,
        borderColor: '#038FCB',
        color: '#038FCB'

    },
    cardFooter: {
        backgroundColor: '#1E1937',
        paddingHorizontal: 10,
        paddingVertical: 8,
        overflow: 'hidden'
    },
    footerTitle: {
        fontSize: 14,
        fontWeight: '600',
        paddingBottom: 6
    },
    skillArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10
    },
    skill: {
        borderWidth: 1,
        borderColor: '#231E39',
        padding: 1,
        margin: 2

    }
})