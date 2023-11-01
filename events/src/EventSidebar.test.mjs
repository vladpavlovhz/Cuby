import { render, screen } from '@testing-library/svelte';
import EventSidebar from './EventSidebar.svelte';
render = require('@testing-library/svelte');
screen = require('@testing-library/svelte');
EventSidebar = require('./EventSidebar.svelte');

describe('EventSidebar', () => {
  // Define your mock events
  const mockEvents = [
    {
      title: 'Event 1',
      date: '2023-11-01',
      time: '10:00 AM',
      location: 'Event Location 1',
      description: 'Description 1',
    },
    {
      title: 'Event 2',
      date: '2023-11-02',
      time: '2:00 PM',
      location: 'Event Location 2',
      description: 'Description 2',
    },
    // Add more mock events as needed
  ];

  beforeEach(() => {
    render(EventSidebar, {
      props: {
        mockEvents, // Pass your mock events as a prop
      },
    });
  });

  it('should render each event with necessary elements', () => {
    mockEvents.forEach((event) => {
      // Use screen queries to find elements
      const eventTitle = screen.getByText(event.title);
      const eventDateTime = screen.getByText(`${event.date} at ${event.time}`);
      const eventLocation = screen.getByText(event.location);
      const eventDescription = screen.getByText(event.description);

      // Assert the elements are present
      expect(eventTitle).toBeInTheDocument();
      expect(eventDateTime).toBeInTheDocument();
      expect(eventLocation).toBeInTheDocument();
      expect(eventDescription).toBeInTheDocument();
    });
  });
});
