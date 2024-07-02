import React from 'react'
import { MainContainer, RightContainer ,Pic ,LeftContainer ,TextContainer , Heading , Text, InputContainer, Input} from './StyledPassword'
import Button from '../../../Button/Button'
import Pice from '../../../Images/Password.png'


const Password = () => {
  return (
    <MainContainer>
    <LeftContainer>
        <TextContainer>
            <Heading>Yeni Şifre Girilsin mi?</Heading>
            <Text>Lütfen yeni şifrenizi aşağıya girin:</Text>
        </TextContainer>
        <InputContainer>
            <Input
                type="password"
                placeholder='Yeni Şifre'
                name="password"
            />
            <Input
                type="confirm_password"
                placeholder='Şifreyi Onayla'
                name="confirm_password"
            />
        </InputContainer>
            <Button
                btntype="Main"
                cb
                text="Şifre güncelle"
            />
    </LeftContainer>
    <RightContainer>
        <Pic src={Pice}></Pic>
    </RightContainer>
</MainContainer>
  )
}

export default Password
