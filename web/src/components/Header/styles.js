import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    height: 70px;
    background: #20295f;
    border-bottom: 6px solid #ee6b26;
    display: flex;
`

export const LeftSide = styled.div `
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 120px;
        height: 50px;
    }

`

export const RightSide = styled.div `
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    a, button { 
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover {
            color: #ee6b26;
        }
    }
    
    #notification {
        img {
            width: 25px;
            height: 25px;
        }

        span {
            background: #fff;
            color: #ee6b26;
            padding: 2px 5px;
            border-radius: 50%;

            position: relative;
            top: -20px;
            right: 10px;

            
        }
        &:hover {
            opacity: 0.5;
        }
    }

    .dividir::after {
        content: "|";
        margin: 0 10px;
        color: #fff;
    }

    button {
        font-size: 16px;
    }
`