import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import  { NavMenu } from "./NavMenu";
import {Landing } from "./Landing";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Products } from './product pages/Products';
import {Cart} from "./Cart"
import {Shopping} from "./Shopping"


const Queryclient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={Queryclient}>
        <BrowserRouter>
        <NavMenu/>
        <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path='/products/:productId' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/shopping' element = {<Shopping/>}/>
        </Routes>
        
        
        </BrowserRouter>

      </QueryClientProvider>

    </div>
    );
   
   
}

export default App;
