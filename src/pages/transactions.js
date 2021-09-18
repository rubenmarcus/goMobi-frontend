import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { ActivityCard } from '../components/activitycard';


const TransactionsPage = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{color:'#fff', fontSize: 20, position: 'absolute', left:22, top:30}}>Histórico</Text>
             </View>

            <View style={{flex:4, paddingTop:30}}>
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
            </View>
        </View>
    )
}

const inputThemesec = { colors: { primary: '#08592D' } }
const inputTheme = { colors: { primary: 'green' } }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: { flex:1, position:'relative', height:180,backgroundColor:'#35DC81' },
    form: {
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        alignSelf: 'center',
        borderColor: 'white',
        marginTop: 60,
        marginBottom: 0
    },
    formVal: {
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        alignSelf: 'center',
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 0
    },
    button: {
        marginTop: 20,
        width: '90%',
        height: 40,
        fontSize: 20,
        alignSelf: 'center'
    },
    buttonBack: {
        position:'absolute',
        width: '90%',
        height: 40,
        fontSize: 20,
        alignSelf: 'center',
        bottom:30,
    },
});




export default TransactionsPage