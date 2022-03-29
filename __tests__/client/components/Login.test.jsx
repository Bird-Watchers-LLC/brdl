import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../../client/redux/store';
import Login from '../../../client/react/components/Login';

describe('Login testing suite.', () => {
  const props = {
    loginGet: true,
    username: 'me',
    password: '1234',
    validLogin: undefined,
    mode: 'prod'
  }
  beforeEach(() => render(
    <Provider store={store}>
      <Login username={'me'} props={props} />
    </Provider>
  ));

  test('Renders the Profile Container', () => {
    expect(screen).toBeTruthy();
  })

  test('Header exists.', () => {
    expect(screen.queryByTestId('header')).toBeDefined();
  })

  test('Header contains an h1 and p tag', () => {
    const children = screen.queryByTestId('header').childNodes;
    expect(children[0].nodeName).toBe('H1');
    expect(children[1].nodeName).toBe('P');
  })

  test('Form exists', () => {
    expect(screen.queryByTestId('form')).toBeDefined();
  })

  test('Form has two labels, a button, and a p tag', () => {
    const children = screen.queryByTestId('form').childNodes;
    expect(children[0].nodeName).toBe('LABEL');
    expect(children[1].nodeName).toBe('LABEL');
    expect(children[2].nodeName).toBe('BUTTON');
    expect(children[3].nodeName).toBe('P');
  })

  test('Form button submits the form data', () => {
    const children = screen.queryByTestId('form').childNodes;
    expect(children[2].type).toBe('submit');
  })

  test('Form has a username input', () => {
    const input = screen.getByText('Username:').nextSibling;
    expect(input.type).toBe('text');
    expect(input.placeholder).toBe('enter username');
  })

  test('Form has a password input', () => {
    const input = screen.getByText('Password:').nextSibling;
    expect(input.type).toBe('password');
    expect(input.placeholder).toBe('enter password');
  })
})