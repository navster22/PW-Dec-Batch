import { Component } from "react";

class SubHeader extends Component{
    render() {
        return (
            <>
             This is subheader for {this.props.name}
            </>
        )
    }
}

export default SubHeader;