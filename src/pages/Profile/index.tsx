import React from 'react'
import { View } from 'react-native'
import { ProfileWrapper, Header, HeaderText } from './styles'

const Profile: React.FC = () => {
  return (
    <ProfileWrapper>
      <Header>
        <HeaderText>Meu perfil</HeaderText>
      </Header>
    </ProfileWrapper>
  )
}

export default Profile
