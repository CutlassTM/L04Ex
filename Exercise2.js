// Exercise 2
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Who we are</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our People</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our Campus</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
    },
    boxText: {
        textAlign: 'center',
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
    },
});
