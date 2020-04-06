import React from 'react';
import './Product.css';
import Button from '.././Button/Button.js'
import laptop from '../../.././img/50061505_575246.png';
import hover1 from '../../.././img/hover-1.png';
import hover2 from '../../.././img/hover.png';
import star from '../../.././img/star copy 3.png';
import discount from '../../.././img/Group 7.png';
import headphones from '../../.././img/product.png';
/**
 * Product Styles
 * 
 *
 * 
 * 
 * Block outline with transparent icons on hover
 * block fill with solid blue icons on hover
 * 
 * block where Background is filled on hover
 * small block
 * 
 * inline block
 * 
 * 
 */


const Product = (props) => {
    let classList ='';
    let imagePath = '';
    let imageAlt ='';
    if(props.type === 'block'){
        if(props.small){
            classList += ` product-small`;
            imagePath = headphones;
            return(<div className="long-block">
                    <img className="product-image" src={imagePath} alt ={imageAlt}></img>
                    <h1>{props.label}</h1>
                    <img className="product-discount" src={discount} alt ="discoun-price"></img>

                </div>)
        }
        if (props.long){
            classList += ` product-long`;
            imagePath = laptop;
            return(<div className="long-block">
                    <img className="product-image" src={imagePath} alt ={imageAlt}></img>
                    <h1>{props.label}</h1>
                    <img className="product-discount" src={discount} alt ="discoun-price"></img>

                </div>)
        }
        if (props.default){
            if(props.filled){
                classList += ` default-block product-filled`;
                imagePath = laptop;
                       
            }
            else{
                classList += ` default-block product-outline`;
                imagePath = laptop; 
            }
            return(
                <div className={classList}>
                    <img className="product-image" src={imagePath} alt ={imageAlt}></img>
                    <h1>{props.label}</h1>
                    <img className="product-discount" src={discount} alt ="discoun-price"></img>

                </div>
            ) 
            
        }
    }
    else{
        classList += ` product-inline`;
        return(<div className="long-block">
                    <img className="product-image" src={imagePath} alt ={imageAlt}></img>
                    <h1>{props.label}</h1>
                    <img className="product-discount" src={discount} alt ="discoun-price"></img>

                </div>)
    }
    
}

export default Product