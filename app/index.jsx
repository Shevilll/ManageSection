import { View, Text, Image } from "react-native";
import * as React from "react";
import { Redirect } from "expo-router";

const App = () => {
    return (
        <>
            <Redirect href="/inventory" />
        </>
    );
};

export default App;
