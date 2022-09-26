import { render, screen } from '@testing-library/react';
import App from './App';

test('Affiche TAVERNIER', () => {
  render(<App />);
  const linkElement = screen.getByText(/tavernier/i);
  expect(linkElement).toBeInTheDocument();
});
test('Affiche Bruno', () => {
  render(<App />);
  const linkElement = screen.getByText(/bruno/i);
  expect(linkElement).toBeInTheDocument();
});
