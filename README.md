# 🚀 Unit Converter App

A simple React Native app that converts between **Length (meters ↔ feet)** and **Temperature (Celsius ↔ Fahrenheit)**.  
Built using controlled inputs, basic calculations, and clean component structure.

* * *

## 📂 Folder Structure
```
/app  
├── App.js  
├── index.tsx  
└── src       
   ├── screens       
   │     └── Home.js       
   └── components            
         ├── Card.js             
         └── UnitConverter.js`
```
* * *

## 📌 Features

### ✅ Unit Conversions

-   **Meters → Feet**
    
-   **Feet → Meters**
    
-   **Celsius → Fahrenheit**
    
-   **Fahrenheit → Celsius**
    

### ✅ Live Conversion

Converted value updates **instantly** as the user types.

### ✅ Clean & Reusable Components

-   `Card.js` → UI container with shadow & styling
    
-   `UnitConverter.js` → Logic + controls
    
-   `Home.js` → Screen wrapper
    
-   `App.js` → Root component
    
-   `index.tsx` → Entry point
    

### ✅ Input Validation

-   Only allows **numbers, decimals, minus sign**
    
-   Shows blank output if input is invalid
    

* * *

## 🧠 How It Works

### 1\. **Controlled Input**

`TextInput` stores value using `useState`.

### 2\. **Mode Selection**

Uses buttons to choose conversion type:

-   `"mToFt"`
    
-   `"ftToM"`
    
-   `"cToF"`
    
-   `"fToC"`
    

### 3\. **Calculation Helper**

A simple function:

`switch(mode) {   case 'mToFt': return num * 3.28084;   case 'ftToM': return num / 3.28084;   ... }`

### 4\. **Live Update**

`converted` value is computed every time `value` changes.

* * *

## 🛠 Tech Used

-   **React Native**
    
-   **Expo**
    
-   Components:
    
    -   `TextInput`
        
    -   `TouchableOpacity`
        
    -   `Text`
        
    -   `View`
        
    -   `SafeAreaView`
        
    -   `ScrollView`
        

* * *

## 📱 How to Run

`npm install npx expo start`

Scan the QR with **Expo Go** or run on emulator.
