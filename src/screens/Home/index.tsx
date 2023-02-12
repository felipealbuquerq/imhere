import React, { useState } from 'react';
import { Alert, FlatList, Linking, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Atenção', `Já existe um participante com o nome ${participantName}`);
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Confirmação', `Deseja mesmo remover o participante ${name}?`, [
      {
        text: 'Não',
        onPress: () => {},
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      }
    ]);
  }

  function handleInviteParticipant(number: string) {
    Linking.openURL(`whatsapp://send?text=Olá, bora participar da Semana do Thinker? Olha ai um spoiler: https://primeirasemanadothinker.web.app/&phone=${number}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Semana do Thinker</Text>
      <Text style={styles.eventDate}>07 de Setembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="WhatsApp do Convidado"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
            onShare={() => handleInviteParticipant(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <Text style={styles.listEmptyText}>
              Não convidou ninguém para o evento ainda?
            </Text>
            <Text style={styles.listEmptyText}>
              Adicione participantes a sua lista de convite.
            </Text>
          </>
        )}
      />
    </View>
  );
}
