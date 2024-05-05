import { View, Text, StyleSheet, Button } from "react-native";
import Notes from "./Notes";




const Home = () => {

    


    return(

     <View style={styles.container}>


      
      <Text>Note Taking App</Text>

      <Button title='Click'></Button>

      
      
      

      <Notes/>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default Home