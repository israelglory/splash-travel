import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { primaryColor } from '../constants/colors';
import SearchBox from '../components/searchBox';
import SingleChip from '../components/singleChip';

const Home = ({ navigation }) => {
    return (
        <View style={styles.sectionContainer}>
            <Text style = {styles.title}>Explore places</Text>
            <SearchBox />
            <SingleChip title="Popular" selected={true} />
            <SingleChip title="New" selected={false}/>  
        </View>
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