import "./Register.css"
import React from "react";
import { useEffect } from "react";

const url ="https://f563-37-215-41-154.ngrok-free.app/"; // тут должна быть url на бэк

export default function Register(props) {

const setData = props.setData;


    function RegisterByEmail(event) {
        event.preventDefault();

        const body = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        fetch(url + "Auth/Register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "ngrok-skip-browser-warning":"1" // этот параметр добавлял из-за хостинга бэка
              },
            body: JSON.stringify(body)
        })
        .then(data => {
            return data.json();
        })
        .then((responce) => {
            return setData(JSON.stringify(responce, null, 4));
        })
        .catch(err => setData(JSON.stringify(err, null, 4)))
    }
    
    function Login(event) {
        event.preventDefault();

        const body = {
            login: event.target.login.value,
            password: event.target.password.value
        }

        fetch(url + "Auth/Login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "ngrok-skip-browser-warning":"1" // этот параметр добавлял из-за хостинга бэка
              },
            body: JSON.stringify(body)
        })
        .then(data => data.json())
        .then((responce) => setData(JSON.stringify(responce, null, 4)))
        .catch(err => setData(JSON.stringify(err, null, 4)))
    }
    return (
<div className="register-handler">
            <form method="post" className="register-form" onSubmit={RegisterByEmail}>
              <input type="text" name="email" />
              <input type="text" name="password" />
                <button type="submit">Register</button>
            </form>
            <form method="post" className="register-form" onSubmit={Login}>
              <input type="text" name="login" />
              <input type="text" name="password" />
                <button type="submit">Login</button>
            </form>
</div>

    );
}