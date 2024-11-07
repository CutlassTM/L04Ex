import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, { backgroundColor: 'lightblue' }]}>Square 1</Text>
            <Text style={[styles.child, { backgroundColor: 'lightgreen' }]}>Square 2</Text>
            <Text style={[styles.child, { backgroundColor: 'lightcoral' }]}>Square 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    child: {
        width: 80,
        height: 80,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
        lineHeight: 80,
    },
});
