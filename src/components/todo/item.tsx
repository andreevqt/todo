import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { TTodoItem } from '../../types/common';

type TItemProps = {
  item: TTodoItem;
  onBlur: () => void;
  onDoubleClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDestroy: (e?: React.SyntheticEvent) => void;
  onToggle: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

const Item = ({
  item,
  onBlur,
  onDoubleClick,
  onChange,
  onDestroy,
  onToggle,
}: TItemProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (item.editing) {
      inputEl.current?.focus();
    }
  }, [item.editing]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code == 'NumpadEnter') {
      onBlur();
    }
  };

  return (
    <li
      className={clsx({ completed: item.completed, editing: item.editing })}
      data-testid="item"
    >
      <div className="view">
        <input
          checked={item.completed}
          type="checkbox"
          className="toggle"
          onChange={onToggle}
        />
        <label onDoubleClick={onDoubleClick}>{item.title}</label>
        <button
          type="button"
          className="destroy"
          onClick={onDestroy}
        />
      </div>
      <input
        ref={inputEl}
        className="edit"
        type="text"
        value={item.title}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
};

export default Item;
