import { useSelector } from "react-redux";
import './products.css';
import Product from "./Product";

export default function ProductDisplay({ title, loading }) {
  const isFiltered = useSelector((state) => state.category.isFiltered);
  let CATEGORY;
  if (isFiltered) {
    CATEGORY = useSelector((state) => state.category.filteredCategory);
  } else {
    CATEGORY = useSelector((state) => state.category.category);
  }

  return (
    <div className="productsDiv">
      {loading ? (
        <div className="skeleton skeleton-title"></div>
      ) : (
        <h2 className={"category"}>{title}</h2>
      )}
      {!loading && <hr className="line" /> }
      
      <div className="products">
        {loading ? (
          // Render 3 skeletons
          <>
            <div className="container">
              <div className="skeleton skeleton-1"></div>
              <div className="skeleton skeleton-2"></div>
              <div className="skeleton skeleton-3"></div>
              <div className="skeleton skeleton-4"></div>
            </div>
            <div className="container">
              <div className="skeleton skeleton-1"></div>
              <div className="skeleton skeleton-2"></div>
              <div className="skeleton skeleton-3"></div>
              <div className="skeleton skeleton-4"></div>
            </div>
            <div className="container">
              <div className="skeleton skeleton-1"></div>
              <div className="skeleton skeleton-2"></div>
              <div className="skeleton skeleton-3"></div>
              <div className="skeleton skeleton-4"></div>
            </div>
          </>
        ) : (
          // Render products
          CATEGORY.map((product, index) => (
            <Product
              key={index}
              product={product}
              index={index}
              
            />
          ))
        )}
      </div>
    </div>
  );
}
