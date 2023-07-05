import { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' :1,
  'image': 'https://picsum.photos/64?random=1',
  'name': '홍길동',
  'birthday' : '961222',
  'gender':'남자',
  'job':'대학생'
},
{
  'id' :2,
  'image': 'https://picsum.photos/64?random=2',
  'name': '나동빈',
  'birthday' : '975120',
  'gender':'여자',
  'job':'프로그래머'
},
{
  'id':3,
  'image': 'https://picsum.photos/64?random=3',
  'name': '이순신',
  'birthday' : '941234',
  'gender':'남자',
  'job':'디자이너'
}]
class App extends Component{
  render(){
    return (
      <div>
        {
          customers.map(c=>{
            return (
              <Customer
              key={c.id}
               id={c.id}
               image={c.image}
               name={c.name}
               gender={c.gender}
               job={c.job}
              />
            )
          })
        }
      

      </div>  
    );
  }
}

export default App;
