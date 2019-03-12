import {combineReducers} from 'redux';
import books from './books.json';

const bookListReducer=(oldBookList=books,action)=>{
    if(action.type==='ADD_BOOK'){
        return [...oldBookList,action.payload];
    }else if(action.type==='DELETE_BOOK'){
        return oldBookList.filter(oldBook=>oldBook.title!==action.payload.title)
    }
    return oldBookList;
}

const selectedBookReducer=(oldSelectedBook={},action)=>{
    if(action.type==='SELECT_BOOK'){
        return action.payload;
    }else if(action.type==='DESELECT_BOOK'){
        return {};
    }else if(action.type==='DELETE_BOOK'){
        return oldSelectedBook.isbn===action.payload.isbn?{}:oldSelectedBook;
    }
    return oldSelectedBook;
}

export default combineReducers({
    bookList:bookListReducer,
    selectedBook:selectedBookReducer
});