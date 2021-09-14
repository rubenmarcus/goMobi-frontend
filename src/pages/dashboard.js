import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import NavBarComponent from '../components/navbar';

export const DashboardPage = () => {
    return (
        <View style={styles.container}>
            <NavBarComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});