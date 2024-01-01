//  Importar o 'useState': adicionar a componentes funcionais
import { useState } from 'react';
//  Incluir os componentes do React-Native
import { ScrollView, View } from 'react-native';
//  Incluir os Componentes CSS criado com styled componentes
import { Container, Logo, ImageLogo, List, RowData, Bmi, Classification, InputForm, BtnSubmitForm, TxtSubmitForm } from './app/src/styles/custom';

//  Criar e exportar a função
export default function App() {

  //Criar variáveis de estado
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const [bmi, setBmi] = useState('');


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        
        { /* Carregar a LOGO */ }
        <Logo>
          <ImageLogo source = {require('./app/assets/logo.png')} />
        </Logo>

        {/** Criar o campo */}
        <InputForm 
          placeholder = "Altura (ex.: 1.70)"
          value={height}
          onChangeText={text => setHeight(text)}
        />

        {/** Criar o campo */}
        <InputForm 
          placeholder = "Peso (ex.: 67.2)"
          value={weight}
          onChangeText={text => setWeight(text)}
        />

        {/**Criar um botão */}
        <BtnSubmitForm>
          <TxtSubmitForm>
            Calcular
          </TxtSubmitForm>
        </BtnSubmitForm>

         {/** Criar o campo */}
         <InputForm 
          placeholder = "Seu IMC/BMI é"
          value={bmi}
          editable = {false}
        />

        { /** Criar a lista de classificação do IMC */ }
        <List>

          <RowData>
            <Bmi>
              Menor que 18.5
            </Bmi>
            <Classification>
              Magreza
            </Classification>
          </RowData>

          <RowData>
            <Bmi>
              Entre 18.5 e 24.9
            </Bmi>
            <Classification>
              Normal
            </Classification>
          </RowData>

          <RowData>
            <Bmi>
              Entre 25 e 29.9
            </Bmi>
            <Classification>
              Sobrepeso
            </Classification>
          </RowData>

          <RowData>
            <Bmi>
              Entre 30.0 e 39.9
            </Bmi>
            <Classification>
              Obesidade
            </Classification>
          </RowData>

          <RowData>
            <Bmi>
              Maior que 40.0
            </Bmi>
            <Classification>
              Obesidade Grave
            </Classification>
          </RowData>

        </List>

      </Container>
    </ScrollView>
  );
}