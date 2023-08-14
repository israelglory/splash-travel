import React,{useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground, Image, Dimensions, FlatList, ScrollView } from "react-native";
import {place1,star } from '../constants/images';
import Divider from "../components/divider";
import { places } from "../shared/placesData";
import { primaryColor } from "../constants/colors";
import ImageCarousel from "../components/carousel";


const PlaceDetailsScreen = ({ navigation, route }) => {
    const { i } = route.params;
    const place = places[i];


      const renderItem = ({ item }) => (
        <View style={styles.item}>
          <Image source={{uri: item}} style={styles.placeImg}/>
        </View>
      );
      const handleBack = () => {
        navigation.goBack()
      };


    return (

        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                    <ImageCarousel images={place.images} onClose={handleBack}/>
                    
                    <View style={styles.placeDetails}>
                        <View style={styles.placeRating}>
                                <Text style={styles.placeTitle}>{place.placeName}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={styles.placeRatingText}>{place.rating}</Text>
                                    <Image source={star} style={styles.starImg}/>
                                </View>
                                
                            </View>
                            <Text style={styles.placeSubTitle}>{place.location}</Text>
                    </View>
                    <Divider />

                    {/* About Place */}
                    <View style={styles.aboutPlace}>
                        <Text style={styles.aboutPlaceTitle}>About the place</Text>
                        <Text style={styles.aboutPlaceText}>{place.about}</Text>
                    </View>

                    <Divider />

                    {/* Bedding */}
                    <View style={styles.bedding}>
                        <Text style={styles.beddingTitle}>Bedding</Text>
                        <View style={styles.beddingDetails}>
                            <Text style={styles.beddingText}>1 King Bed</Text>
                            <View style={styles.beddingDot}></View>
                            <Text style={styles.beddingText}>2 Single Beds</Text>
                            <View style={styles.beddingDot}></View>
                            <Text style={styles.beddingText}>1 Sofa Bed</Text>

                        </View>
                    </View>

                    <Divider />

                    <FlatList
                            data={place.images}
                            renderItem={renderItem}
                            keyExtractor={item => place.images.indexOf(item)}
                            numColumns={2}
                            style={styles.container}
                            scrollEnabled={false}
                    />
                
                
            </ScrollView>
            
            <View style={styles.stickyContainer}>
                 {/* Price per night in dollar */}
                <View style={styles.priceSection}>
                    <View style = {styles.perNight}>
                        <Text style={styles.placePrice}>${place.price}</Text>
                        <Text style={styles.placeSubTitle}>/night</Text>
                    </View>

                    <TouchableOpacity onPress={() => alert('Booked!')} style = {styles.btn}>
                        <Text style={styles.plusSign}>✦</Text>
                        <Text style={styles.bookNowText}>Book Now</Text>
                        <Text style={styles.plusSign}>✦</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 60, // Adjust this value to accommodate the height of the sticky container
      },
    image: {
        height: 400,
        width: '100%',
        margin:0,
        padding:0,
    },
    placeDetails: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 20,
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
    placePrice: {
        fontSize: 28, 
        fontWeight: '700', 
        color: 'black',
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
    perNight: {
        flexDirection: 'row',
        alignItems:  'center',
        justifyContent: 'center',
    },
    priceSubTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'grey',
    },
    placeRatingText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        paddingRight: 5,
    },
    aboutPlace: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    aboutPlaceTitle: {
        fontSize: 18, 
        fontWeight: '700', 
        color: 'black',
    },
    aboutPlaceText: {
        fontSize: 16, 
        fontWeight: '500', 
        color: 'grey', 
        marginTop: 10,
    },
    bedding: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    beddingTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
    },
    beddingDetails: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    beddingText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'grey',
        
    },
    beddingDot: {
        height: 4,
        width: 4,
        borderRadius: 100,
        backgroundColor: 'grey',
        marginHorizontal: 8,
    },
    item: {
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 5,
        marginTop: 16,
        height: Dimensions.get('window').width / 2 - 10, // Adjust the item height
      },
      placeImg: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
    },
    priceSection:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
    stickyContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
      },
      btn: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        backgroundColor: primaryColor,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 8,
      },
      bookNowText: {
        fontSize: 18,
        fontWeight: '500',  
        color: 'white',
        paddingHorizontal: 10,
    },
    plusSign: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white',
    },
    backButton: {
        padding: 8, 
        backgroundColor: 'white', 
        borderRadius:8, 
        width:35, 
        height:35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        marginLeft: 16,
    },
});

export default PlaceDetailsScreen;