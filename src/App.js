import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import  { NavMenu } from "./NavMenu";
import {Landing } from "./Landing";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Product1 } from './product pages/Product1';


const Queryclient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={Queryclient}>
        <BrowserRouter>
        <NavMenu/>
        {/* აქ რაზე დავასვა როუთი ვერ ვხვდები, ანუ რაზე დაკლიკების დროს <Route path="/" element={<Product1/>}/> */}
        <Landing />
        </BrowserRouter>

      </QueryClientProvider>

    </div>
    );
   
   
}

export default App;
