import styled from "styled-components";

export default function Character(props) {
const { dataCharacter } = props;
const { Nombre, Historia, Imagen, Ocupacion } = dataCharacter;

    return (
        <ContentCharacter>
            <Title>{Nombre}</Title>
                <ContainerImage>
                    <Image src={Imagen} alt={Nombre} />
                </ContainerImage>
                <History>{Ocupacion}</History>
        </ContentCharacter>
    );
}

const ContentCharacter = styled.div `
    padding: 20px;
    border: 1px solid  #2a9d8f;
    border-radius: 20px;
    width: 300px;
    text-align: center;
    margin: 10px;

    &:hover {
        filter: brightness(40%);
    }
`;

const Title = styled.h2`
    color: #264653;
    height: 46px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const ContainerImage = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 130px;
    height: auto;
`;

const History = styled.h4`
    color: #2a9d8f;
    height: 100px;
`;