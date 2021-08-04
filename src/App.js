import React, {Component} from 'react';
import './App.css';
import Header from './composents/Header';
import AddCatalogue from './containers/AddCatalogue';
import Catalogue from './containers/Catalogue';

/***
 * Maintains catalog status. It delete or add a new product. 
 * The class increases or decreases the quantities.
 */
class App extends Component{
  state = {
    catalogue : [
      {id:0, name: 'Classeur bleu', ref:'Hx048', quantity:10, comment:'Format A4. Pour feuilles perforés. 4 anneaux.'},
      {id:1, name: 'Chemise jaune', ref:'Hx049', quantity:20, comment:'Format A4. Fermeture élastique.'},
      {id:2, name: 'Stylo à encre gel', ref:'Hx050', quantity:0, comment:'Pas besoin de cartouche pour l\'utiliser.'},
      {id:3, name: 'Papiers pour imprimante.', ref:'Hx060', quantity:1, comment:'Papier au format A4.'}
    ]
  }

  

  handleDeleteProduct = (id) => {
    const newCatalogue = [...this.state.catalogue];
    let indexTab;
    newCatalogue.forEach((value, index) => {if(id===value.id)return indexTab=index;});
    newCatalogue.splice(indexTab, 1);
    this.setState({catalogue: newCatalogue});
  }
  handleAddProduct = (id) => {
    const newCatalogue = [...this.state.catalogue];
    let indexTab;
    newCatalogue.forEach((value, index) => {if(id===value.id)return indexTab=index;});
    newCatalogue[indexTab].quantity++;
    this.setState({catalogue: newCatalogue});
  }
  handleSubProduct = (id) => {
    const newCatalogue = [...this.state.catalogue];
    let indexTab;
    newCatalogue.forEach((value, index) => {if(id===value.id)return indexTab=index;});
    if(newCatalogue[indexTab].quantity>0)newCatalogue[indexTab].quantity--;
    this.setState({catalogue: newCatalogue});
  }
  handleNewProduct = (e) => {
    e.preventDefault()
    const newCatalogue = [...this.state.catalogue];
    const newId = ()=>{
      let id=0;
      for(let i=0; i<newCatalogue.length;i++){
        if(id<newCatalogue[i].id){
          id = newCatalogue[i].id;
        }
      }
      return ++id;
    }
    const form = document.querySelector('form');
    const name = document.getElementById('name');
    const ref = document.getElementById('ref');
    const quantity = document.getElementById('quantity');
    const comment = document.getElementById('comment');
    const errorMessage = document.getElementById('errorMessage');
    let message = '';
    const testRefExist = (ref) => {
      let exist = false;
      for(let i=0; i< newCatalogue.length;i++){
        if(newCatalogue[i].ref === ref){
          exist=true;
        } 
      }      
      return exist;
    }    
    const refExist = testRefExist(ref.value);

    if(name.value!=='' && ref.value !=='' && !refExist && quantity.value!==''){
      newCatalogue.push({
        id: newId(),
        name: name.value, 
        ref: ref.value, 
        quantity: quantity.value, 
        comment: comment.value
      });
      this.setState({catalogue: newCatalogue});
      errorMessage.textContent = '';
      form.reset();
    }else{
        let codeError = 0;
        if(name.value === ''){
          message = 'Remplir le champ Nom.';
          codeError++;
        }
        if(ref.value === ''){
          if(codeError===1){
            message = 'Remplir les champs Nom et Référence.';
            codeError = 11;
          }else{
            message = 'Remplir le champ Référence.';
            codeError = 2;
          }
          
        }
        if(quantity.value === ''){
          if(codeError===11){
            message = 'Remplir les champs Nom, Référence et Quantité.';
          }else if(codeError===2){
            message = 'Remplir les champs Référence et Quantité.';
          }else if(codeError===1){
            message = 'Remplir les champs Nom et Quantité.';
          }else{
            message = 'Remplir le champ Quantité.';
          }
        }
        if(refExist){message+=message.length>0?' La référence existe déjà.':'La référence existe déjà.';}
        errorMessage.textContent = message;
    }    
  }

  render(){
    return (
      <div className="App">
        <Header />
        <AddCatalogue addNewProduct={this.handleNewProduct}/>
        <Catalogue {...this.state} delete={this.handleDeleteProduct} addProduct={this.handleAddProduct} 
        subProduct={this.handleSubProduct} />
      </div>
    );
  }
}

export default App;
