import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #0b0e20;
`;

export const Logo = styled.View`
    padding: 30px 0;
`;

export const ImageLogo = styled.Image`
    width: 100px;
    height: 100px;
`;

export const List = styled.View`
    width: 100%;
`;

export const RowData = styled.View`
    background-color: #1d1e31;
    padding: 10px;
    margin: 5px 20px;
    border-radius: 6px;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Bmi = styled.Text` 
    flex: 1;
    flex-direction: column;
    font-size: 16px;
    color: #8086c5;
`;

export const Classification = styled.Text`
    justify-content: flex-end;
    color: #8086c5;
`;