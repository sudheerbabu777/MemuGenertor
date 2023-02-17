// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 54px;
  font-weight: 600;
  color: #35469c;
  margin-top: 4px;
  margin-bottom: 0px;
`

export const FromContainer = styled.form`
  width: 40%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border-radius: 4px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

export const InputBar = styled.input`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #7e858e;
  padding: 10px;
  width: 430px;
  outline: none;
  border: 1.4px solid #7e858e;
  border-radius: 4px;
`

export const InputSelect = styled.select`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
  padding: 10px;
  width: 430px;
  outline: none;
  border: 1.4px solid #7e858e;
  border-radius: 4px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #7e858e;
`
export const CustomButton = styled.button`
  background-color: #0b69ff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 8px;
  padding-bottom: 8px;
  outline: none;
  border-radius: 8px;
  border: none;
  align-self: flex-start;
  margin-left: 40px;
`

export const MemeImage = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 400;
  color: #ffffff;
`

export const IMemeGenerateContainer = styled.div`
  background-image: url(${props => props.background});
  height: 400px;
  background-size: cover;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-radius: 4px;
`
export const CustomOption = styled.option`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
`
