import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button `
            min-width: 120px;
            height: 50px;
            background: #FFF;
            border: none;
            border-radius: 25px;
            font-family: 'Open Sans', sans-serif;
            font-size: 18px;
            color: #009945;
            box-shadow: 0px 5px 13px 1px rgba(0, 119, 36, 0.21); 
            transition: all .25s;
            &:hover{
                cursor: pointer;
                color: #FFF;
                background: #009945;
                box-shadow: 0px 5px 13px 1px rgba(0, 119, 36, 0.1); 
            }
            &:active, &:focus{
                outline: none;
            }
        `

export default Button;