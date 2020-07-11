import React from 'react'
import { Link } from 'react-router-dom'
import './app.css'
import 'antd/dist/antd.css'
export default function App() {
   //无状态
   return <div className="container">
        <h1>Wellcome！</h1>
        <Link to="/login">去登录</Link>
        <br />
        <Link to='/home'>去首页</Link>
        <br />
    </div>
}

// export default function App() {
//    //无状态
//    let [count, setCount] = useState(10);
//    useEffect(()=>{
//        console.log("执行了useEffect");
//         // setCount(100);
//     }) 
//    return <div className="container">
//         <h1>Wellcome！</h1>
//         <Link to="/login">跳转登录</Link>
//         <br />
//         <Link to='/home'>跳转首页</Link>
//         <br />
//         <p>当前count次数： {count}</p>
//         <Button onClick={()=>{
//             setCount(count+=1)
//         }}>更新次数</Button>
//         <Button onClick={()=> {
//             setCount(count-=1)
//         }}>减少次数</Button>

//     </div>
// }

// export default class App extends React.Component {
// //  有状态组件
//     state = {
//         count:10
//     }
//     handleUpdate = ()=> {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

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

