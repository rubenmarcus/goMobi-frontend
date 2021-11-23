import React, {useState, useEffect} from 'react';
import {Button, Card} from 'react-native-paper';
import {StyleSheet, View, Text} from 'react-native';
import UserHeaderComponent from './userHeader';
import {useHistory} from 'react-router';
import {ActivityCard} from './activitycard';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {USEREXTRACT} from '../services/user.service';

const HomeComponent = () => {
  let history = useHistory();
  const {getItem, setItem} = useAsyncStorage('@storage_Key');
  const [activities, setActivity] = useState('');

  const readItemFromStorage = async () => {
    const item = await getItem();
    const res = await USEREXTRACT(item);

    if (res.data) {
      const ActivData = res.data.map(data => {
        const date = new Date(data.createdAt).toLocaleDateString('pt-BR');
        const transactionType =
          data.transactionType === 1 ? 'crédito' : 'débito';

        const Val = data.transactionValue.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        });

        return {
          value: Val,
          date: date,
          partner: data.partner ?? '',
          type: transactionType,
          id: data.id,
        };
      });

      setActivity(ActivData);
    }
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <UserHeaderComponent />
      <View
        style={{
          height: 100,
          background: 'transparent',
          position: 'absolute',
          top: 220,
          left: 0
        }}>
        <Text style={{fontSize: 20, paddingLeft: 10, marginBottom: 20}}>
          {' '}
          Atividades
        </Text>

        {activities
          ? activities
              .slice(0, 2)
              .map(data => <ActivityCard key={data.id} data={data} />)
          : null}
      </View>
      <View style={{background: 'transparent', position: 'relative', top: -50}}>
        <Button
          mode="contained"
          style={styles.button}
          theme={inputTheme}
          onPress={() => history.push('/partners')}>
          VER PARCEIROS
        </Button>
      </View>
    </View>
  );
};
const inputTheme = {colors: {primary: '#1F9655'}};

const inputThemesec = {colors: {primary: '#08592D'}};
const iconTheme = {colors: {primary: 'black'}, width: 40};
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#f4f4f4',
  },
  button: {
    marginTop: 20,
    width: '90%',
    height: 40,
    fontSize: 20,
    alignSelf: 'center',
  },
  cardAct: {
    backgroundColor: '#DEFFED',
    width: '90%',
    alignSelf: 'center',
    position: 'relative',
    height: 100,
    marginBottom: 20,
  },
  cardTitle: {
    position: 'absolute',
    top: 20,
    left: 100,
    fontSize: 20,
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
  },
});

export default HomeComponent;
