import React from 'react';

var Divider = React.createClass({
    render: function() {
        return (
            <div className="divider">
            <h2>{this.props.children}</h2><hr />
            </div>    
        )    
    }        
});

export default Divider;
