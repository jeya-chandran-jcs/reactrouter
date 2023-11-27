import logo from './logo.svg';
import './App.css';
import All from './components/All';
import { BrowserRouter, Route,Routes, Link } from 'react-router-dom';
import Fullstack from './components/Fullstack';
import Datascience from './components/Datascience';
import Cybersecurity from './components/Cybersecurity';
import Career from './components/Career';


function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <nav class="navbar navbar-expand-lg bg-body-tertiary  ">
            <div class="container-fluid text-center">

              <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item">
                    <Link class="nav-link active " aria-current="page" to="/all" ><h5>All</h5></Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/fullstack">FullStack development</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/datascience">Data Science</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/cybersecurity">cyber security</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/career">Career</Link>
                  </li>
                            
                </ul>
                
            </div>
          </div>
    </nav> 
      <div style={{backgroundColor:"black",height:"1px",marginBottom:"20px"}}></div>
     <Routes >
      <Route path='/all' element={<All />} />
      <Route path='/fullstack' element={<Fullstack />} />
      <Route path='/datascience' element={<Datascience />} />
      <Route path='/cybersecurity' element={<Cybersecurity />} />
      <Route path='/career' element={<Career />} />
     </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
