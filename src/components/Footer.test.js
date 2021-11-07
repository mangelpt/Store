import { render, screen } from "@testing-library/react"
import { Footer } from "./Footer"


test('buttons exists', () => {
  render(<Footer />)
  const buttons = screen.getByRole('contentinfo')
  expect(buttons).toBeTruthy()
})
