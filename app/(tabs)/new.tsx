import { View, Text, StyleSheet } from 'react-native';

export default function NewAndHotScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>New & Hot</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
}); 