import React, { useState } from 'react'; 
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card.js';


export default function UnitConverter() {
  const [value, setValue] = useState('');
  const [mode, setMode] = useState('mToFt'); 

  const convertValue = (val) => {
    const num = parseFloat(val);
    if (isNaN(num)) return '';

    switch (mode) {
      case 'mToFt':
        return (num * 3.28084).toFixed(2);
      case 'ftToM':
        return (num / 3.28084).toFixed(2);
      case 'cToF':
        return ((num * 9) / 5 + 32).toFixed(2);
      case 'fToC':
        return (((num - 32) * 5) / 9).toFixed(2);
      default:
        return '';
    }
  };

  const converted = convertValue(value);

  return (
    <Card>
      <Text style={styles.title}>Unit Converter</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.modeButton, mode === 'mToFt' && styles.activeButton]}
          onPress={() => setMode('mToFt')}
        >
          <Text style={styles.buttonText}>Meters → Feet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.modeButton, mode === 'ftToM' && styles.activeButton]}
          onPress={() => setMode('ftToM')}
        >
          <Text style={styles.buttonText}>Feet → Meters</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.modeButton, mode === 'cToF' && styles.activeButton]}
          onPress={() => setMode('cToF')}
        >
          <Text style={styles.buttonText}>Celsius → Fahrenheit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.modeButton, mode === 'fToC' && styles.activeButton]}
          onPress={() => setMode('fToC')}
        >
          <Text style={styles.buttonText}>Fahrenheit → Celsius</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Enter value"
        keyboardType="numeric"
        value={value}
        onChangeText={text => setValue(text.replace(/[^0-9.-]/g, ''))}
        style={styles.input}
      />

      <Text style={styles.result}>Converted Value: {converted}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  modeButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  activeButton: { backgroundColor: '#1e90ff' },
  buttonText: { textAlign: 'center', color: '#000', fontWeight: '500' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  result: { fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#1e90ff' },
});






