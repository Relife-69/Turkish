import React from 'react'
import { MainContainer, RightContainer, Pic, LeftContainer, TextContainer, Heading, Text, InputContainer, Input, Return, ReturnLink } from './StyledForget'
import Button from '../../Button/Button'
import Pice from '../../Images/Forget.png'

const Forget = () => {
    return (
        <MainContainer>
            <LeftContainer>
                <TextContainer>
                    <Heading>Şifreni mi unuttun?</Heading>
                    <Text>Lütfen E-posta Adresinizi aşağıya girin:</Text>
                </TextContainer>
                <InputContainer>
                    <Input
                        type="email"
                        placeholder='E-posta Adresi'
                        name="email"
                    />
                    <Button
                        btntype="Main"
                        cb
                        text="Şifreyi yenile"
                    />
                    <Return>
                        <ReturnLink>
                        Oturum Açmaya Geri Dön
                        </ReturnLink>
                    </Return>
                </InputContainer>
            </LeftContainer>
            <RightContainer>
                <Pic src={Pice}></Pic>
            </RightContainer>
        </MainContainer>
    )
}

export default Forget
