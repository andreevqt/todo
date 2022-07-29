import React from 'react';

type THeaderProps = {
  value: string;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({
  value,
  handleKeyDown,
  handleChange
}: THeaderProps) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        placeholder="What needs to be done?"
        className="new-todo"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </header>
  );
};

export default Header;
