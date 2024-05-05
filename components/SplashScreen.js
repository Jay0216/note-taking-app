
import { View, Text, Button, StyleSheet } from "react-native"







const Splash = ({navigation}) => {

    

    

    return(
        <View style={styles.container}>

            <Text>Welcome To the APP.</Text>

            <Button onPress={() => navigation.navigate("Home")} title="Get Started"></Button>
            
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


export default Splash