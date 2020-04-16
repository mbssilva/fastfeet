import React, { useState } from 'react';
import { StatusBar, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import propTypes from 'prop-types';

import LoginLayout from '../../components/layouts/Login';

import { LoginRequest } from '../../store/modules/login/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.login.loading);
  const [id, setId] = useState('');

  function handleSubmit() {
    dispatch(LoginRequest(id));
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <LoginLayout>
        <Container>
          {/* <Image source={logo} /> */}

          <Form>
            <FormInput
              keyboardType="numeric"
              placeholder="Informe seu ID de cadastro"
              returnKeyType="send"
              value={id}
              onChangeText={(text) => {
                setId(text);
              }}
            />

            <SubmitButton loading={loading} onPress={handleSubmit}>
              Entrar no sistema
            </SubmitButton>
          </Form>
        </Container>
      </LoginLayout>
    </>
  );
}

// SignIn.propTypes = {
//   navigation: propTypes.shape({
//     navigate: propTypes.func,
//   }).isRequired,
// };
