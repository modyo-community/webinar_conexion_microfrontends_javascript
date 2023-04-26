
export default function ProductList({ products }) {

  if(products.length === 0) {
    return (
      <p className='my-2'>You have added 0 products</p>
    )
  }

  return (
    <div className="d-flex flex-column gap-3 my-2">
      {products.map(({title, price, image}) => (
        <div className="row align-items-center m-1">
          <div className="col-2">
            <img
              src={image}
              alt={title}
              className="rounded square"
            />
          </div>
          <div className="col-8">
            <p className="fw-semibold m-0">{title}</p>
          </div>
          <div className="col-2">
            <span className="text-secondary">${price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
