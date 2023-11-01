import { render } from '@testing-library/svelte';
import EventSidebar from './EventSidebar.svelte';

it('matches snapshot', () => {
  const { container } = render(EventSidebar);
  expect(container).toMatchSnapshot();
});
