import * as React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

function Dummy1({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <Header
                leftComponent={{ icon: 'arrowleft', type: 'antdesign',  color: '#fff', onPress: navigation.goBack }}
                centerComponent={{ text: 'Dummy 1', style: { color: '#fff' } }}
            />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 26, fontWeight: '700', paddingVertical: 30 }}>Dummy1 Screen</Text>
            </View>
        </View>
    );
}

export default Dummy1;