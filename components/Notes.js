import {View , Text, StyleSheet} from 'react-native'



const Notes = () => {


    return(

        <View style={styles.container}>

            <Text>This is The Note Taking.</Text>
            
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

export default Notes