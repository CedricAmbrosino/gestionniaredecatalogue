import React from 'react';

/***
 *  create one component of the catalog products.
 */
const Product = (props) => {
    const styleLine = () => {
        if(props.item.quantity===0){
            const style = {
                border : '3px solid var(--colorRed)'
            }
            return style;
        }else{
            const style = {
                border : '3px solid var(--colorGreyBlack)'
            }
            return style;
        }
    }
    return (
        <div className="catalogueSection_content_element">
            <div className="catalogueSection_content_element_line" style={styleLine()}></div>
            <div className="catalogueSection_content_element_title">
                <div>
                    <span className="btn btnCross" onClick={()=>props.delete(props.item.id)}>x</span>
                    <h2>{props.item.name}</h2>
                </div>
                <p>Quantité : {props.item.quantity}</p>                
            </div>
            <div className="catalogueSection_content_quantity">
                <p>Réf : {props.item.ref}</p>
                <div>
                    <span className="btn btnProduct" onClick={()=>props.subProduct(props.item.id)}>-</span>
                    <span className="btn btnProduct" onClick={()=>props.addProduct(props.item.id)}>+</span>
                </div>
            </div>  
            <p>{props.item.comment}</p>
        </div>
    );
};

export default Product;