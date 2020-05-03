import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';

function Setting({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: navigation.openDrawer }}
                centerComponent={{ text: 'Setting', style: { color: '#fff' } }}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 26, fontWeight: '700', paddingVertical: 30 }}>Setting Screen</Text>
                <Button
                    title="Setting Details"
                    onPress={() => navigation.navigate('SettingDetails')}
                />
            </View>
        </View>
    );
}

export default Setting;