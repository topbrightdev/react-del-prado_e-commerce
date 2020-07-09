import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Breadcrumb extends Component {
    render (){
        const {title, parent} = this.props;
        return (
            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="page-title">
                                <h2>{title}</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Home</Link></li>
                                    {parent?
                                    <li className="breadcrumb-item" aria-current="page">{parent}</li>:''}
                                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Breadcrumb;