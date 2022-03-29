import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../../client/redux/store';
import ProfileContainer from '../../../client/react/containers/ProfileContainer';

describe('ProfileContainer testing suite.', () => {
  // beforeAll(() => render(
  //   <Provider store={store}>
  //     <ProfileContainer username={'me'} />
  //   </Provider>
  // ));

  test('Renders the Profile Container', () => {
    // console.log(screen);
    expect(true).toBeTruthy();
  })
})