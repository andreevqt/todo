import React from 'react';

const App = () => {
  return (
    <section className="todoapp">
      <div>
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" />
        </header>
        <section className="main">
          <input id="toggle-all" type="checkbox" className="toggle-all" />
          <label htmlFor="toggle-all" />
          <ul className="todo-list">
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>123123</label>
                <button className="destroy" type="button"></button>
              </div>
              <input className="edit" value="123123" />
            </li>
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>123123</label>
                <button className="destroy" type="button"></button>
              </div>
              <input className="edit" value="123123" />
            </li>
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>123123</label>
                <button className="destroy" type="button"></button>
              </div>
              <input className="edit" value="123123" />
            </li>
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>1</strong>
            <span> </span>
            <span>item</span>
            <span> left</span>
          </span>
          <ul className="filters">
            <li>
              <a href="#/" className="selected">All</a>
            </li>
            <span> </span>
            <li>
              <a href="#/active" className="">Active</a>
            </li>
            <span> </span>
            <li>
              <a href="#/completed" className="">Completed</a>
            </li>
          </ul>
          <button className="clear-completed" type="button">Clear completed</button>
        </footer>
      </div>
    </section>
  );
};

export default App;
