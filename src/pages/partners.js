import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image} from "react-native";
import { useHistory } from 'react-router';
import { Button } from 'react-native-paper';


export const PartnersPage = () => {
    let history = useHistory();

    const Images = [
        { key: require('../assets/p-1.png') },
        { key: require('../assets/p-2.png') },
        { key: require('../assets/p-3.png') },
        { key: require('../assets/p-4.png') },
        { key: require('../assets/p-5.png') },
        { key: require('../assets/p-6.png') },
        { key: require('../assets/p-7.png') },
        { key: require('../assets/p-8.png') },
        { key: require('../assets/p-9.png') },
        { key: require('../assets/p-10.png') },
        { key: require('../assets/p-11.png') },
        { key: require('../assets/p-12.png') }]

    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>Parceiros</Text>
            <Text style={styles.desc}>Parceiros que aceitam goMobi</Text>
            <View style={styles.row}>

                {Images.map((image, i) => ( <View style={styles.imageitem} key={i}><Image  style={styles.image} source={image.key} /></View>))}

            </View>

            <Button mode="contained" style={styles.button} theme={inputTheme} onPress={() => history.push('/dashboard')}>
        VOLTAR
      </Button> 
        </View>
    )
}
const inputTheme = { colors: { primary: 'green' } }


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {fontSize:30, paddingLeft:30, paddingTop:30},
    desc: {fontSize:15, paddingLeft:30, paddingTop:10, paddingBottom:20},
    image: { alignSelf: "center"},
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center'
    },
    imageitem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
        width:120,
        height:120,
        margin:5, 

    },
    button: {
        marginTop: 20,
        width: '90%',
        height: 40,
        fontSize: 20,
        alignSelf: "center"
      },
});