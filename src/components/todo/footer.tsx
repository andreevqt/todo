import React from 'react';
import clsx from 'clsx';

type TFooterProps = {
  left: number;
  currentFilter: string;
  onFilterChange: (name: string) => void;
  onClearClick: (e: React.SyntheticEvent) => void;
  filters: string[];
  hasCompleted?: boolean;
};

const Footer = ({
  left,
  filters,
  currentFilter,
  onFilterChange,
  onClearClick,
  hasCompleted = false
}: TFooterProps) => {
  const handleClick = (name: string) => (e: React.SyntheticEvent) => {
    e.preventDefault();
    onFilterChange(name);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{left}</strong>
        <span> </span>
        <span>items</span>
        <span> left</span>
      </span>
      <ul className="filters">
        {
          filters.map((filter, idx) => (
            <li key={idx}>
              <a
                href="#"
                className={clsx({ selected: filter === currentFilter })}
                onClick={handleClick(filter)}
              >
                {filter}
              </a>
            </li>
          ))
        }
      </ul>
      {
        hasCompleted && (
          <button
            data-testid="clear"
            onClick={onClearClick}
            className="clear-completed"
            type="button"
          >
            Clear completed
          </button>
        )
      }
    </footer>
  );
};

export default Footer;
