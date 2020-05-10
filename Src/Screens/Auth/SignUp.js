import React, { Component } from 'react'
import {
    Text, ScrollView, View, TextInput, TouchableOpacity,
    StyleSheet, KeyboardAvoidingView, Image
} from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Icon, Input, CheckBox } from 'react-native-elements'
import { Colors } from '../../constants/Colors'
import { AuthContext } from '../../constants/AuthContext';



class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {

            name: '',
            email: '',
            password: '',
            phone_number: '',
            isPassSame: true,
            success: {
                name: true,
                email: true,
                password: true,
                phone_number: true,
            },
            isLoading: false,
        }
    }

    static contextType = AuthContext;

    onSignUp = async () => {
        let contextValue = this.context;

        const { name, email, phone_number, password, success } = this.state

        if (name == '' || email == '' || phone_number == '' || password == '') {
            this.setState({
                success: {
                    ...success,
                    name: name != "" ? true : false,
                    email: email != "" ? true : false,
                    password: password != "" ? true : false,
                    phone_number: phone_number != "" ? true : false,
                }
            });
        } else {
            /**@API_Calling_here */
            await contextValue.updateAuth()

            this.props.navigation.navigate("App")


        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1,}} behavior={Platform.OS == "ios" ? "padding" : null}>
                <View style={{  flex: 1, backgroundColor: '#fff' }}>
                    <ScrollView>
                        <View style={{ padding: 30 }}>
                            <View style={{ marginTop: hp(3), alignSelf: 'center' }}>
                                <Image
                                    source={{ uri: 'https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png' }}
                                    style={{ height: hp('16%'), width: wp('35%') }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View >
                                <Text style={styles.headline} >
                                    Sign up
                                </Text>
                            </View>

                            <View style={styles.textBoxStyle}>
                                <Icon
                                    iconStyle={{ justifyContent: 'center', alignItems: 'center', padding: 9 }}
                                    name='person'
                                    //   type='feather'
                                    color={Colors.baseTextColor}
                                />

                                <TextInput
                                    style={styles.rectangle3}
                                    placeholder='Name'
                                    placeholderTextColor={(this.state.success.name) ? null : 'red'}
                                    onChangeText={(text) => { this.setState({ name: text }) }}
                                />
                            </View>

                            <View style={styles.textBoxStyle}>

                                <Icon
                                    iconStyle={{ justifyContent: 'center', alignItems: 'center', padding: 9 }}
                                    name='mail'
                                    //   type='feather'
                                    color={Colors.baseTextColor}

                                />

                                <TextInput
                                    style={styles.rectangle3}
                                    placeholder='Email'
                                    placeholderTextColor={(this.state.success.email) ? null : 'red'}
                                    onChangeText={(text) => { this.setState({ email: text }) }}
                                />
                            </View>
                            <View style={styles.textBoxStyle}>

                                <Icon
                                    iconStyle={{ justifyContent: 'center', alignItems: 'center', padding: 9 }}
                                    name='smartphone'
                                    type='feather'
                                    color={Colors.baseTextColor}
                                />
                                <TextInput
                                    style={[styles.rectangle3, { width: wp('60%') }]}
                                    placeholder='Phone Number'
                                    placeholderTextColor={(this.state.success.phone_number) ? null : 'red'}
                                    keyboardType='numeric'
                                    onChangeText={(text) => { this.setState({ phone_number: text }) }}
                                />
                            </View>


                            <View style={styles.textBoxStyle}>
                                <Icon
                                    iconStyle={{ justifyContent: 'center', alignItems: 'center', padding: 9 }}
                                    name='lock'
                                    type='evilicon'
                                    color={Colors.baseTextColor}

                                />
                                <TextInput style={styles.rectangle3}
                                    placeholder='Password'
                                    placeholderTextColor={(this.state.success.password) ? null : 'red'}
                                    onChangeText={(text) => { this.setState({ password: text }) }}
                                    secureTextEntry={true} />
                            </View>

                            <View style={{ paddingTop: hp(3) }}>
                                <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                                    <TouchableOpacity
                                        style={[styles.rectangle]}
                                        onPress={() => { this.setState({ disabled: true }, () => this.onSignUp()) }}
                                    >
                                        <Text style={{ color: '#fff', fontWeight: '700' }} >
                                            Sign Up
                                        </Text>
                                    </TouchableOpacity>
                                </View >

                                <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={styles.alreadyHave} >
                                        Have an Account?
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('Login')}
                                    >
                                        <Text style={{ color: Colors.baseTextColor, fontWeight: 'bold' }}>
                                            Sign In</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
  
    rectangle: {
        width: wp('90%'),
        height: 48,
        shadowColor: 'rgba(239, 54, 81, 0.35)',
        shadowOffset: { width: 4, height: 0 },
        shadowRadius: 8,
        borderRadius: 25,
        backgroundColor: Colors.baseColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBoxStyle: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        marginBottom: 10,
        borderBottomColor: '#EFEFEF'

    },
    headline: {
        color: Colors.baseTextColor,
        fontSize: 24,
        fontWeight: '700',
        paddingVertical: 30,
        alignSelf: 'center'
    },

    rectangle3: {
        width: wp('70%'),
        height: 40,
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: { width: 1, height: 0 },
        shadowRadius: 8,
        borderRadius: 4,
        color: '#000',
    },

    alreadyHave: {
        height: 20,
        color: Colors.baseTextColor,
        fontSize: 14,
        lineHeight: 20,
    },

})
export default Signup
