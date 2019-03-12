import React, { Component } from "react";
import { connect } from "react-redux";
import bookItem from "../bookList/bookItem";
import {deselectBook} from '../../actions';

class BookDetail extends Component {
  renderContent() {
    const { selectedBook } = this.props;
    if (selectedBook.isbn) {
      return (
        <div className="ui cards">
          <div class="card">
            <div class="content">
              <div class="header">{selectedBook.title}</div>
              <div class="description">
               {selectedBook.description}
              </div>
            </div>
            <div class="ui bottom attached button" onClick={()=>{this.props.deselectBook()}}>
              
              Kitap seçiminden vazgeç
            </div>
          </div>
        </div>
      );
    }
    return <div>Seçili kitap yok.</div>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook
  };
};

export default connect(mapStateToProps,{deselectBook})(BookDetail);
