import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  margin: 0 auto;

  text-align: center;
  font-size: 14px;
  line-height: 1.2;

  background-color:#e7e4f2 ;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;
export const Avatar = styled.img`
  width: 50%;
  height: auto;
  margin-bottom: 5px;
  display: block;
  border-radius: 50%;
  border: 1px solid white;
`;

export const UserName = styled.p`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 700;
`;

export const UserInfo = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: rgb(71, 69, 69);
`

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  border-top: 1px solid #c0c0c0;
  
`

export const Item = styled.li`
  display: flex;
  flex-basis: calc(100% / 3 );
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 5px;
  background-color:#cfcade ;
  :not(:last-child) {
    border-right: 1px solid #c0c0c0;
  }
`

export const Label = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: rgb(71, 69, 69);
`

export const Value = styled.span`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;`