import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet, View } from "react-native";
import HomeComponent from './home';
import { useHistory } from "react-router-native";
import { PartnersPage } from '../pages/partners';





const NavBarComponent = () => {

let HomeSet = 1;

// const checkIndex = () => {
//   if(index == 0) {
//     HomeSet = 0;
//   }

//   setIndex
// }
  
const HomeRoute = () => { return <HomeComponent checkIdx={HomeSet} />};

const TransferRoute = () => <Text>Transferir</Text>;

const PartnerRoute = () => <PartnersPage />;

const RedeemRoute = () => <Text>Resgatar</Text>;

const MenuRoute = () => <Text>Menu Route</Text>;


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'dashboard', title: 'Home', icon: 'home' },
    { key: 'transfer', title: 'Transferir', icon: 'transfer-right' },
    { key: 'redeem', title: 'Resgatar', icon: 'currency-usd' },
    { key: 'menu', title: 'Menu', icon: 'menu' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: HomeRoute,
    transfer: TransferRoute,
    redeem:RedeemRoute,
    menu: MenuRoute,
    partners: PartnerRoute
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#F5F5F5' }}
    />
  );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor:'#f4f4f4'
    },

});

export default NavBarComponent;