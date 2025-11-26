// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Card({ children }) {
//   return <View style={styles.card}>{children}</View>;
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 12,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 5 },
//     shadowRadius: 8,
//     elevation: 5,
//   },
// });
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    margin: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
});
