import * as React from 'react';
import { Button, Card } from 'react-native-paper';
import { StyleSheet, View, Text } from "react-native";
import UserHeaderComponent from './userHeader';
import { useHistory } from 'react-router';
import { ActivityCard } from './activitycard';




const HomeComponent = () => {

  let history = useHistory();


  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }} >

      <UserHeaderComponent />
      <View style={{ height: 100, background: 'transparent', position: 'relative', top: -260 }}>
        <Text style={{ fontSize: 20, paddingLeft: 10, marginBottom: 20 }}> Atividades</Text>
        <ActivityCard />
        <ActivityCard />

      </View>
      <View style={{ background: 'transparent', position: 'relative', top: -50 }}>
        <Button mode="contained" style={styles.button} theme={inputTheme} onPress={() => history.push('/partners')}>
          VER PARCEIROS
        </Button>
        <Button mode="contained" style={styles.button} theme={inputThemesec} onPress={() => history.push('/credit')}>
          ADICIONAR CRÉDITOS
        </Button>
      </View>
    </View>
  );
};
const inputTheme = { colors: { primary: '#1F9655' } }

const inputThemesec = { colors: { primary: '#08592D' } }
const iconTheme = { colors: { primary: 'black' }, width: 40 }
const styles = StyleSheet.create({
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

export default HomeComponent;