import React,{Component} from 'react';
class Inter extends Component {//une class qui va hérité de component
state={//la class va avoir state
   label:"world",
   children:"ici on test les composents class",
  
   
}
_updateLabel = () => 
this.setState({label:this.props.label})//on va créé une methode de class qui va changer le state,setState methode hérité de component et qui permet de modifier les states

changeViaInput = (e)=>{
    this.setState({
      label:e.target.value
    })
  }

    render = () => {//obligatoire avec class pour rendre le jsx
        const {label}=this.state
        return (
            <div className="styleF">
                <h1>Hello {label}</h1>
                 <p>{this.state.children}</p>
                <button onClick={this._updateLabel}>click</button>
                <br/><input type='text' onChange={this.changeViaInput} value={this.state.label}></input>
                
            </div>
        )
    }//dans le boutton a mis l'évènement onClick qui fait appel à notre fonction avec le this
}


export default Inter;

