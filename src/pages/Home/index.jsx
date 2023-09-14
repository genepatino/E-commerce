import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Card } from "../../Components/Card"
import {ProductDetail} from "../../Components/ProductDetail"
import _ from "lodash"


const Home = () => {
  const { articleData, setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)

  const renderView = () => {
    /* const productsToRender = searchByTitle?.length > 0
      ? filteredItems
      : articleData;
 */
    if (filteredItems?.length > 0) {
      return filteredItems.map(item => (
        <Card key={item.id} data={item} />
      ));
    }else if(filteredItems?.length < 1){
      return articleData.map(item => (
        <Card key={item.id} data={item} />
      ));
    }else{
      return <div>Not results found</div>
    }
};


  return (
    <>
      <div className="flex relative justify-center items-center w-80 mb-4">
        <h1 className=" font-medium text-xl">Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a product" 
        className=" rounded-lg border border-black mb-4 p-2 pl-4 focus:outline-none"
        onChange={_.debounce((e) => setSearchByTitle(e.target.value), 1000)}  
      />
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {renderView()}
        <ProductDetail/>
      </div>
    
    </>
  )
}
  
  export {Home}