import React, { useState } from 'react';
import Item from './item';
import { TTodoItem } from '../../types/common';


const List = () => {

  const [items, setItems] = useState<TTodoItem[]>([]);

  const onToggle = () => {

  };

  const onDestroy = () => {

  };

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
            {
              items.map((item, idx) => (
                <Item
                  key={idx}
                  item={item}
                  onDestroy={onDestroy}
                  onToggle={onToggle}
                />
              ))
            }
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

export default List;
