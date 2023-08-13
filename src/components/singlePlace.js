import React from "react";
import { StyleSheet, View, Text, Image, TextInput, } from 'react-native';
import { primaryColor } from '../constants/colors';
import {place1,star } from '../constants/images';

const SinglePlace = ({placeName, location, rating, image}) => {
    return (
        <View style={styles.placeContainer}>
            <Image source={image} style={styles.placeImg}/>
            <View style={styles.placeDetails}>
               <View style={styles.placeRating}>
                    <Text style={styles.placeTitle}>{placeName}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.placeRatingText}>{rating}</Text>
                        <Image source={star} style={styles.starImg}/>
                    </View>
                    
                </View>
                <Text style={styles.placeSubTitle}>{location}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    placeContainer: {
        borderRadius: 14,
        height: 300,
        marginTop: 16,
        flexDirection: 'column',
       // alignItems: 'center',
       // borderWidth: 1,

    },
    placeImg: {
        width: "100%",
        height: "80%",
        resizeMode: 'cover',
        borderRadius: 14,
    },
    placeDetails: {
        flex: 1,
    },
    placeTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
    },
    placeSubTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'grey',
    },
    placeRating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop: 10,
    },
    starImg: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
    placeRatingText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        paddingRight: 5,
    }
});


export default SinglePlace;