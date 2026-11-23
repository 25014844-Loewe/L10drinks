import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const DrinkBox = ({ name, price, imageUrl }) => {
    const onPressItem = () => {
        Alert.alert(name, 'Price: ' + price);
    };

    return (
        <TouchableOpacity onPress={onPressItem}>
            <View style={styles.cardContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Image source={{ uri: imageUrl }} style={styles.cardImage} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 14,
    },
    cardImage: {
        width: 100,
        height: 140,
    },
});

export default DrinkBox;