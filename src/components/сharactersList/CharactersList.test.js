import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

import CharactersList from '.';
afterEach(cleanup);

describe('CharactersList', () => {
  test('render first 4 persons in screen', async () => {
    render(<CharactersList />);
    await waitFor(() => {
      expect(screen.getByText(/Daenerys Targaryen/i)).toBeDefined();
    });
    await waitFor(() => {
      expect(screen.getByText(/Samwell Tarly/i)).toBeDefined();
    });
    await waitFor(() => {
      expect(screen.getByText(/Jon Snow/i)).toBeDefined();
    });
    await waitFor(() => {
      expect(screen.getByText(/Arya Stark/i)).toBeDefined();
    });
  });

  test('when mount component displays persons if API succeeds', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve([
            {
              family: 'House Targaryen',
              firstName: 'Daenerys',
              fullName: 'Daenerys Targaryen',
              id: 0,
              image: 'daenerys.jpg',
              imageUrl: 'https://thronesapi.com/assets/images/daenerys.jpg',
              lastName: 'Targaryen',
              title: 'Mother of Dragons',
            },
          ]),
      })
    );
    render(<CharactersList />);
    await waitFor(() => {
      expect(screen.getByText(/Daenerys Targaryen/i)).toBeDefined();
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);

    global.fetch.mockClear();
  });

  test('when mount component displays persons if API failed', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        status: 500,
        json: () => Promise.resolve([]),
      })
    );
    render(<CharactersList />);
    await waitFor(() => {
      expect(screen.queryByText(/Daenerys Targaryen/i)).toBeNull();
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);

    global.fetch.mockClear();
  });
});
