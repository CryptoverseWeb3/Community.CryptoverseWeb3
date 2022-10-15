import styled from "styled-components";

export const CardWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: grid;
  justify-content: center;
  grid-template-columns: 700px;
  grid-template-rows: 500px;
`;

export const CardContainer = styled.div`
  margin: 10px 20px;
`;

export const JobCard = styled.div`
  font-size: 26px;
  background: #212121; 
  margin-bottom: 25px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
export const JobCardContent = styled.div`
  padding: 15px;
`;

export const JobCardContentTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex: 1;
  color: white;
`;

export const JobCardInfo = styled.div`
  margin-bottom: 0px;
`;

export const JobCardFooter = styled.div`
  display: flex;
  font-size: 18px;
  color: white;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;
  background: #333232;
`;

export const JobCardContentMid = styled.div`
  margin-top: 15px;
  padding-left: 15px;
  font-size: 18px;
  color: grey;
`;

export const JobTags = styled.span`
  display: inline-block;
  color: black;
  font-size: 20px;
  padding: 6px 12px;
  background: #d2d3d4;
  border-radius: 5px;
  margin-right: 11px;
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const AdTags = styled.span`
  display: inline-block;
  font-size: 20px;
  color: #ff8100;
  margin-right: 25px;
  margin-bottom: 10px;
  margin-top: 15px;
`;
