import React from 'react';
import { Input, Button, Select} from 'antd'
import 'antd/dist/antd.css'
import './App.css';

const Search = Input.Search;
const Option = Select.Option; 
class App extends React.Component {

  state = {
    val: '',
    list: []
  }

  handleChange = (event) => {

  }

  handleAdd = () => {
    let { val, list } = this.state;
    if (val !== '') list.push(val);
    else alert("You can't add a void string");
    this.setState({
      list
    })
  }

  handleSearch = (value) => {
    let { list } = this.state;
    list.push(value);
    this.setState({
      list
    })
  }
  render() {
    const { val, list } = this.state;
    const options = [];
    const LiItem = list.map((item, index) => {
      options.push(<Option key={index}>{item}</Option>)
      return <li key={index}>{item}</li>
    })

    return (<div>
      <p>欢迎</p>
      <h1>Hello, world!</h1>

      <Input type="text" value={val} style={{ width: 300 }} onChange={this.handleChange} />
      <Button type="primary" onClick={this.handleAdd}>添加</Button>
      <ul>
        {
          list.map((item, index) => {
            return <li key={ index }>{item}</li>
          })
        }
      </ul>
      <div>
        <Search style={{ width: 360 }} onSearch={this.handleSearch} enterButton="Search"></Search>
        <div>
          <Select style={{width: 150}}>{options}</Select>
        </div>
        </div>
    </div>);
  }


}

export default App;
