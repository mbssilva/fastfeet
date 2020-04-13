import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
// import propTypes from 'prop-types';

import AuthLayout from '../../components/layouts/Auth';

import logo from '../../assets/logo@2x.png';

// import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function Login() {
  // const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [id, setId] = useState('');

  function handleSubmit() {
    // dispatch(signInRequest(email, password));
  }

  return (
    <AuthLayout>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
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
    </AuthLayout>
  );
}

// SignIn.propTypes = {
//   navigation: propTypes.shape({
//     navigate: propTypes.func,
//   }).isRequired,
// };
