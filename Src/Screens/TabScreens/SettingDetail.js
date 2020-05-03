import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

function SettingDetails({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: '700', paddingVertical: 30 }}>Setting Details Screen</Text>
            <Button
                    title="go back to Setting"
                    onPress={() => navigation.goBack()}
                />
        </View>
    );
}

export default SettingDetails;