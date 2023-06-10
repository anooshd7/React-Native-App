/* eslint-disable prettier/prettier */
import * as React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';

 //const Stack = createNativeStackNavigator();

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';


type firstScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'firstScreen'
>;

type Props = {
    navigation : firstScreenProp;
};



const FirstScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text style={styles.text}>First Page</Text>
      <TouchableOpacity
      style={styles.bottomButton}
      onPress={() =>
        navigation.navigate('secondScreen')

      }>
      <Text>Next</Text>
      </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    screen: {
        flex:1,
    },
    bottomButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 10,
        paddingLeft: 35,
        marginTop:100,
        marginLeft:240,
        width:100,
    },
    text: {
        color:'#007BFF',
        textAlign:'center',
        fontSize:21,
        paddingTop:40,
        fontFamily:'sans-serif-medium',
        // marginHorizontal:200,
    },
    text2: {
        color:'black',
        //paddingLeft:15,
        //paddingRight:10,
        paddingTop:30,
        textAlign:'center',

        // marginHorizontal:200,
    },
    text3: {
        color:'#007BFF',
        //paddingLeft:45,
        //paddingRight:10,
        paddingTop:25,
        textDecorationLine:'underline',
        textAlign:'center',

        // marginHorizontal:200,
    },
    input: {
        borderColor: '#CCCCCC',
        borderWidth:1,
        borderRadius:5,
        height: 50,
        fontSize: 25,
        textAlign:'center',

    },
    inputContainer: {
        paddingTop:50,
        paddingLeft:50,
        paddingRight:50,
    },
    toptext: {
        paddingTop:5,

    },
    click: {
        paddingTop:1,
    },
    inner: {
        padding: 5,
        //flex: 1,
        justifyContent:'space-around',
      },
      topButton: {
        borderWidth: 1,
        borderColor: '#DEDEDE',
        backgroundColor: '#DEDEDE',
        padding: 10,
        textAlign:'center',
        marginTop:10,
        marginLeft:10,
        marginRight:250,
        width:55,
        height:40,
      },
});

export default FirstScreen;

