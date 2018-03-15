import React, { Component } from 'react'


let horizontalSeparatorStyle = {
    margin: '80px auto',
    width: '70%',
    borderTop: 'none',
    borderBottom: '1px solid #e7e7e7'
}
class HorizontalSeparator extends Component {
    render() {
        return (
            <hr style={{ ...horizontalSeparatorStyle }} />
        );
    }
}

export default HorizontalSeparator