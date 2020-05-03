import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: navigation.openDrawer }}
                centerComponent={{ text: 'Home', style: { color: '#fff' } }}
            />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 26, fontWeight: '700', paddingVertical: 30 }}>Home Screen</Text>
                <Button
                    title="Home Details"
                    onPress={() => navigation.navigate('HomeDetails')}
                />
            </View>
        </View>
    );
}

export default Home;