import React from "react";
import './App.css'
class PageHeader extends React.Component{
    render() {
        return (
            <div className="page-header">
                <h1><span className="border-bottom">{this.props.header}</span></h1>
            </div>
        )
    }
}
export default PageHeader


