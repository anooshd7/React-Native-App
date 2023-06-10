/* eslint-disable prettier/prettier */

import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    PermissionsAndroid,
    Alert,
} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';
import { CameraScreen } from 'react-native-camera-kit';


const ThirdScreen = () => {
    const [qrValue, setqrValue] = useState('');
    const [openScanner, setOpenScanner] = useState(false);

    const OnFinishingScan = (qr: string) => {
        setqrValue(qr);
        setOpenScanner(false);
    };

    const OnOpeningScanner = () => {
        async function requestCameraPermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED){
                    setqrValue('');
                    setOpenScanner(true);
                }
                else {
                    Alert.alert('Camera permission denied!!');
                }
            } catch (err) {
                Alert.alert('Camera Permission error');
                console.warn(err);
            }

        }
        requestCameraPermission();
    };

    useEffect(() => {
      setOpenScanner(true);
  },[]);


    return (
        <View style={styles.flex}>



      {openScanner ? (
        <View style={styles.flex}>
          <CameraScreen
            showFrame={false}
            scanBarcode={true}
            onReadCode={(event) =>
              OnFinishingScan(event.nativeEvent.codeStringValue)
            }
          />
        </View>
      ) : (
        <View >
          <Text style={styles.text2}>
            {qrValue ? 'Scanned Result: ' + qrValue : ''}
          </Text>

          <TouchableHighlight
            onPress={OnOpeningScanner}
            style={styles.bottomButton}>
            <Text>
              Open QR Scanner
            </Text>
          </TouchableHighlight>
        </View>
      )}
    </View>

    );
};

const styles = StyleSheet.create({
    flex: {
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

export default ThirdScreen;

