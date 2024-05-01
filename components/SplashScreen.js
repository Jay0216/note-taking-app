import { View, Text, Button, StyleSheet } from "react-native"




const Splash = () => {

    

    

    return(
        <View style={styles.container}>

            <Text>Welcome To the APP.</Text>

            <Button onPress={get_started} title="Get Started"></Button>
            
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