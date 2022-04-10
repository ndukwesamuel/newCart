import ProductCard from '../Components/ProductCard';
import products from '../data'

import './HomeScreen.css'


const HomeScreen = () => {
    return (<>
    
    <h1>sam</h1> 
        <div> {products.map( (data) =>  <ProductCard key={data._id} data={data} />
        
      
        )}</div>
    
    </> );
}
 
export default HomeScreen;