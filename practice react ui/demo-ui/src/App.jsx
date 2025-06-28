function SearchBar(){
  return (
    <div>
    <form>
      <input type="text" placeholder="search..." /> <br />

      <label>
      <input type="checkbox"  className="mt-1"/>Only  show products in stock
      </label>
    </form>
    </div>
  );
}
function ProductTitleRow({value}){
 return(
      <div className="d-flex justify-content-center mt-2">
          <b>{value}</b>
      </div>
  ); 
}

function ProductRow({product , price}){
 return (<div className="d-flex justify-content-between">
      <span>{product}</span>
      <span>{price}</span>
  </div>);
}

export default function App(){
   const products = [
    { product: "Apple", price: "$1", category : "fruit" },
    { product: "Dragonfruit", price: "$1" ,category : "fruit"},
    { product: "Passionfruit", price: "$2", category : "fruit" },
    { product: "Spinach", price: "$2",category : "vegetable" },
    { product: "Pumpkin", price: "$4",category : "vegeatable" },
    { product: "Peas", price: "$1",category : "vegetable" },
  ];

  return (
    <div className="product-box">
    <SearchBar />
    <ProductTitleRow value={"Fruits"} />
     <ProductRow product={"Apple"} price={'$1'} /> 
    <ProductRow product={"Dragonfruit"} price={'$1'} /> 
    <ProductRow product={"Passionfruit"} price={'$2'} /> 
    <ProductTitleRow value={"Vegetables"} />
 
    {products.map((item, index) => (
      <ProductRow key={index} product={item.product} price={item.price}  />
    ))}
    

    </div>
  );
}