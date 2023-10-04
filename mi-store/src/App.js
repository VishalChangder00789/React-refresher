import './App.css';
// Used for routing
import { Route,Routes,BrowserRouter } from 'react-router-dom';

import SignIn from './Pages/SignIn/SignIn'

const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/SignIn" element={<SignIn />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
