/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView,  
  StyleSheet,    
  useColorScheme,

} from 'react-native';

import Router from './src/routes/Routes';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <SafeAreaView style={styles.container}>
      
      <Router></Router>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({    
  container:{
    flex:1
  }
});

export default App;
