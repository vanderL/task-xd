import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div `
    width: 50%;
    margin-bottom: 80px;
`

export const TypeIcons = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: 0.3;
    }

    button {
        border: none;
        background: none;
    }
    
    img {
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover {
           opacity: 0.5; 
        }
    }
`

export const Input = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 25px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 3px solid #ee6b26;
    }

    img {
        width: 25px;
        height: 25px;
        position: relative;
        left: 94%;
        bottom: 41px;
    }
`

export const TextArea = styled.div `
   width: 100%;
    display: flex;
    flex-direction: column;
    margin: 25px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }

    textarea {
        font-size: 16px;
        padding: 15px;
        border: 1px solid #ee6b26;
        border-bottom: 3px solid #ee6b26;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        font-weight: bold;
        color: #20295f;
        border: none;
        background: none;
        font-size: 24px;
        cursor: pointer;

        &:hover {
            opacity: 0.6;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #ee6b26;
        font-size: 24px;
        font-weight: bold;
    }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;
    button {
        width: 100%;
        
        background-color: #ee6b26;
        color: #fff;
        
        font-size: 32px;
        font-weight: bold;
        
        border: none;
        border-radius: 30px;
        
        padding: 20px;

        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`