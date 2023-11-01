const myFunction = require('./EventSidebar.svelte');

test('Function snapshot test', () => {
  const result = myFunction(); // Call the function you want to test

  // Use the toMatchSnapshot matcher to capture and compare the snapshot
  expect(result).toMatchSnapshot();
});