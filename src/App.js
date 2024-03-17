import './App.css';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
const pdata = [

  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'JavaScript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },

  {
    name: 'Java',
    student: 10,
    fees: 5
  },

  {
    name: 'C#',
    student: 9,
    fees: 4
  },

  {
    name: 'JavaScript',
    student: 10,
    fees: 8
  }

];

function App() {
  return (
    <>
      <h1 className='chart-heading'>Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata}>
          <Line dataKey="student" />
        </LineChart>
      </ResponsiveContainer>
    </>

  );
}

export default App;



