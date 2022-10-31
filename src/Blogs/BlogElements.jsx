import styled from "styled-components";

export const SmallCard = styled.div`
  padding: 20px;
  height: max-content;
  width: 40%;
  border-radius: 15px;
  background-color: #212421;
  margin: 0 auto 20px auto;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;

export const BigCard = styled.div`
  padding: 20px;
  height: fit-content;
  width: min-content;
  border-radius: 15px;
  // background-color: #212421;
  margin: 0 auto 20px auto;
  display: grid;
  align-items: center;
`;
