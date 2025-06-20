import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import { useState } from 'react';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  type FormErrors = {
    userName?: string;
    password?: string;
  };

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    let formErrors: FormErrors = {};

    if (!userName) formErrors.userName = 'username is required';
    if (!Password) formErrors.password = 'Password is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitted ', userName, Password);
      setUserName('');
      setPassword('');
      setErrors({});
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      // keyboardVerticalOffset={100} ios
      style={styles.continer}
    >
      <View style={styles.form}>
        <Text style={styles.label}>UserName</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Username"
          placeholderTextColor={'#999'}
          value={userName}
          onChangeText={setUserName}
        />
        {errors.userName && (
          <Text style={styles.errorText}>{errors.userName}</Text>
        )}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor={'#999'}
          // secureTextEntry
          value={Password}
          onChangeText={setPassword}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
        <Button title="SUBMIT" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 13,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
