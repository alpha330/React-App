import React,{useState} from 'react';
import './App.jsx';
import Layout from '../Layout/Layout.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Contact from '../Contact/Contact.jsx';
import Products from '../Products/Products.jsx';
import PRODUCTS from './PRODUCTS.json';
import Blog from '../Blog/Blog.jsx';
import theme from '../../configs/theme.jsx';
import SingleProduct from '../SingleProduct/SingleProduct.jsx';

import ThemeContext from '../../contexts/ThemeContext.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [activeTheme, setActiveThem] = useState('theme_1')
  return (
    <ThemeContext.Provider value={{
      theme:theme[activeTheme],
      setActiveThem,
      }}>
      <div className="App">
        <BrowserRouter>
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
