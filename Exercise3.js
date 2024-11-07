// Exercise 3A ------------------------------------------------------------------------------------
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//     return (
//         <View style={styles.parent}>
//             <Text style={[styles.child, { backgroundColor: 'powderblue' }]}>Child 1</Text>
//             <Text style={[styles.child, { backgroundColor: 'skyblue' }]}>Child 2</Text>
//             <Text style={[styles.child, { backgroundColor: 'steelblue' }]}>Child 3</Text>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         marginTop: 30,
//
//
//     },
//     child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//         flex: 1,
//     },
// });


// Exercise 3B -------------------------------------------------------------------------------------
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//     return (
//         <View style={styles.parent}>
//             <Text style={[styles.child, { backgroundColor: 'powderblue' }]}>Child 1</Text>
//             <Text style={[styles.child, { backgroundColor: 'skyblue' }]}>Child 2</Text>
//             <Text style={[styles.child, { backgroundColor: 'steelblue' }]}>Child 3</Text>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         flex: 1,
//         marginTop: 30,
//
//
//     },
//     child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//         flex: 1,
//     },
// });


// Exercise 3C -----------------------------------------------------------------------------------
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//     return (
//         <View style={styles.parent}>
//             <Text style={[styles.child, { backgroundColor: 'powderblue', maxWidth: 90 }]}>Child 1</Text>
//             <Text style={[styles.child, { backgroundColor: 'skyblue' }]}>Child 2</Text>
//             <Text style={[styles.child, { backgroundColor: 'steelblue', maxHeight: 120 }]}>Child 3</Text>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         flex: 1,
//         marginTop: 30,
//
//
//     },
//     child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//         flex: 1,
//     },
// });


// Exercise 3D ---------------------------------------------------------------------------------------
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//     return (
//         <View style={styles.parent}>
//             <Text style={[styles.child, { backgroundColor: 'powderblue', flex: 1 }]}>Child 1</Text>
//             <Text style={[styles.child, { backgroundColor: 'skyblue', flex: 2 }]}>Child 2</Text>
//             <Text style={[styles.child, { backgroundColor: 'steelblue', flex: 3 }]}>Child 3</Text>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         marginTop: 30,
//     },
//     child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     },
// });

// Exercise 3E -------------------------------------------------------------------------------------
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, { backgroundColor: 'powderblue' }]}>Child 1</Text>
            <Text style={[styles.child, { backgroundColor: 'skyblue' }]}>Child 2</Text>
            <Text style={[styles.child, { backgroundColor: 'steelblue' }]}>Child 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        flex: 1,
        marginTop: 30,
        // justifyContent: "flex-start",
        // justifyContent: "flex-end",
        // justifyContent: "space-around",
        justifyContent: "space-between",
    },
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
});
