import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';


export default function App() {

  

   
  return (

    <NavigationPreloadManager>

<View style={styles.container}>

      
      
<StatusBar style="auto" />
</View>
    </NavigationPreloadManager>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
