import React from 'react'
import './app.css'
import { Button } from 'antd'
import { Link, useParams } from 'react-router-dom'
import 'antd/dist/antd.css'
export default function Detail() {
  // 无状态
    const params = useParams();
    return <div className="container">
        <h1>Wellcome！</h1>
        <p>This is detail:
        {params.id}
        </p>
        <br />
    </div>
}

// export default class Detail extends React.Component {
//     handleJump = ()=> {
//         this.props.history.push('/login');
//     }
//     render() {
//         return <div className="container">
//             <h1>Welcome！</h1>
//             <Link to="/login">点击跳转到登录页面</Link>
//             <br />
//             <Link to='/home'>点击跳转到主页面</Link>
//             <br />
//             <Button onClick= {this.handleJump}>点击跳转到登陆</Button>
//             <p>当前参数值为 {this.props.match.params.id}</p>

//         </div>
//     }
// }


