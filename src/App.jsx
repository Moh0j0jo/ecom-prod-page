import './App.css';
import Navbar from './components/Navbar';
import ProductCase from './components/ProductCase'
import { CarouselDefault } from './components/ProductShowCase';


function App() {
  return (
    <div className='w-full lg:mx-auto lg:max-w-7xl'>
    <Navbar/>
    <div className="flex mx-auto flex-col lg:flex-row lg:items-center lg:gap-10 lg:mt-40 lg:px-5">
      <CarouselDefault/>
      <ProductCase/>
    </div>

  </div>
  )
}

export default App;
