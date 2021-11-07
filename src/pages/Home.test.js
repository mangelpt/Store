import { render, screen } from "@testing-library/react"
import { Home } from "./Home"

describe("Home component", () => {

  test('render images', () => {
    render(<Home />)
    const images = screen.getByRole('img', {
      name: /barquita taco/i
    })
    expect(images).toBeInTheDocument()
  })

  test('render buttons', () => {
    render(<Home />)
    const Buttons = screen.getByText(/snack/i)

    expect(Buttons).toBeTruthy()
  })


})

