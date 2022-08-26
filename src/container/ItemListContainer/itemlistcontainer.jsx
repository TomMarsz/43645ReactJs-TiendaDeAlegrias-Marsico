import Product from "../../components/Product/product"
import "./itemlistcontainer.css"

const ItemListContainer = ({greeting, color}) => {
  return(
    <>
    <h2 style={{color: color,}}> {greeting}</h2>
    <Product />
    </>
  )
}
export default ItemListContainer