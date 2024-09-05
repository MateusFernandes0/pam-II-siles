import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';



export default function Button(props) {
  const { onPress, title = 'Save' } = props;
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const PlaceholderImage = require('../assets/images/banco-inter-logo-0-1-2048x2048.png');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={PlaceholderImage} 
          style={styles.logo}
        />
        <View style={styles.helpIcon}>
</View>
          <Text style={styles.helpText}>?</Text>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.circle}>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.name}>Usuario</Text>
          <Text style={styles.cpf}>***.***.***-**</Text>
        </View>
          <Text style={styles.changeButton}>Trocar</Text>
      </View>
      <View style={styles.passwordContainer}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordInputWrapper}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <Link style={styles.loginButton} href="..app/inde2.tsx">
      <Pressable style={styles.loginButton} onPress={onPress}>
        <Text style={styles.loginButtonText}>Entrar</Text>
        </Pressable>
        </Link>
        <Text style={styles.forgotPassword}>Não sei minha senha</Text>
        <Text style={styles.fingerprintText}>Entre utilizando sua impressão digital</Text>
      <View style={styles.bottomButtons}>
          <Text style={styles.bottomButtonText}>iSafe</Text>
          <Text style={styles.bottomButtonText}>Trocar ou abrir conta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    width: 150,
    height: 40,
    marginBottom: 20,
  },
  helpIcon: {
    justifyContent: 'center',
    left: '185%',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF6F00',
  },
  helpText: {
    color: '#00000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    justifyContent: 'space-between',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6F00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontSize: 24,
    color: '#fff',
  },
  userDetails: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cpf: {
    fontSize: 14,
    color: '#888',
  },
  changeButton: {
    color: '#FF6F00',
    fontWeight: 'bold',
  },
  passwordContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  loginButton: {
    backgroundColor: '#FF6F00',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems:'center',
  },
  forgotPassword: {
    color: '#FF6F00',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  fingerprintLogin: {
    marginBottom: 60,
  },
  fingerprintText: {
    fontSize: 16,
    color: '#FF6F00',
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  bottomButtonText: {
    fontSize: 16,
    color: '#FF6F00',
  },
});
