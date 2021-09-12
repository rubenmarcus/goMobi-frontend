import { NativeRouter, Route } from "react-router-native";
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { PartnersPage } from "../pages/partners";
import { ReedeemPage } from "../pages/redeeem";
import { TransactionsPage } from "../pages/transactions";
import React from 'react';
import { View } from "react-native";

const AppRoutes = () => {
   return( 
   
   <NativeRouter>
        
            <Route exact path="/" component={LoginPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/partners" component={PartnersPage} />
            <Route path="/redeem" component={ReedeemPage} />
            <Route path="/transactions" component={TransactionsPage} />
    </NativeRouter>
   );
}

export default AppRoutes;