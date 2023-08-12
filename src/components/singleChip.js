import React from "react";
import { StyleSheet, View, Text, Image, TextInput, } from 'react-native';
import { primaryColor } from '../constants/colors';

const SingleChip = ({title, selected}) => {
    return (
        <View style={[styles.chip, selected && styles.selectedChip]}>
            <Text style={[styles.chipText, selected && styles.selectedChipText]}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    chip: {
        borderRadius: 50,
        height: 50,
        marginTop: 16,
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EAECF0',
        paddingHorizontal: 14,
        backgroundColor: '#F2F4F7',
    },
    selectedChip: {
        backgroundColor: primaryColor,
        borderColor: primaryColor,
    },
    chipText: {
        color: "black",
        fontSize:16,
    },
    selectedChipText: {
        color: "white",
    }
});

export default SingleChip;