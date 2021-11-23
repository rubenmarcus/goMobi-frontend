import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ActivityCard} from '../components/activitycard';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {USEREXTRACT} from '../services/user.service';

const TransactionsPage = () => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            position: 'absolute',
            left: 22,
            top: 30,
          }}>
          Extrato
        </Text>
      </View>

      <View style={{flex: 4, paddingTop: 30}}>
        {activities
          ? activities.map(data => <ActivityCard key={data.id} data={data} />)
          : null}
      </View>
    </View>
  );
};

const inputThemesec = {colors: {primary: '#08592D'}};
const inputTheme = {colors: {primary: 'green'}};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    position: 'relative',
    height: 180,
    backgroundColor: '#35DC81',
  },
  form: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignSelf: 'center',
    borderColor: 'white',
    marginTop: 60,
    marginBottom: 0,
  },
  formVal: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignSelf: 'center',
    borderColor: 'white',
    marginTop: 10,
    marginBottom: 0,
  },
  button: {
    marginTop: 20,
    width: '90%',
    height: 40,
    fontSize: 20,
    alignSelf: 'center',
  },
  buttonBack: {
    position: 'absolute',
    width: '90%',
    height: 40,
    fontSize: 20,
    alignSelf: 'center',
    bottom: 30,
  },
});

export default TransactionsPage;
