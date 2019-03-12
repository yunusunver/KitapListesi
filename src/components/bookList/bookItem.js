import React,{Component} from "react";
import{connect} from 'react-redux';
import {selectBook,deleteBook} from '../../actions';

class BookItem extends Component{
    render(){
      const {book}=this.props;

      return (
        <div class="card">
          <div class="content">
            <div class="header">{book.title}</div>
            <div class="description">
              {book.description}
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <div class="ui basic green button" onClick={()=>{this.props.selectBook(book)}}>Seç</div>
              <div class="ui basic red button" onClick={()=>{this.props.deleteBook(book)}}>Kitabı Sil</div>
            </div>
          </div>
        </div>
      );
    }
  
}

export default connect(null,{selectBook,deleteBook})(BookItem);
