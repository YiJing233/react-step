import React from 'react'
export default function NotMatch() {
  // 无状态
    return <div className="container" style={{ color: 'red' }}>
        <h1>404 Not Found</h1>
        <br />
    </div>
}

// export default class App extends React.Component {
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

//         </div>
//     }
// }
