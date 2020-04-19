import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
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
        CARREGANDO
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

export default function ConfirmOrder({ navigation, route }) {
  const { id: delivery_id } = route.params.order;
  const [fileData, setFileData] = useState(new FormData());

  async function takePicture(camera) {
    try {
      setFileData(new FormData());
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);

      const timeStamp = new Date();
      const formData = new FormData();

      formData.append('file', {
        uri: data.uri,
        type: 'image/jpg',
        name: `${data.uri}_${timeStamp}.jpg`,
      });

      if (formData._parts === []) {
        formData.append('file', {
          uri: data.uri,
          type: 'image/jpg',
          name: `${data.uri}_${timeStamp}.jpg`,
        });
      }

      setFileData(formData);
    } catch (err) {
      if (
        err.message === 'Camera capture failed. Camera is already capturing.'
      ) {
        Alert.alert(
          'Houve um erro',
          'Não clique muito rápido no botão de captura!'
        );
      }
    }
  }

  async function handleSubmit() {
    if (fileData._parts === []) return;

    try {
      const responseFiles = await api.post('/files', fileData);
      setFileData(new FormData());

      const { id: signature_id } = responseFiles.data;

      const response = await api.put('/deliveryman', {
        signature_id,
        delivery_id,
        end_date: new Date(),
      });

      console.tron.warn(response.data);

      Alert.alert('Parabéns', 'Entrega entregue com sucesso!');
      navigation.navigate('Orders', { signature_id });
    } catch (err) {}
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

        <SendButton onPress={handleSubmit}>
          <Text
            style={{
              fontSize: 14,
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            CONFIRMAR ENTREGA
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

ConfirmOrder.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func,
  }).isRequired,
  route: propTypes.shape({
    params: propTypes.shape({
      order: propTypes.shape({
        id: propTypes.number,
      }),
    }),
  }).isRequired,
};

Trigger.propTypes = {
  takePicture: propTypes.func.isRequired,
  camera: propTypes.shape({}).isRequired,
};
