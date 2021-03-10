import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { CallWrapper, Header, HeaderText } from './styles'
import { useIsFocused, useFocusEffect } from "@react-navigation/native";

const Call: React.FC = () => {
  const [contactsToCall, setContactsToCall] = useState([])
  const isFocused = useIsFocused()

  const getSavedContacts = useCallback(async () => {
    try {
      const storageContacts = await AsyncStorage.getItem('savedContacts')
      const parsedStorageData = storageContacts !== null ? JSON.parse(storageContacts) : null;
      console.log(parsedStorageData)
      setContactsToCall(parsedStorageData)
    } catch (e) {
      console.error(e)
    }
  }, []);


  useEffect(() => {
    getSavedContacts()
  }, [isFocused])

  return (
    <CallWrapper>
      <Header>
        <HeaderText>Ligar para seus contatos</HeaderText>
      </Header>
      {contactsToCall?.map((item: any, index) => {
        return (
          <Text key={`${item.recordID}_${index}`}>{item.givenName}</Text>
        )
      })}
    </CallWrapper>
  )
}

export default Call
