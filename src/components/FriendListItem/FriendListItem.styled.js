import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;

  background-color: #e1fce7;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
 
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 10px;
  }
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color:${props=>props.isOnline?'green':'red'};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 60px;
  margin-left: 20px;
`;

export const Name = styled.p`
  margin-left: 20px;
  font-size: 20px;
`;
