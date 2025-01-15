import React,{useState} from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import PRODUCTS from './PRODUCTS.json';
import Blog from '../Blog/Blog';
import theme from '../../configs/theme';
import SingleProduct from '../SingleProduct/SingleProduct';

import ThemeContext from '../../contexts/ThemeContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [activeTheme, setActiveThem] = useState('theme_1')
  return (
    <ThemeContext.Provider value={{
      theme:theme[activeTheme],
      setActiveThem,
      }}>
      <div className="App">
        <BrowserRouter basename="/React-App">
        <Layout>
          <Switch>
            <Route exact path='/'>
                <Products data={PRODUCTS} />                     
            </Route> 
            <Route path='/AboutMe'>            
                <AboutMe/>                     
            </Route>
            <Route path='/Contact'>            
                <Contact/>
            </Route>    
            <Route path='/Blog'>
                <Blog/>
            </Route>
            <Route path='/Product/:id'>
                <SingleProduct/>
            </Route>
          </Switch>
        </Layout> 
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
