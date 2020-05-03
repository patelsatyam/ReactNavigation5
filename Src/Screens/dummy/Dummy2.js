import * as React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

function Dummy2({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <Header
                leftComponent={{ icon: 'arrowleft', type: 'antdesign',  color: '#fff', onPress: navigation.goBack }}
                centerComponent={{ text: 'Dummy2', style: { color: '#fff' } }}
            />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 26, fontWeight: '700', paddingVertical: 30 }}>Dummy2 Screen</Text>
              
            </View>
        </View>
    );
}

export default Dummy2;