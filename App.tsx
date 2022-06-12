import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Switch } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { baseColors } from './src/styles/Colors';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === 'light'
            ? [styles.container, { backgroundColor: baseColors.white }]
            : [styles.container, { backgroundColor: baseColors.black }]
        }
      >
        <StatusBar style='auto' />
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
