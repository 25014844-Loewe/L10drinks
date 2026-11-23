import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DrinkBox from './components/DrinkBox';

const datasource = [
    {
        data: [
            {
                name: 'Iced Latte',
                price: '$4.50',
                imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400',
            },
            {
                name: 'Matcha Latte',
                price: '$5.20',
                imageUrl: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400',
            },
        ],
        title: 'COFFEE & TEA',
        bgcolor: 'brown',
        icon: 'coffee',
    },
    {
        data: [
            {
                name: 'Mango Smoothie',
                price: '$5.80',
                imageUrl: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400',
            },
            {
                name: 'Sparkling Lemonade',
                price: '$4.00',
                imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400',
            },
        ],
        title: 'REFRESHERS',
        bgcolor: 'lightsalmon',
        icon: 'cup-water',
    },
];

export default function App() {
    const renderItem = ({ item }) => {
        return (
            <DrinkBox
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
            />
        );
    };

    const renderSectionHeader = ({ section: { title, bgcolor, icon } }) => {
        const textColor = bgcolor === 'brown' ? 'white' : 'black';

        return (
            <View style={[styles.headerContainer, { backgroundColor: bgcolor }]}>
                <MaterialCommunityIcons name={icon} size={22} color={textColor} />
                <Text style={[styles.headerText, { color: textColor }]}>{title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => Alert.alert('Add Drink', 'New drinks coming soon')}
                >
                    <Text style={styles.addButtonText}>ADD DRINK</Text>
                </TouchableOpacity>
            </View>

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item.name + index}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
    },
    buttonContainer: {
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: 'black',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    listContainer: {
        paddingBottom: 24,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 16,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'black',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 8,
        color: 'black',
    },
});