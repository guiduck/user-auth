import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';

const AuthScreen = (props) => {
  return;
  <KeyboardAvoidingView
    behaviour='padding'
    keyboardVerticalOffset={50}
    style={styles.screen}
  >
    <Card style={styles.authContainer}>
      <ScrollView>
        <Input
          id='email'
          label='E-Mail'
          keyboardType='email.address'
          required
          email
          autoCapitalize='none'
          errorMessage='Please enter a valid email address!'
          onValueChange={() => {}}
          initialValue=''
        />
        <Input
          id='password'
          label='Password'
          keyboardType='default'
          secureTextEntry
          required
          minLength={5}
          autoCapitalize='none'
          errorMessage='Please enter a valid password!'
          onValueChange={() => {}}
          initialValue=''
        />
      </ScrollView>
    </Card>
  </KeyboardAvoidingView>;
};

const styles = StyleSheet.create({});

export default AuthScreen;
