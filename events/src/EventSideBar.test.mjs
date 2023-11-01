// EventsSidebar.test.mjs
import { render } from '@testing-library/svelte';
import EventsSidebar from './EventsSidebar.svelte';
import mockEvents from './mockData.js';

test('EventsSidebar displays events correctly', () => {
  const { getByText } = render(EventsSidebar, { props: { events: mockEvents } });

  // Verify that the component displays event titles from the mock data
  mockEvents.forEach(event => {
    expect(getByText(event.title)).toBeInTheDocument();
  });
});




// const myFunction = require('./EventSidebar.svelte');

// test('Function snapshot test', () => {
//   const result = myFunction(); // Call the function you want to test

//   // Use the toMatchSnapshot matcher to capture and compare the snapshot
//   expect(result).toMatchSnapshot();
// });