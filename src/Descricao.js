import React from "react";
import { Page, Header, HeaderText, Picture, Image, Description, Name, H1, P, Text } from "./Styles";

export default () => {

    return (
        <Page>
            <Header>
                <HeaderText>MatchFAE</HeaderText>
            </Header>
            <Picture>
                <Image source={require("../assets/profile.png")} />
            </Picture>
            <Description>
                <Name>Nome, 21</Name>
                <H1>Descrição</H1>
                <P>
                    Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis! Mé faiz elementum girarzis, nisi eros vermeio. Viva Forevis aptent taciti sociosqu ad litora torquent. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
                </P>
                <P>
                    Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Manduma pindureta quium dia nois paga.
                </P>
                <P>
                    Suco de cevadiss deixa as pessoas mais interessantis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Paisis, filhis, espiritis santis. Quem num gosta di mé, boa gentis num é.
                </P>
                <P>
                    Atirei o pau no gatis, per gatis num morreus. In elementis mé pra quem é amistosis quis leo. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.
                </P>

                <H1>Informação</H1>
                <Text>Estado civil: Solteiro</Text>
                <Text>Sexo: Masculino</Text>
            </Description>
        </Page>
    );
}