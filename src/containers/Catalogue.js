import React, {Component} from 'react';
import Product from '../composents/Product';
import './Catalogue.css';

/***
 * Sort the catalogue of element by references. 
 * Call elementes one by one in order.
 */

class Catalogue extends Component{
    render(){
        return(
            <section className="catalogueSection">
                <div className="catalogueSection_content">
                    {this.props.catalogue.sort((a,b)=>{return a.ref.localeCompare(b.ref)}).map(item => {
                        return (
                            <Product item={item} key={item.id} delete={this.props.delete} addProduct={this.props.addProduct} 
                            subProduct={this.props.subProduct} />
                        );                       
                    })}                    
                </div>
            </section>
        );
    }
}

export default Catalogue;