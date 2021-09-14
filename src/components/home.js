import * as React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, View } from "react-native";
import UserHeaderComponent from './userHeader';



const HomeComponent = () => {

  return (
    <View style={{ backgroundColor: "#fff", flex: 1}} >
       <UserHeaderComponent />
    </View>
  );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor:'#f4f4f4'
    },

});

export default HomeComponent;