import styled from '@emotion/styled';

export const PhonebookForm = styled.div`
  box-shadow: 0px 0px 10px -1px rgba(109, 108, 108, 0.2);
  padding: 0px 20px 20px 20px;
  position: relative;
  max-width: 400px;
`;

export const SubmitBtn = styled.button`
  position: absolute;
  top: 130px;
  right: 80px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #d0d1d4;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    box-shadow: 0px 0px 3px 0.3px rgba(0, 0, 0, 0.2);
  }
`;

export const FormTitle = styled.h2`
  margin: 20px 0 10px;
  font-size: 28px;
  font-weight: 500;
`;

export const FormItem = styled.p`
  font-size: 16px;
`;
