import React, { useState } from 'react'
import {Form, Button, Input} from 'antd'
import { useHistory } from  'react-router-dom'
import axios from 'axios'

const FormItem = Form.Item;

export default function Login() {
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')
    const histoty = useHistory();
    return <Form className="login-form">
        <FormItem>
            <Input placeholder="请输入用户名" maxLength={10} onChange={(event)=> {
                setName(event.target.value)
            }}></Input>
        </FormItem>
        <FormItem> 
            <Input placeholder="请输入密码" maxLength={10} type="password" onChange={(event)=> {
                setPwd(event.target.value)
            }}/>
        </FormItem>
        <FormItem>
            <label>{name} -- {pwd}</label>
        </FormItem>
        <FormItem> 
            <Button type="primary" style={{width: "100%"}} onClick={()=>{
                login(name, pwd).then((response)=> {
                    let res = response.data;
                    if (res.code === 0) {
                        histoty.push('/home');
                    }
                })
            }}>登录</Button>
        </FormItem>
    </Form>

}

function login (name, pwd) {
    return axios.get("/login.json",{
        params: {name, pwd
        }
    })
  }