// import React from 'react';
// import { SafeAreaView, StatusBar } from 'react-native';
// import Home from './screens/Home';

// export default function App() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar barStyle="dark-content" />
//       <Home />
//     </SafeAreaView>
//   );
// }
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import UnitConverter from './components/UnitConverter';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <UnitConverter />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 50,
    backgroundColor: '#f2f2f7',
  },
});
