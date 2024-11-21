import styled from "styled-components";
import './App.css';

// Styled Components
const StyledButton = styled.button`
  background: ${(props) => props.bgColor = "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)"};
  font-size: ${(props) => props.fontSize = "1.2rem"};
  color: ${(props) => props.textColor = "white"};
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  margin-right: 10px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

// Extended StyledButton
const DangerButton = styled(StyledButton)`
  background: linear-gradient(135deg, #ff5f6d 0%, #ffc371 100%);
  color: black;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Heading = styled.h1`
  font-weight: 700;
  text-transform: capitalize;
  position: relative;
  display: inline-block;
  color: ${(props) => props.textColor = '#e74c3c'};

  &:after {
    content: "";
    display: block;
    width: 50%;
    height: 4px;
    background: linear-gradient(90deg, #ffa702, #ff5507);
    margin-top: 8px;
    border-radius: 2px;
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: auto;
  padding: 2rem;
  border-radius: 20px;
  background-color: ${(props) => props.bgColor = "#2c3e50"};
  
  /* Posisi Tengah Layar */
  position: absolute;
  
`;


const Paragraph = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.textColor = "white"};
`;

// App Component
function App() {
  return (
    <>
      <Container bgColor>
        <div>
          <Heading textColor>Important!</Heading>
          <Paragraph textColor>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            exercitationem, incidunt minima corporis doloremque fugit.
          </Paragraph>
          <StyledButton bgColor fontSize textColor>
            Confirm
          </StyledButton>
          <DangerButton>Cancel</DangerButton>
        </div>
      </Container>
    </>
  );
}

export default App;
