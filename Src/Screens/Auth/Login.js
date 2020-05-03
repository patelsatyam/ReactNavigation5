import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Icon, Input } from 'react-native-elements';
import { Colors } from '../../constants/Colors';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone_number:'',
      password: '',

      isLoading: false,
      success: {
        phone_number: true,
        password: true,
      }
    };
  }


  loginHandler = async() => {

    const { phone_number, password, success } = this.state;
    
    if(phone_number == '' || password == '' ){
     
      this.setState({
        success: {
          ...success,
          password: (password == '') ? false : true,
          phone_number: (phone_number == '') ? false : true 
        }
      })
    } else {
     
        /**@API_Calling_here */

    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView>
            <View>
              <View style={{ marginTop: hp(8), alignSelf: 'center' }}>
                <Image
                  source={{ uri: 'https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png' }}
                  style={{ height: hp('16%'), width: wp('35%') }}
                  resizeMode="contain"
                />
              </View>
              <View
                style={styles.loginHeadingView}>
                <Text style={styles.headline}>Login</Text>
              </View>
          
              <View
                style={styles.textInput}>
                <Icon
                  iconStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 9,
                  }}
                  name="smartphone"
                  type="feather"
                />

                <TextInput
                  style={styles.rectangle3}
                  placeholder="Phone Number"
                  placeholderTextColor={(this.state.success.phone_number) ? null : Colors.errorColor}
                  onChangeText={text => {
                    this.setState({ phone_number: text });
                  }}
                  value={this.state.phone_number}
                />
           
              </View>
              <View
                style={styles.textInput}>
                <Icon iconStyle={{ fontSize: 40 }} name="lock" type="evilicon" />
                <TextInput
                  style={styles.rectangle3}
                  placeholder="Password"
                  placeholderTextColor={(this.state.success.password)? null : Colors.errorColor}
                  onChangeText={text => {
                    this.setState({ password: text });
                  }}
                  value={this.state.password}
                  secureTextEntry={true}
                />
              </View>

              <View style={{ paddingTop: hp(8) }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    paddingTop: 30,
                  }}>
                  <TouchableOpacity
                    style={[styles.rectangle]}
                      onPress={ () => { this.emailValidate() }}
                    disabled={this.state.disabled}
                    >
                    <Text style={styles.login}>Login</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    paddingTop: 20,
                    flexDirection: 'row',
                    alignSelf: 'center',
                  }}>
                  <Text style={styles.alreadyHave}>Dont have an account?</Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text style={{ color: '#5c5c5c', fontWeight: '600' }}> Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
    alignSelf: 'center',
  },
  rectangle: {
    width: wp('90%'),
    height: 48,
    shadowColor: 'rgba(239, 54, 81, 0.35)',
    shadowOffset: { width: 4, height: 0 },
    shadowRadius: 8,
    borderRadius: 25,
    backgroundColor: Colors.baseColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    color: Colors.baseTextColor,
    fontSize: 24,
    fontWeight: '700',
    paddingVertical: 30,
  },
  rectangle3: {
    width: wp('70%'),
    height: 64,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 1, height: 0 },
    shadowRadius: 8,
    borderRadius: 4,
    color: Colors.baseTextColor,
  },
  login: {
    color: '#f5f5f5',
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
  },
 
  alreadyHave: {
    color: '#000',
    fontSize: 14,
  },
  textInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        alignSelf: 'center',
        width: wp('80'),
  },
  loginHeadingView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  }
});
export default Login;
