import { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';

const customers = [
  {
    id: 1,
    image: 'https://picsum.photos/64?seed=1',
    name: '홍길동',
    birthday: '961222',
    gender: '남자',
    job: '대학생',
  },
  {
    id: 2,
    image: 'https://picsum.photos/64?seed=2',
    name: '나동빈',
    birthday: '975120',
    gender: '여자',
    job: '프로그래머',
  },
  {
    id: 3,
    image: 'https://picsum.photos/64?seed=3',
    name: '이순신',
    birthday: '941234',
    gender: '남자',
    job: '디자이너',
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => {
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
            }
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
