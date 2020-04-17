import React from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RNCamera } from 'react-native-camera';

import api from '../../../services/api';

import Background from '../../../components/layouts/Signed';

import { CameraContainer, SendButton } from './styles';

function PendingView() {
  return (
    <View
      style={{
        padding: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 190,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 5,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        Waiting
      </Text>
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

    const formData = new FormData();
    const timeStamp = new Date();

    formData.append('file', {
      uri: data.uri,
      type: 'image/jpg',
      name: `${data.uri}_${timeStamp}.jpg`,
    });

    try {
      const response = await api.post('/files', formData);
      console.tron.warn(response);
    } catch (err) {
      console.tron.error(err);
    }
  }

  return (
    <Background>
      <CameraContainer>
        <RNCamera
          type={RNCamera.Constants.Type.back}
          autoFocus
          flashMode="off"
          androidCameraPermissionOptions={{
            title: 'Permissão para uso da câmera',
            message: 'O App precisa de sua permissão para usar sua câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          // androidRecordAudioPermissionOptions={{
          //   title: 'Permissão para gravação de áudio',
          //   message: 'O App precisa de sua permissão para gravar áudios',
          //   buttonPositive: 'Ok',
          //   buttonNegative: 'Cancel',
          // }}
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

Trigger.propTypes = {
  takePicture: propTypes.func.isRequired,
  camera: propTypes.shape({}).isRequired,
};
