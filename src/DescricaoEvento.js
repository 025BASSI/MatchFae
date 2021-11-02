import React from "react";
import { Page, Header, HeaderText, Picture, Image, Description, Name, H1, P, Text, Button, ButtonText, ButtonContainer, Container, Icon } from "./Styles";

export default (props) => {
    let goBack = props.navigation.goBack;

    return (
        <Page>
            <Header>
                <HeaderText>
                    <Button onPress={() => goBack()}>
                        <Icon name="chevron-left" size={35} color="#FEFEFE" />
                    </Button>
                </HeaderText>
                <HeaderText>MatchFAE</HeaderText>
                <HeaderText>&nbsp;</HeaderText>
            </Header>
            <Container bgcolor="#C4C4C4">
                <Picture>
                    <Image source={require("../assets/eventos.png")} />
                </Picture>
                <Description>
                    <Name>Evento 1</Name>

                    <H1>Descrição</H1>
                    <P>Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis! Mé faiz elementum girarzis, nisi eros vermeio. Viva Forevis aptent taciti sociosqu ad litora torquent. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.</P>
                    <P>Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Manduma pindureta quium dia nois paga.</P>
                    <P>Suco de cevadiss deixa as pessoas mais interessantis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Paisis, filhis, espiritis santis. Quem num gosta di mé, boa gentis num é.</P>
                    <P>Atirei o pau no gatis, per gatis num morreus. In elementis mé pra quem é amistosis quis leo. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</P>

                    <H1>Informação</H1>
                    <Text>Organizador do evento: Nome do organizador</Text>
                    <Text>Endereço: Rua das Flores, 123</Text>
                    <Text>Data do começo: 25/08/2021</Text>
                    <Text>Hora do começo: 19:25</Text>
                    <Text>Data do término: 25/08/2021</Text>
                    <P>Hora do término: 19:25</P>

                    <ButtonContainer>
                        <Button>
                            <ButtonText>Participar do evento</ButtonText>
                        </Button>
                    </ButtonContainer>
                </Description>
            </Container>
        </Page>
    );
}