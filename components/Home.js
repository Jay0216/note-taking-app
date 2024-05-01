import { View, Text, StyleSheet, Button } from "react-native";

const Home = () => {

    


    return(

     <View style={styles.container}>


      <Text>Hello Users it's React Native</Text>
      <Text>Note Taking App</Text>

      <Button title='Click'></Button>

      
      
      <Home/>

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