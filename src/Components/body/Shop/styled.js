import styled from 'styled-components';
import { Rate } from 'antd';

export const FirstPart = styled.div`
  width: 100%;
  height: 505px;
  border: 2px solid green;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

FirstPart.ImgBar = styled.div`
  width: 573px;
  height: 448px;
  display: flex;
  justify-content: space-between;
`;
FirstPart.DescriptionBar = styled.div`
  border: 2px solid yellow;
  width: 573px;
  height: 448px;
  .description {
    font-size: 14px;
  }
`;

FirstPart.ImgBar.Imgs = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

FirstPart.ImgBar.Img = styled.div`
  width: 444px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbfbfb;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  background: #fbfbfb;
`;
export const Rated = styled(Rate)`
  font-size: 13px;
  padding-right: 4px;
`;

export const Ratebar = styled.div`
  display: flex;

  justify-content: space-between;
  border-bottom: 1px solid grey;
`;
export const Sizebar = styled.div`
  display: flex;
  column-gap: 5px;
`;
Sizebar.Sizes = styled.div`
  height: 25px;
  width: 25px;
  border: 1px solid #46a358;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #46a358;
`;

export const Countbar = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  border-radius: 50px;
  width: 25px;
  height: 30px;
  background-color: #46a358;
  :active {
    transform: translateY(1.5px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  caret-color: #46a358;
  border: 0px;
`;
Countbar.Count = styled.div`
  padding: 10px;
`;
