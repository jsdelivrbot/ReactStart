

	
import React, { Component} from "react";

export default class Header extends Component {
    

    render() {
        return (
            <div className="redBckg">
                <h1>{this.props.message}</h1>
            </div>
        );
    }
}