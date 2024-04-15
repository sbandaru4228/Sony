import logo from './logo.svg';
import './App.css';
import Greet from './Components/greet';
import Counter from './Components/Counter';
import User from './Components/useStateObjects';
import ConditionalRendering from './Components/ConditionRendering';
import Album from './Components/Assignments/Album';
import PostList from './Components/Assignments/PostList';


// import GreetClass from './Components/GreetClass';
const employee = {
  firstName: "sai",
  lastname: "bandaru",
  name: "sai",
  age: 29,
  salary: 1000000,
  adress: {
    city: "aubrey",
    state: "Texas",
    country: "US"
  },
}

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <User /> */}
      {/* <ConditionalRendering /> */}
      {/* <Greet firstName="sai" data={employee} />
      <Greet firstName="john" lastname="jeefer" data={employee} />
      <Greet firstName="tom" lastname="mike" data={employee} />
      <Greet firstName="sony" lastname="bandaru" data={employee} /> */}
      {/* <GreetClass firstName="saib" lastname="bandaru1" salary='10000000'/> */}
      {/* <h1>
        This is App Component parent Component
        {/* <Greet props={employee}></Greet> */}
      {/* </h1> */}
      <Album />
      <PostList />
    </div>
  );
}

export default App;
