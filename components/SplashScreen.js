
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native"







const Splash = ({navigation}) => {

    

    

    return(
        <View style={styles.container}>

            <Text style={styles.appintro}>Welcome To the BlueNote.</Text>

            

              <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btns}>

                <Text style={styles.btntext}>Get Started</Text>
              </TouchableOpacity>

             

              

             
            </View>

            
            
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    btns: {
      marginTop: 15,
      backgroundColor: "black",
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 20

    },

    btntext: {
      fontSize: 13,
      color: "#fff"
    },

    

    appintro: {

      fontSize: 22,
      fontWeight: "bold"
      
    }
  });




export default Splash