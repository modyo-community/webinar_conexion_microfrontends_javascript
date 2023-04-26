import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductList from './components/ProductList';
import { useEffect, useMemo, useState } from 'react';
import { Observable } from 'windowed-observable';
import './App.scss';

function App() {

  const observable = useMemo(() => new Observable('cart'), [])

  const [products, setProducts] = useState([]);

  useEffect(() => {
    observable.subscribe((productsIncoming) => {
      setProducts(productsIncoming);
    }, { latest: true });

    return () => {
      observable.unsubscribe(observable);
    }
  }, [observable])


  return(
    <div className="p-3 h-100">
      <div className='shadow rounded bg-white h-100 d-flex flex-column'>
        <div className='bg-dark p-3 rounded-top'>
          <h3 className='fw-bold text-white m-0'>Cart</h3>
        </div>
        <div className='p-3 d-flex flex-column flex-grow-1'>
          <div className="flex-grow-1">
            <ProductList products={products} />
          </div>
          <button
            className='btn btn-success text-white fw-semibold w-100 text-center'
            disabled="disabled">
              <FontAwesomeIcon icon="shopping-bag" className='me-2' />
              Pay
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
