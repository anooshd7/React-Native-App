/* eslint-disable prettier/prettier */
import * as React from 'react';
import {useState} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    Pressable,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
  } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
//import { useNavigation } from '@react-navigation/native';
import { DocumentDirectoryPath, writeFile } from 'react-native-fs';

type SecondScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'secondScreen'
>;

type Props = {
    navigation : SecondScreenProp;
};

const SecondScreen = ({navigation}: Props) => {
    const [fileText,setFileText] = useState('');
    const saveFile = async() => {
        const path = `${DocumentDirectoryPath}/${Date.now()}.txt`;

        try {
            await writeFile(path, fileText, 'utf8');
            Alert.alert('File saved', 'File has been successfully saved to Local Storage', [{ text: 'OK' }]);
            console.log(path);
          } catch (e) {
            console.log('error', e);
          }
    };

    return (

        <KeyboardAvoidingView

            behavior="position"
            enabled={true}
            style={styles.flex}
            >

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.inner}>
            <View style = {styles.toptext}>

            <TouchableOpacity
            style = {styles.topButton}
            onPress={() =>
                navigation.navigate('firstScreen')
            }
            >
            <Text style={styles.color}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                Enter A Name... Or Don't
            </Text>

            <Text style={styles.text2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium, ipsum sed eleifend cursus, lacus eros hendrerit ligula, nec iaculis nunc quam quis libero. Integer at pulvinar lectus, ac auctor tortor. Sed at aliquam arcu. Etiam posuere vitae justo non consequat. Praesent rutrum sapien eget orci accumsan hendrerit
            </Text>
            </View>

            <Pressable style={styles.click}>
            <Text onPress ={() => Alert.alert('Text was clicked')}
            style = {styles.text3}>
            Learn more about how numberless works
            </Text>
            </Pressable>

            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="grey"
                value={fileText}
                onChangeText={setFileText}
            />
            </View>

            <TouchableOpacity
            style = {styles.bottomButton}
            onPress={() => {
                saveFile();
                navigation.navigate('thirdScreen');
            }

            }>
            <Text>Next</Text>
            </TouchableOpacity>

            </View>

            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
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
        color:'black',

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
      flex: {
        flex: 1,
      },
      color: {
        color:'black',
      },

});

export default SecondScreen;

