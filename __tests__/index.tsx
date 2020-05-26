import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

test(`renders the 'Next.js' link`, () => {
  render(<Home />)
  const linkElement = screen.getByText(/Next.js!/)
  expect(linkElement).toBeInTheDocument()
})
