import React from 'react'
import { MainContainer, TextContainer, Heading, Description, Card, CardHeading, MenuContainer, Menu, List, CLink, CardHolder } from './StyledHF9'


const HF9 = () => {
    return (
        <MainContainer>
            <TextContainer>
                <Heading>Gayrimenkul almak için popüler şehirleri mi arıyorsunuz?</Heading>
                <Description>İşte tüm hareketli metropol şehirlerdeki evlerin, dairelerin, arsaların ve odaların bir listesi.</Description>
            </TextContainer>
            <CardHolder>
                <Card>
                    <CardHeading>Ana Sayfa</CardHeading>
                    <MenuContainer>
                        <Menu>
                            <List>
                                <CLink>İstanbul'da Satılık Daire</CLink>
                            </List>
                            <List>
                                <CLink>Ankara'da Satılık Daire</CLink>
                            </List>
                            <List>
                                <CLink> İzmir'de Satılık Daire</CLink>
                            </List>
                            <List>
                                <CLink>Bursa'da Satılık Daire</CLink>
                            </List>
                            <List>
                                <CLink>Adana'da Satılık Daire</CLink>
                            </List>
                            <List>
                                <CLink>Bodrum'da Satılık Daire</CLink>
                            </List>
                            <List>
                                <CLink>Samsun'da Satılık Daire</CLink>
                            </List>
                            <List>
                                <CLink>Kocaeli'de Satılık Daire</CLink>
                            </List>
                        </Menu>
                    </MenuContainer>
                </Card>
                <Card>
                    <CardHeading>Daireler </CardHeading>
                    <MenuContainer>
                        <Menu>
                            <List>
                                <CLink>İstanbul'da satılık daireler </CLink>
                            </List>
                            <List>
                                <CLink>Ankara'da satılık daireler </CLink>
                            </List>
                            <List>
                                <CLink>Antalya'da satılık daireler </CLink>
                            </List>
                            <List>
                                <CLink>Bursa'da satılık daireler </CLink>
                            </List>
                            <List>
                                <CLink>Adana'da satılık daireler </CLink>
                            </List>
                            <List>
                                <CLink>Bodrum'da satılık daireler </CLink>
                            </List>
                            <List>
                                <CLink>Samsun'da satılık daireler </CLink>
                            </List>
                            <List>
                                <CLink>Kocaeli'de Satılık Daireler </CLink>
                            </List>
                        </Menu>
                    </MenuContainer>
                </Card>
                <Card>
                    <CardHeading>Arsalar</CardHeading>
                    <MenuContainer>
                        <Menu>
                            <List>
                                <CLink>İstanbul'da satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Ankara'da satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Antalya'da satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Bursa'da satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Adana satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Bodrum satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Samsun satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Artvin satılık Arsalar</CLink>
                            </List>
                        </Menu>
                    </MenuContainer>
                </Card>
                <Card>
                    <CardHeading>Odalar</CardHeading>
                    <MenuContainer>
                        <Menu>
                            <List>
                                <CLink>İstanbul'da satılık Ofisler</CLink>
                            </List>
                            <List>
                                <CLink>Ankara'da satılık Ofisle</CLink>
                            </List>
                            <List>
                                <CLink>Antalya'da satılık Ofisle</CLink>
                            </List>
                            <List>
                                <CLink>Bursa'da satılık Ofisle</CLink>
                            </List>
                            <List>
                                <CLink>Adana satılık Ofisle</CLink>
                            </List>
                            <List>
                                <CLink>Bodrum satılık Ofisle</CLink>
                            </List>
                            <List>
                                <CLink>Samsun satılık Ofisle</CLink>
                            </List>
                            <List>
                                <CLink> Kocaeli satılık Ofisle</CLink>
                            </List>
                        </Menu>
                    </MenuContainer>
                </Card>
            </CardHolder>
        </MainContainer>
    )
}

export default HF9
