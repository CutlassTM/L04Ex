// Exercise 1
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
    return (
        <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 24 }}>RP Values</Text>
            <Text style={{ color: 'green' }}>Excellence</Text>
            <Text style={{ backgroundColor: 'yellow' }}>Customer-Centric</Text>
            <Text style={{ fontStyle: 'italic' }}>Integrity</Text>
            <Text style={{ textAlign: 'center' }}>Teamwork</Text>
            <Text style={{ backgroundColor: 'black', color: 'white' }}>Enterprising</Text>
            <StatusBar style="auto" />
        </View>
    );
}
