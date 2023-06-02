import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function ContactPage({navigation}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  const handleSubmit = () => {
    // Logique pour envoyer le message de contact
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Réinitialiser les champs
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactez-nous</Text>
      <Text>Votre nom complet :</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={handleNameChange}
      />
      <Text>Votre email :</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <Text>Envoyez-nous un message ici :</Text>
      <TextInput
        style={styles.messageInput}
        placeholder="Message"
        value={message}
        onChangeText={handleMessageChange}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Envoyer" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  messageInput: {
    width: '100%',
    height: 120,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingTop: 8,
    textAlignVertical: 'top',
  },
});