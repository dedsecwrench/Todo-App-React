import './App.css';
import TodoContainer from './components/TodoContainer';
import store from './store/Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import TodoCard from './components/TodoCard';

function App() {
  return (
    <div>
       <Provider store={store}>
      <Router>
        <Routes>
       
        <Route path='/' element={<Navigate to="/todocards"/>}/>
        <Route path='/todocards' element={<TodoContainer/>}/>
        <Route path='/:id' element={<TodoCard/>}/>
       </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
