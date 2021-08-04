import React, {Component} from 'react';
import './AddCatalogue.css';

/**
 *  manages the form.
*/

class AddCatalogue extends Component{
    state = {valueQuantity: ''}

    handleChangeQuantity(e){
        if(!isNaN(e.target.value) && !e.target.value.includes('.') ){
            this.setState({valueQuantity: e.target.value});
        }
        if(e.target.value===''){
            this.setState({valueQuantity: e.target.value});
        }        
    }

    handleReset(){        
        this.setState({valueQuantity: ''});
    }

    render(){
        return (
            <section className="addProductSection" >
                    <div className="addProductSection_content">
                        <h2>Ajouter un produit au catalogue</h2>
                        <form>
                            <div>
                                <label htmlFor='name' className="labelsRequired" >Nom</label>
                                <input type='text' id='name' name='name' maxLength='25' autoComplete="off" required />
                                <label htmlFor='ref' className="labelsRequired">Référence</label>
                                <input type='text' id='ref' name='ref' maxLength='25' autoComplete="off" required />
                                <label htmlFor='quantity' className="labelsRequired">Quantité</label>
                                <input type='text' value={this.state.valueQuantity} onChange={(e)=>this.handleChangeQuantity(e)} id='quantity' name='quantity' maxLength='4' autoComplete="off" required />
                            </div>
                            <div>
                                <label htmlFor='comment'>Commentaire</label>
                                <textarea id='comment' name='comment' maxLength='297'></textarea>
                            </div>                        
                            <p id='errorMessage'></p>
                            <input type='submit' value="Ajouter" className="btn" onClick={(e)=>{this.props.addNewProduct(e);this.handleReset();}}/>
                        </form>
                    </div>
            </section>
        );
    }
    
}

export default AddCatalogue;
