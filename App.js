import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {  ref, set } from "firebase/database";
import { db } from './components/config';

export default function App() {
  const [username, setName ] = useState('');
  const [username1, setName1 ] = useState('');
  const [email, setEmail ] = useState('');

  const handleCreate = () => {
    // alert('Mywebtuts.com');
    set(ref(db, 'users/' + username), {
      username: username,
      username1: username1,
      email: email,
    })
    .then(() => {
      // data save success
      alert('data updated')
    }).catch((error) => {
      // write fail
      alert(error);
    });
  }

  

  return (
    <View style={styles.container}>
      <Text>Firebase CRUD!</Text>
      <TextInput  style={styles.usertext} value={username} onChangeText={(username) => (setName(username))} placeholder='User'></TextInput>
      <TextInput  style={styles.usertext} value={username1} onChangeText={(username1) => (setName1(username1))} placeholder='User1'></TextInput>
      <TextInput value={email} onChangeText={(email) => (setEmail(email))} placeholder='Email'></TextInput>
      <TouchableOpacity>
        <Button  onPress={handleCreate } title="Submit" color="blue"/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  usertext: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
