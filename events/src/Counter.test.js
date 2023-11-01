import { render } from '@testing-library/svelte';
import Counter from './Counter.svelte';

it('matches snapshot', () => {
  const { container } = render(Counter);
  expect(container).toMatchSnapshot();
});
