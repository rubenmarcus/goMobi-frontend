import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {TextInputMask} from 'react-native-masked-text';
import {useHistory} from 'react-router-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {USERTRANSFERENCE} from '../services/user.service';

const TransferPage = () => {
  const {getItem, setItem} = useAsyncStorage('@storage_Key');
  const [cpf, setCpf] = useState('');
  const [userRes, setRes] = useState('');
  const [token, setToken] = useState('');
  const [amount, setCredit] = useState('');
  let history = useHistory();

  const readItemFromStorage = async () => {
    const item = await getItem();
    setToken(item);
  };

  const setTransfer = async () => {
    const res = await USERTRANSFERENCE(token, cpf, amount);

    if (res.data) {
      setRes({type: 'ok', data: 'Transferência efetuada com sucesso!'});
    } else {
        
      setRes({type: 'error', data: 'Ouve um Erro na transferência'});
    }
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const userMsgColor = userRes.type === 'ok' ? 'green' : 'red';

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
          Transferir
        </Text>
      </View>

      <View style={{flex: 4}}>
        <Text
          style={{
            color: userMsgColor,
            fontSize: 14,
            position:'absolute',
            top: 20,
            left:20
          }}>
          {userRes.data}
        </Text>

        <TextInput
          mode="flat"
          label="Digite o CPF do usuário para transferir"
          onChangeText={cpfN => setCpf(cpfN)}
          style={styles.form}
          theme={inputTheme}
        />

        <TextInput
          mode="flat"
          label="Digite o valor"
          style={styles.formVal}
          theme={inputTheme}
          render={props => (
            <TextInputMask
              {...props}
              type={'money'}
              onChangeText={money => setCredit(money)}
            />
          )}
        />

        <Button
          mode="contained"
          style={styles.button}
          theme={inputThemesec}
          onPress={() => setTransfer()}>
          TRANSFERIR
        </Button>
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

export default TransferPage;
