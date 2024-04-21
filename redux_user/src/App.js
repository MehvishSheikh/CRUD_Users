


import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Admin_Dash from './components/Admin_Dash/Admin_Dash';
import AllUsers from './components/Users/AllUsers';
import Customerlist from './components/Crud/Customerlist';



function App() {
  return (
    <div >
    <Header/>
    <Sidebar/>
    <Admin_Dash/>
    </div>
  );
}

export default App;
