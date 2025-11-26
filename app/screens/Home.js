// import React, { useState, useEffect } from 'react';
// import { ScrollView, View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
// import Card from '../components/Card';
// import UnitConverter from '../components/UnitConverter';

// export default function Home() {
//   // Counter Section
//   const [count, setCount] = useState(0);

//   // Storage Section
//   const [name, setName] = useState('');
//   const [storedName, setStoredName] = useState('');

//   useEffect(() => {
//     setStoredName('John Doe'); // Hardcoded initial value
//   }, []);

//   const saveName = () => {
//     setStoredName(name);
//     setName('');
//   };

//   // Device Section
//   const { width, height } = Dimensions.get('window');

//   return (
//     <ScrollView style={styles.container}>
//       {/* UI Section */}
//       <Card>
//         <Text style={styles.title}>UI Example</Text>
//         <Text>This is a simple card with a button.</Text>
//         <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
//       </Card>

//       {/* Counter Section */}
//       <Card>
//         <Text style={styles.title}>Counter</Text>
//         <Text>Current Count: {count}</Text>
//         <View style={styles.row}>
//           <Button title="+" onPress={() => setCount(count + 1)} />
//           <Button title="-" onPress={() => setCount(count - 1)} />
//         </View>
//       </Card>

//       {/* Storage Section */}
//       <Card>
//         <Text style={styles.title}>Storage Example</Text>
//         <TextInput
//           placeholder="Enter your name"
//           value={name}
//           onChangeText={setName}
//           style={styles.input}
//         />
//         <Button title="Save Name" onPress={saveName} />
//         <Text style={{ marginTop: 10 }}>Stored Name: {storedName}</Text>
//       </Card>

//       {/* Device Section */}
//       <Card>
//         <Text style={styles.title}>Device Info</Text>
//         <Text>Width: {width}</Text>
//         <Text>Height: {height}</Text>
//       </Card>

//       {/* Unit Converter */}
//       <UnitConverter />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10, backgroundColor: '#f2f2f7' },
//   title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
//   row: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
// });
