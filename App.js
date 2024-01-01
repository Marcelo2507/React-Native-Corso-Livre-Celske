import { ScrollView, View } from 'react-native';
import { Container, Logo, ImageLogo, List, RowData, Bmi, Classification } from './app/src/styles/custom';

export default function App() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        
        { /* Carregar a LOGO */ }
        <Logo>
          <ImageLogo source = {require('./app/assets/logo.png')} />
        </Logo>

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