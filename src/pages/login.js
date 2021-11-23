import React from 'react';

import {StyleSheet, View, ImageBackground, Text, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {LANG_PTBR} from '../language/pt-br';
import {useHistory} from 'react-router-native';
import AUTHSERVICE from '../services/auth.service';
import {ActivityIndicator, Colors} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userRes, setRes] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);



  let history = useHistory();
  const fetchUser = async () => {

    const data = {
      email: email,
      password: password,
      remember: true,
    };
    setLoading(true);

    const res = await AUTHSERVICE(data);

    if (res.data) {

        const storeData = async (value) => {
            try {
              await AsyncStorage.setItem('@storage_Key', value)
            } catch (e) {
              // saving error
            }
          }


    storeData(res.data.acesssToken)

      history.push('/dashboard');
    } else {
      setRes(res.errors[0]);
    }
  };

  console.log(isLoading, 'isloading')

  return (
    <View style={styles.container}>
      {isLoading ? (
          <View style={styles.loadingContainer}> 
          <ActivityIndicator animating={true} color={Colors.red800} />
          </View>
      ) : null}
      <ImageBackground
        source={require('../assets/Login.png')}
        resizeMode="cover"
        style={styles.imageBg}>
        <Image source={require('../assets/logo.png')} style={styles.image} />

        <Text style={styles.text}> {LANG_PTBR.LOGIN.HEADER} </Text>
        <Text style={{color: 'red', fontSize: 14}}> {userRes} </Text>
        <TextInput
          label="Email"
          value={email}
          mode="flat"
          onChangeText={em => setEmail(em)}
          theme={inputTheme}
          style={userRes ? styles.formError : styles.form}
        />

        <TextInput
          label="Senha"
          value={password}
          mode="flat"
          onChangeText={pass => setPassword(pass)}
          theme={inputTheme}
          secureTextEntry={true}
          style={userRes ? styles.formError : styles.form}
        />
        <Button
          mode="contained"
          style={styles.button}
          theme={inputTheme}
          onPress={() => fetchUser()}>
          ENTRAR
        </Button>
      </ImageBackground>
    </View>
  );
};
const inputTheme = {colors: {primary: 'green'}};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: '90%',
    height: 40,
    fontSize: 20,
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    flex: 1,
  },
  form: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignSelf: 'center',
    borderColor: 'white',
    marginTop: 20,
  },
  formError: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignSelf: 'center',
    borderColor: 'red',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: -110,
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});
