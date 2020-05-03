import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

function ProfileDetails({ navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: '700', paddingVertical: 30 }}>Profile Details Screen</Text>
            <Button
                    title="go back to Profile"
                    onPress={() => navigation.goBack()}
                />
        </View>
    );
}

export default ProfileDetails;