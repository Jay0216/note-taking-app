import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './components/SplashScreen';
import Notes from './components/Notes';

const Stack = createNativeStackNavigator()


export default function App() {

  

  

   
  return (

    <NavigationContainer>




      <Stack.Navigator  >

        <Stack.Screen name="Splash" options={{headerShown: false}} component={Splash}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Notes" component={Notes}/>

          
        

        
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


