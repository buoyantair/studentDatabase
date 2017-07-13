import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from './Components/Button.jsx';
import Input from './Components/Input.jsx';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    background: linear-gradient(45deg, #4DF48A, #4DC88A);
`

const Form = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: center;

    margin: 0 auto;
    padding: 20px;
    width: 350px;
    min-width: 300px;
    min-height: 400px;
    background: white;
    
    border-radius: 2px;
    background: linear-gradient(150deg, #FFFFFF, #74FFA7);
    box-shadow: 0px 5px 13px 1px rgba(0, 119, 36, 0.21);

    padding-bottom: 50px;

    > h1{
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        font-weight: 100;
        color: #009945;
    }
`

const Row = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: ${(props) => props.end ? "flex-end" : (props.center ? "center": "flex-start")} ;
`

const InputHolder = styled.div`
            display: flex;
            flex-flow: column;
            justify-content: flex-start;
            margin-bottom: 1em;
            
            > p {
                display: flex;
                flex-flow: column;
                justify-content: flex-end;

                margin: 0 auto;
                padding: 0;

                width: 100%;
                height: 20px;
                
                color: #009945;
                font-family: 'Open Sans', sans-serif;
                font-size: 14px;
            }

            > input {
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

                font-family: 'Open Sans', sans-serif;
                font-size: 18px;
                color: #009945;

                &:active, &:focus {
                    outline: none;
                    background: #E0FFEC;
                    color: #009945;
                    box-shadow: 0px 5px 13px 1px rgba(0, 119, 36, 0.21);
                }

                
            }
        `


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser: {
                name: null,
                password: null
            }
        };
    }

    submitHandler(e){
    e.preventDefault();
    console.log("fetching")
    fetch('/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        method: 'POST',
        body: this.state.currentUser
    })
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
    });
    }

    render(){
        return (
            <Container>
                <Form>
                    <h1>Log in to your account</h1>
                    <label>
                        <InputHolder>
                            <p>Name</p> 
                            <Input name="name" onChange={e=>this.setState({currentUser: {name: e.target.value, password: this.state.currentUser.password}})}  type="text"/>
                        </InputHolder>
                    </label> 

                    <label>
                        <InputHolder>
                            <p>Password</p>
                            <Input name="password" onChange={e=>this.setState({currentUser: {name: this.state.currentUser.name, password: e.target.value}})} type="password"/>
                        </InputHolder>
                    </label>
                    <Row center>
                        <Button type="submit" onClick={this.submitHandler.bind(this)}>
                            Log in
                        </Button>
                    </Row>
                </Form>
            </Container>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))