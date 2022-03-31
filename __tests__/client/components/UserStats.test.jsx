import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../../client/redux/store';
import UserStats from '../../../client/react/components/UserStats';
import * as types from '../../../client/redux/constants/actionTypes';

describe('userStats testing suite.', () => {
  const birds = [{ sciName: 'a', }, { sciName: 'b' }, { sciName: 'c' }]
  beforeEach(() => render(
    <Provider store={store}>
      <UserStats />
    </Provider>
  ));

  test('Renders the User Stats page', () => {
    expect(screen).toBeDefined();
  })

  test('Should have an h2 tag', () => {
    expect(screen.getByTestId('div').childNodes[0].nodeName).toBe('H2');
  })

  test('Should say how many birds are in area', () => {
    expect(screen.getByTestId('div').childNodes[0].innerHTML.includes('0')).toBeTruthy();
  })

  test('Should update how many birds are in area', () => {
    store.dispatch({ type: types.UPDATE_LOCAL_BIRDS, payload: birds });
    expect(screen.getByTestId('div').childNodes[0].innerHTML.includes('3')).toBeTruthy();
  })

  test('Should update how many birds have been seen', () => {
    store.dispatch({ type: types.UPDATE_SEEN_BIRDS, payload: [...birds, { sciName: 'd' }] });
    store.dispatch({ type: types.UPDATE_LOCAL_BIRDS, payload: birds });
    expect(screen.getByTestId('div').childNodes[0].innerHTML.includes('4')).toBeTruthy();
  })
})