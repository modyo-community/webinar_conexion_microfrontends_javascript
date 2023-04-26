import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProductItem({product, addProduct}) {
  const {
    id, image, title, price
  } = product;

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 p-3" key={id}>
      <div className="shadow-sm product bg-white rounded h-100">
        <div className="d-flex flex-column h-100 justify-content-between">
          <div className="center flex-fill mt-4">
            <img
              className="image"
              src={image}
              alt="Product"/>
          </div>
          <div className="m-3 d-flex flex-column gap-4">
            <h5 className="text-truncate fw-bold">
              {title}
            </h5>
            <div className="d-flex justify-content-between align-items-center">
              <p className="price fs-5 m-0 text-secondary">
                {`$${price}`}
              </p>
              <button
                className="btn btn-primary rounded-pill center add-cart text-white"
                onClick={() => addProduct(product)}
              >
                <FontAwesomeIcon icon="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
