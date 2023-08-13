import React, {useState} from 'react';

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { primaryColor } from '../constants/colors';
import SearchBox from '../components/searchBox';
import SingleChip from '../components/singleChip';
import SinglePlace from '../components/singlePlace';
import {place1 } from '../constants/images';

const Home = ({ navigation }) => {
    const [selectedChip, setSelectedChip] = useState(0);
    const categories = [
        {title: 'All', selected: selectedChip == 0 ? true : false}, 
        {title: 'The place to be', selected: selectedChip == 1 ? true : false},
        {title: 'Recommanded', selected: selectedChip == 2 ? true : false},
        {title: 'Trending', selected: selectedChip == 3 ? true : false},
        {title: 'Scarce', selected: selectedChip == 4 ? true : false},
        {title: 'Recommanded', selected: selectedChip == 5 ? true : false},
    ];

    const places = [
        {placeName: 'The Residence Tunis', location: 'Ikeja, Lagos, Nigeria', rating: '4.5', image: place1},
        {placeName: 'The Residence Tunis', location: 'Ikeja, Lagos, Nigeria', rating: '4.5', image: place1},
        {placeName: 'The Residence Tunis', location: 'Ikeja, Lagos, Nigeria', rating: '4.5', image: place1},
        {placeName: 'The Residence Tunis', location: 'Ikeja, Lagos, Nigeria', rating: '4.5', image: place1},
        {placeName: 'The Residence Tunis', location: 'Ikeja, Lagos, Nigeria', rating: '4.5', image: place1},
    ];

    const handleChipSelection = (index) => {
        setSelectedChip(index);
    }

    return (
        <ScrollView>
            <View style={styles.sectionContainer}>
            <Text style = {styles.title}>Explore places</Text>
            <SearchBox />
            {/*I want a flatlist that will display my SingleChip horizontally and it will help me track each index because I need it for selected chip*/}
            <View>
                <FlatList
                    data={categories}
                    renderItem={({item, index}) => <TouchableOpacity onPress={() => handleChipSelection(index)}><SingleChip title={item.title} selected={item.selected}/></TouchableOpacity>}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            
            <View>
                <FlatList
                    data={places}
                    renderItem={({item, index}) => <TouchableOpacity onPress={() => navigation.navigate("PlaceDetails")}><SinglePlace placeName={item.placeName} location={item.location} rating={item.rating} image={item.image}/></TouchableOpacity>}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled={false}
                />
            </View>

          
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 16,
        backgroundColor: '#F9FAFB',
    },
    title: {
        fontSize: 32,
        color: primaryColor,
        fontWeight: '500',
    }
});

export default Home;