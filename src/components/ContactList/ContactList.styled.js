import { styled } from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 16px;
  li {
    display: flex;
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 8px;
    width: 100%;
    gap: 10px;
  }

  p {
    width: 300px;
    font-weight: 600;
    margin-right: 10px;
  }

  span {
    width: 300px;
    font-weight: 500;
  }
  button {
    background-color: transparent;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;

export const TitlesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  p {
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Message = styled.p`
  margin-top: 36px;
  font-size: 18px;
  color: #dbd7d2;
  font-style: italic;
`;
