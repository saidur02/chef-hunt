import { Container } from "react-bootstrap";

const MainSection = ({chf}) => {
    console.log(chf)
   
const {name} = chf;
    return (
        <Container>
           <h2>{name}</h2>
        </Container>
    );
};

export default MainSection;