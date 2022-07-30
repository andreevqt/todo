import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import TodoList from './todo-list';
import userEvent from '@testing-library/user-event';
import { UserEvent } from '@testing-library/user-event/dist/types/setup';

describe('TodoList component', () => {
  let user: UserEvent;

  beforeEach(() => {
    render(<TodoList />);
    user = userEvent.setup();
  });

  it('displays two todo items by default', () => {
    const elements = screen.getAllByTestId('item');
    expect(elements.length).toBe(2);

    expect(elements[0].textContent).toBe('Pay electric bill');
    expect(elements[1].textContent).toBe('Walk the dog');
  });

  it('can add new todo items', async () => {
    const newTodo = screen.getByTestId<HTMLInputElement>('new-todo');
    const newItem = 'Feed the cat';

    await user.type(newTodo, `${newItem}{enter}`);

    const elements = screen.getAllByTestId('item');
    expect(elements.length).toBe(3);
    expect(elements[2].textContent).toBe(newItem);
  });

  it('can check off an item as completed', async () => {
    const item = screen.getByText('Pay electric bill');
    const checkbox = item.parentElement?.querySelector<HTMLInputElement>('input[type="checkbox"]');
    expect(checkbox).toBeTruthy();

    // @ts-ignore
    await user.click(checkbox);

    const li = item.closest('li');
    expect(li?.classList.contains('completed')).toBe(true);
  });

  describe('with a checked task', () => {
    beforeEach(async () => {
      const el = screen.getByText('Pay electric bill');
      const checkbox = el.parentElement?.querySelector<HTMLInputElement>('input[type="checkbox"]');
      // @ts-ignore;
      await user.click(checkbox);
    });

    it('can filter for uncompleted tasks', async () => {
      const active = screen.getByText('Active');
      await user.click(active);

      const elements = screen.getAllByTestId('item');
      expect(elements.length).toBe(1);

      expect(screen.queryAllByTestId('Pay electric bill')).toEqual([]);
    });

    it('can filter for completed tasks', async () => {
      const completed = screen.getByText('Completed');
      expect(completed).toBeTruthy();

      await user.click(completed);

      const elements = screen.getAllByTestId('item');
      expect(elements.length).toBe(1);

      expect(elements[0].textContent).toBe('Pay electric bill');
    });

    it('can delete all completed tasks', async () => {
      const clear = screen.getByTestId('clear');
      await user.click(clear);

      const elements = screen.getAllByTestId('item');
      expect(elements.length).toBe(1);
      expect(elements).not.toEqual(expect.arrayContaining([expect.objectContaining({
        textContent: 'Pay electric bill'
      })]));
    });
  });
});
