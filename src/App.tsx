import './App.css'
import Calculator from './components/Calculator';
import Advertisement from './components/Advertisement';

const companyName1: string = 'ABC Corporation';
const productDescription1: string = 'Great Product!';
const price1: string = '$19.99';

const companyName2: string = 'XYZ Corporation';
const productDescription2: string = 'Amazing Product!';
const price2: string = '$49.99';

function App() {

  return (
    <>
      <Advertisement companyName={companyName1} productDescription={productDescription1} price={price1} />
      <Advertisement companyName={companyName2} productDescription={productDescription2} price={price2} />
      <Calculator />
    </>
  )
}

export default App;
