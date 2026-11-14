import React, {useState} from 'react';
import {View, Text, ScrollView, Alert, Button, StyleSheet} from 'react-native';
import QuestionBox from './components/QuestionsBox';

const MyApp = () => {
    const [answer1, setAnswer1] = useState('Rose');
    const [answer2, setAnswer2] = useState('Rose');
    const [answer3, setAnswer3] = useState('Rose');
    const [answer4, setAnswer4] = useState('Rose');

    const FlowerOptions = ['Rose', 'Lavender', 'Star Flower', 'Sun Flower'];

    // correct answers
    const correct1 = 'Rose';
    const correct2 = 'Lavender';
    const correct3 = 'Star Flower';
    const correct4 = 'Sun Flower';

    // hints
    const hint1 = 'The classic red flower of love, with thorns on its stem.';
    const hint2 = 'Purple and sweet-smelling, often used in soaps and oils.';
    const hint3 = 'Its petals spread out like the points of a star.';
    const hint4 = 'Big and yellow, it turns its face towards the sun.';

    const submitAnswers = () => {
        let score = 0;
        if (answer1 === correct1) score = score + 1;
        if (answer2 === correct2) score = score + 1;
        if (answer3 === correct3) score = score + 1;
        if (answer4 === correct4) score = score + 1;

        let feedback = 'You can do better next time.';
        if (score === 4) {
            feedback = 'Well done! Perfect score!';
        } else if (score >= 2) {
            feedback = 'Good job!';
        }

        Alert.alert('You have ' + score + ' correct answers!', feedback);
    };
    const showHints = () => {
        let hints = '';
        if (answer1 !== correct1) hints = hints + 'Q1: ' + hint1 + '\n\n';
        if (answer2 !== correct2) hints = hints + 'Q2: ' + hint2 + '\n\n';
        if (answer3 !== correct3) hints = hints + 'Q3: ' + hint3 + '\n\n';
        if (answer4 !== correct4) hints = hints + 'Q4: ' + hint4 + '\n\n';

        if (hints === '') {
            hints = 'All your answers are correct! No hints needed.';
        }

        Alert.alert('💡 Hints', hints);
    };

    return (
        <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>🌸 Guess Flower's Name 🌸</Text>
                <Text style={styles.subtitle}>Pick the right name for each picture</Text>
                <View style={styles.ratioRow}>
                    <View style={[styles.ratioBox, {flex: 1, backgroundColor: 'pink'}]} />
                    <View style={[styles.ratioBox, {flex: 2, backgroundColor: 'purple'}]} />
                    <View style={[styles.ratioBox, {flex: 1, backgroundColor: 'pink'}]} />
                </View>
            </View>

            <QuestionBox
                number={1}
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_k-84-k9EXNA_azhQiaKC0W2OWaRbpEsDX2NGuaJMfxFvT0WeXNg7Lpk&s=10"
                question="What is this flower's name?"
                options={FlowerOptions}
                selected={answer1}
                onValueChange={(value) => setAnswer1(value)}
            />
            <QuestionBox
                number={2}
                imageUrl="https://static.wixstatic.com/media/5f2212_56e188e654574db5890c550e05750206~mv2.jpg/v1/fill/w_568,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5f2212_56e188e654574db5890c550e05750206~mv2.jpg"
                question="What is this flower's name?"
                options={FlowerOptions}
                selected={answer2}
                onValueChange={(value) => setAnswer2(value)}
            />
            <QuestionBox
                number={3}
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EUKJZBP8EIjTSGELzK-C70ilgHeIhp6R84axLoD2jzAM5D0vl91johU&s=10"
                question="What is this flower's name?"
                options={FlowerOptions}
                selected={answer3}
                onValueChange={(value) => setAnswer3(value)}
            />
            <QuestionBox
                number={4}
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWvtM5hVoUN5bvIvYQA87xM3F6VoUFTuM5u-M5q2qMdpIkc0I3V1gvCI&s=10"
                question="What is this flower's name?"
                options={FlowerOptions}
                selected={answer4}
                onValueChange={(value) => setAnswer4(value)}
            />

            {/* Button area */}
            <View style={styles.buttonRow}>
                <View style={styles.buttonItem}>
                    <Button title="SUBMIT" color="purple" onPress={submitAnswers} />
                </View>
                <View style={styles.buttonItem}>
                    <Button title="SHOW HINTS" color="orange" onPress={showHints} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f3e8ff',
    },
    content: {
        paddingTop: 40,     // replaces the empty <Text></Text> spacers
        paddingBottom: 30,
    },
    header: {
        alignItems: 'center',     // centre title and subtitle
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'purple',
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
        marginTop: 5,
    },
    buttonRow: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,
    },
    buttonItem: {
            flex: 1,                         // each button gets equal space
            marginHorizontal: 5,
    },
    ratioRow: {
        flexDirection: 'row',
        width: '80%',
        marginTop: 10,
    },
    ratioBox: {
        height: 6,
    },
});

export default MyApp;