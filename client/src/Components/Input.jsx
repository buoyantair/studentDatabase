import React, {Component} from 'react';
import styled from 'styled-components';

const Input = styled.input`
                display: flex;
                flex-flow: column;
                justify-content: center;

                text-align: center;

                margin: 0 auto;
                padding-left: 0px;
                padding-right: 0px;

                height: 50px;
                width: 100%;
                box-shadow: 0px 2px 7px 0px rgba(0, 119, 36, 0.21);
                border: none;
                transition: all .5s;
                background: #FFF;
                font-family: 'Open Sans', sans-serif;
                font-size: 18px;
                color: #009945;

                &:active, &:focus {
                    outline: none;
                    background: #E0FFEC;
                    color: #009945;
                    box-shadow: 0px 5px 13px 1px rgba(0, 119, 36, 0.21);
                }
        `

export default Input;