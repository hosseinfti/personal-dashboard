import React, {Component} from "react";

class ListItem extends Component {
    render() {
        let styles = {};
        if(this.props.checked === true ) {
           styles = { 
               textDecoration: 'line-through',
               color: 'green'   
            }
        }
        return (
           <> 
            <div>
                <label style={styles}>
                <input type='checkbox' checked={this.props.checked} onChange={() => this.props.handleCheckboxChange(this.props.id)} />
                {this.props.content}
                </label>
                <button onClick={ () => this.props.handleDelete(this.props.id)} >حذف</button>
            </div>
           </> 
        );
    }
 
};
export default ListItem