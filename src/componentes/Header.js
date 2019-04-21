import React from 'react';
import '../css/main.css';
import '../css/bootstrap.min.css';

const Header = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>{props.titulo}</h1>
                 </div>
                 
            </div>
            
        </div>
    )


}

export default Header;