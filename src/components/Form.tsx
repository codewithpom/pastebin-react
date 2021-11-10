import React from "react"
import { PasteClient } from "pastebin-api";

type props = {};

type state = { value: string };

class Form extends React.Component<props, state>{
    constructor(props: props) {
        const client = new PasteClient("1IhgyKJAgZ1tU22pNQUV5DI4IPYrNmlL");
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
    handleChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        this.setState({value: event.target.value});

    }


    render(){
        return (
        <div className="container">
            <div className="form-group">
                <h1>
                    Put your text below
                </h1>            

                <textarea className="form-control" id="exampleFormControlTextarea3" rows={7} value={this.state.value} onChange={this.handleChange}>

                </textarea>

            </div>
        </div>
        )
    }
}


export default Form;