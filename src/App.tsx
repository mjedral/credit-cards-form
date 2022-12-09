import React from 'react';
import { StyledCardWrapper } from './components/CardWrapper/StyledCardWrapper';
import { Container } from './components/Container/Container';
import { Layout } from './components/Layout/Layout';
import { GlobalStyles } from './consts/globalStyles/globalStyles';
import { useForm } from './hooks/useForm';

function App() {
  const { handleChange, handleSubmit, values, errors } = useForm();

  return (
    <>
    <GlobalStyles/>
    <Layout>
      <Container>
      <StyledCardWrapper>
        <label>
            <span >Name on Card</span>
            <input name="nameoncard" type="text"/>
        </label>
        <label>
            <span >Card Number</span>
            <input name="cardnumber" type="text" placeholder="1234 1234 1234 1234"/>
        </label>
        <label >
            <span >Exp. Date</span>
            <input name="experationdate" type="text" placeholder="MM/YYYY"/>
        </label>
        <label >
            <span >CVC</span>
            <input name="cvcnumber" type="text" placeholder="CVC"/>
        </label>
     </StyledCardWrapper>
     <button>Pay</button>
      </Container>
    </Layout>
    </>
  );
}

export default App;
