import React, { Component} from 'react';
import { connect} from 'react-redux';

class BookDetail extends Component{
	render(){
		if (!this.props.book){
			return <div>
			<h2 id="number">25</h2>
			</div>;
		}
	

return(
				<div className="show">
				<div id="content">{this.props.book.pages}</div>
				<img src={this.props.book.src}/>
				</div>
			);
	}
}

function mapStateToProps(state){
	return{
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);


