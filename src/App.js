import "./App.css";
import {Link} from "react-router-dom";
import {useEffect, useState} from 'react';
const App = () =>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const l = await res.json();
            setData(l);
        }
        fetchData();
        console.log(data[0]);
    }, []);

  return(
      <div className="bg-layout">
          <div className="container">
              <div className="box">
                {
                    data.map(card =>
                         <div className="products_container" key={card.id}>
                             <p>
                             <span style={{fontWeight:'bold'}}>Gender</span>:Men   <span style={{fontWeight:'bold'}}>Color</span>:Black</p>
                            <img className="product_image" src={card.image} alt={card.id}/>
                            <div className="details_container">
                                <h1 className="product_heading">{card.title}</h1>
                                <p className="product_para">{card.description}</p>
                                <p className="product_para">Cost : {card.price}</p>
                                <Link to="/cart"><button className="button" >Add to Cart</button></Link>
                            </div>
                        </div>
                    )
                }


              </div>

          </div>
      </div>
  );
}
export default App;
