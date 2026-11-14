import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

// Re-usable component to display one question
const QuestionBox = ({number, imageUrl, question, options, selected, onValueChange}) => {
    return (
        <View style={[styles.card, styles.shadow]}>
            <View style={styles.labelRow}>
                <Text style={styles.labelText}>Question {number} of 4</Text>
            </View>
            <Image source={{uri: imageUrl}} style={styles.image} />

            {/* Row: number badge + question text */}
            <View style={styles.questionRow}>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{number}</Text>
                </View>
                <Text style={styles.questionText}>{question}</Text>
            </View>

            {/* Purple option box */}
            <View style={styles.pickerBox}>
                <Picker
                    selectedValue={selected}
                    onValueChange={onValueChange}
                    style={styles.picker}
                    dropdownIconColor="white">
                    {options.map((option) => (
                        <Picker.Item key={option} label={option} value={option} color="green" />
                    ))}
                </Picker>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 10,
        padding: 10,
    },
    shadow: {
        elevation: 4,            // Android shadow
        shadowColor: 'black',    // iOS shadow
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    image: {
        width: '100%',
        height: 200,
        maxHeight: 200,   // never taller than 200, even on big screens
        borderRadius: 8,
    },
    questionRow: {
        flexDirection: 'row',     // badge and text side by side
        alignItems: 'center',     // vertically centred on the cross axis
        marginVertical: 10,
    },
    badge: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'purple',
        justifyContent: 'center', // centre the number vertically
        alignItems: 'center',     // centre the number horizontally
        marginRight: 10,
    },
    badgeText: {
        color: 'white',
        fontWeight: 'bold',
    },
    questionText: {
        flex: 1,                  // take up the remaining space in the row
        fontSize: 18,
    },
    pickerBox: {
        backgroundColor: 'purple',
        borderRadius: 8,
    },
    picker: {
        color: 'white',
    },
    labelRow: {
        alignItems: 'flex-end',   // push to the right (cross axis)
        marginBottom: 5,
    },
    labelText: {
        fontSize: 12,
        color: 'gray',
    },
});

export default QuestionBox;