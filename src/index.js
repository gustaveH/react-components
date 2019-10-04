import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Sam
          </a>
        </div>
        <div className='metadata'>
          <span className='date'>Today at 6:00PM</span>
        </div>
        <div>
          <div className='text'>Nice Blog post!</div>
        </div>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));