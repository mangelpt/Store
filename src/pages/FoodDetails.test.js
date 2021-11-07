import { render, screen } from "@testing-library/react"
import { FoodDetails } from "./FoodDetails"


describe("Food Details component", () => {

  test('render food title', () => {
    render(<FoodDetails />)
    const food_title = screen.getByText(/chicken spagetti/i)
    expect(food_title).toBeInTheDocument()
  })

  test('render add to cart button', () => {
    render(<FoodDetails />)
    const button = screen.getByRole('button', {
      name: /add to cart/i
    })

    expect(button).toBeTruthy()
  })
})

