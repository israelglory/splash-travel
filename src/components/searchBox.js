import React from "react";

import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';

import { primaryColor } from '../constants/colors';
import {search } from '../constants/images';

const SearchBox = () => {
    return (
        <View style={styles.searchBox}>
                <Image source={search}  style = {styles.searchImg}/>
                <TextInput placeholder="Search a destination" placeholderTextColor="grey" style={styles.searchInput}/>
            </View>
    );
}

const styles = StyleSheet.create({
    searchImg: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
    },
    searchBox: {
        borderRadius: 14,
       // height: 50,
        marginTop: 16,
        flexDirection: 'row',
        //paddingVertical: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EAECF0',
        paddingHorizontal: 14,
        backgroundColor: '#F2F4F7',
    },
    searchInput: {
        marginLeft: 10, 
        flex: 1,
        color: "black",
        fontSize:16,
    },
});

export default SearchBox;