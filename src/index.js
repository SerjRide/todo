import React from 'react';
import ReactDOM from 'react-dom';

const SearchPanel = () => {
    const searchText = 'search';
    const searchStyle = {
      fontSize: '25px'
    };
    return(
      <input
        style = { searchStyle }
        placeholder = { searchText } />
    );
}

const App = () => {

  const loginBox = <span>Log in plase1</span>;

  return (
    <div>
      { loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

const el = <App />;

ReactDOM.render(el,
  document.getElementById('root'));
