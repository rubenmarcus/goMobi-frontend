import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import HomeComponent from './home';
import RedeemPage from '../pages/redeeem';
import TransferPage from '../pages/transfer';
import TransactionsPage from '../pages/transactions';

const NavBarComponent = () => {
  let HomeSet = 1;

  const HomeRoute = () => {
    return <HomeComponent checkIdx={HomeSet} />;
  };

  const TransferRoute = () => <TransferPage />;

  const RedeemRoute = () => <RedeemPage />;

  const MenuRoute = () => <TransactionsPage />;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'dashboard', title: 'Home', icon: 'home'},
    {key: 'transfer', title: 'Transferir', icon: 'transfer-right'},
    {key: 'menu', title: 'Histórico', icon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: HomeRoute,
    transfer: TransferRoute,
    menu: MenuRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor: '#F5F5F5'}}
    />
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#f4f4f4',
  },
});

export default NavBarComponent;
