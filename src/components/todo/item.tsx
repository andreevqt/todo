import React from 'react';
import { TTodoItem } from '../../types/common';

type TItemProps = {
  item: TTodoItem
  onDestroy: (e?: React.SyntheticEvent) => void;
  onToggle: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

const Item = ({
  item,
  onDestroy,
  onToggle
}: TItemProps) => {
  return (
    <li>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          onChange={onToggle}
        />
        <label>{item.title}</label>
        <button
          type="button"
          className="destroy"
          onClick={onDestroy}
        />
      </div>
    </li>
  );
};

export default Item;
