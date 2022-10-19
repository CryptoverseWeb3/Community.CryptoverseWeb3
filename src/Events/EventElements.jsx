import styled from "styled-components";

export const SmallCard = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  height: 250px;
  width: 800px;
  border-radius: 15px;
  background-color: #212121;
  margin: 0 auto 20px auto;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const BigCard = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  height: 600px;
  width: 800px;
  border-radius: 15px;
  background-color: #212121;
  margin-bottom: 20px;
  margin: 0 auto 20px auto;
  display: grid;
  grid-template-rows: 1fr 2fr;
`;
