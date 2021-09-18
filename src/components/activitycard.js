import * as React from 'react';
import { Button, Card } from 'react-native-paper';
import { StyleSheet, View, Text } from "react-native";


export const ActivityCard = () => {
    return (<View>
      <Card style={styles.cardAct}>
        <Card.Content>
          <Button icon="bus" style={styles.cardIcon} labelStyle={{ fontSize: 45 }}
            theme={iconTheme}>
          </Button>
          <Text style={styles.cardTitle}>Viagem de Ônibus</Text>
  
          <View style={styles.cardPrice}>
  
            <Button icon="cash" style={styles.cardSmallIcon} labelStyle={{ fontSize: 25 }}
              theme={iconTheme}>
            </Button>
  
            <Text>R$ 4.50</Text></View>
          <View style={styles.cardKm}>
            <Button icon="map-marker-multiple" style={styles.cardSmallMarker} labelStyle={{ fontSize: 20 }}
              theme={iconTheme}>        </Button>
  
            <Text>20KM</Text></View>
        </Card.Content>
      </Card>
    </View>)
  }


  
const iconTheme = { colors: { primary: 'black' }, width: 40 }
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    header: { flex:1, position:'relative', height:180,backgroundColor:'#35DC81' },
    buttonBack: {
        position:'absolute',
        width: '90%',
        height: 40,
        fontSize: 20,
        alignSelf: 'center',
        bottom:30,
    },
  navbar: {
    backgroundColor: '#f4f4f4'
  },
  button: {
    marginTop: 20,
    width: '90%',
    height: 40,
    fontSize: 20,
    alignSelf: 'center'
  },
  cardAct: {
    backgroundColor: '#DEFFED',
    width: '90%',
    alignSelf: 'center',
    position: 'relative',
    height: 100,
    marginBottom: 20
  },
  cardTitle: {
    position: 'absolute',
    top: 20,
    left: 100,
    fontSize: 20
  },
  cardIcon: {
    position: 'absolute',
    top: 5,
    left: 10,
  },
  cardSmallIcon: {
    position: 'absolute',
    top: -15,
    left: -40,
  },
  cardSmallMarker: {
    position: 'absolute',
    top: -12,
    left: -30,
  },
  cardPrice: {
    position: 'absolute',
    top: 70,
    left: 150,
  },
  cardKm: {
    position: 'absolute',
    top: 70,
    left: 280,
  }
});