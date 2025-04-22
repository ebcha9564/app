// import logo from './logo.svg';
import './App.css';
const name = "Eunbin";
const fontStyle = {
  color : 'blue',
  fontSize: '20px',
  padding: '200px 0',
  display: 'flex'

}

function App(){
  return (
    <>
      <h1 style={fontStyle}>Hello React! {name}!!!</h1>
      <p>리액트위 세계의 오신걸 환영합니다!</p>
    </>
  );
}
export default App;
