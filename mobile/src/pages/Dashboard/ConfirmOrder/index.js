import React from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RNCamera } from 'react-native-camera';

import Background from '../../../components/layouts/Signed';

import { CameraContainer, SendButton } from './styles';

function PendingView() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Waiting</Text>
    </View>
  );
}

function Trigger({ takePicture, camera }) {
  return (
    <View
      style={{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        style={{
          flex: 0,
          backgroundColor: '#fff',
          borderRadius: 5,
          padding: 15,
          paddingHorizontal: 20,
          alignSelf: 'center',
          margin: 20,
        }}
        onPress={() => takePicture(camera)}
      >
        <Text
          style={{
            fontSize: 14,
            color: '#f4f',
            fontWeight: 'bold',
          }}
        >
          TIRAR FOTO
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function ConfirmOrder() {
  async function takePicture(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    console.tron.warn(data.uri);
  }

  return (
    <Background>
      <CameraContainer>
        <RNCamera
          type={RNCamera.Constants.Type.back}
          autoFocus
          flashMode="off"
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) =>
            status !== 'READY' ? (
              <PendingView />
            ) : (
              <Trigger
                takePicture={() => {
                  takePicture(camera);
                }}
                camera={camera}
              />
            )
          }
        </RNCamera>

        <SendButton onPress={() => {}}>
          <Text
            style={{
              fontSize: 14,
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            ENVIAR FOTO
          </Text>
        </SendButton>
      </CameraContainer>
    </Background>
  );
}

ConfirmOrder.navigationOptions = ({ navigation }) => {
  return {
    headerShown: true,
    headerTintColor: '#fff',
    headerTitle: 'Confirmar entrega',
    headerTransparent: true,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}
        style={{
          padding: 12,
        }}
      >
        <View>
          <Icon name="chevron-left" size={30} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
  };
};
