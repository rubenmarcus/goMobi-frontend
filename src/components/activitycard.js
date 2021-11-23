import * as React from 'react';
import {Button, Card} from 'react-native-paper';
import {StyleSheet, View, Text} from 'react-native';

export const ActivityCard = ({data}) => {

  return (
    <View style={{
      background: 'transparent',
      position: 'relative',
      width: 390

    }}>
      <Card style={ data.type === 'débito' ? styles.cardDebt : styles.cardAct}>
        <Card.Content>
          <Button
            icon="cash-multiple"
            style={styles.cardIcon}
            labelStyle={{fontSize: 45}}
            theme={iconTheme}></Button>
          <Text style={styles.cardTitle}>
        
           R$ {data.value }
          </Text>

          {data.partner ? (
            <View style={styles.cardPrice}>
              <Button
                icon="account"
                style={styles.cardSmallIcon}
                labelStyle={{fontSize: 25}}
                theme={iconTheme}></Button>

              <Text>{data.partner}</Text>
            </View>
          ) : null}
          <View style={styles.cardKm}>
            <Button
              icon={
                data.type === 'débito' ? 'currency-usd-off' : 'currency-usd'
              }
              style={styles.cardSmallMarker}
              labelStyle={{fontSize: 20}}
              theme={iconTheme}>
              {' '}
            </Button>

            <Text> {data.type} </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const iconTheme = {colors: {primary: 'black'}, width: 40};
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
  header: {
    flex: 1,
    position: 'relative',
    height: 180,
    backgroundColor: '#35DC81',
  },
  buttonBack: {
    position: 'absolute',
    width: '90%',
    height: 40,
    fontSize: 20,
    alignSelf: 'center',
    bottom: 30,
  },
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
  cardDebt: {
    backgroundColor: '#fab4c7',
    width: '90%',
    alignSelf: 'center',
    position: 'relative',
    height: 100,
    marginBottom: 20,
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
