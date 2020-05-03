import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';

function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: navigation.openDrawer }}
                centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 26, fontWeight: '700', paddingVertical: 30 }}>Profile Screen</Text>
                <Button
                    title="Profile Details"
                    onPress={() => navigation.navigate('ProfileDetails')}
                />
            </View>
        </View>
    );
}

export default Profile;