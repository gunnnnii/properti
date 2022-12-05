import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Home from '@/pages/index'
import { toRoman } from '@/core/toRoman'

describe('Home', () => {
  it('renders an interactive conversion input', async () => {
    render(<Home />)
    // since the input has type number, its role is 'spinbutton'
    // see: https://stackoverflow.com/a/72921806
    const input = screen.getByRole('spinbutton', { name: 'The integer:' })
    // start by checking whether the input has been focused automatically
    expect(input).toBe(document.activeElement)

    // make sure the converted value is displayed on the screen
    // (assume the toRoman function is correct. it has its own unit tests)
    let inputValue = '123'
    await user.keyboard(inputValue)
    expect(input).toBe(screen.getByDisplayValue(inputValue))
    expect(screen.getByText(toRoman(+inputValue))).toBeInTheDocument()
    await user.clear(input)

    // make sure the correct messages are displayed on invalid inputs
    inputValue = '-10'
    await user.keyboard(inputValue)
    expect(input).toBe(screen.getByDisplayValue(inputValue))
    expect(screen.getByText('The number is too small.')).toBeInTheDocument()
    await user.clear(input)

    inputValue = '4000'
    await user.keyboard(inputValue)
    expect(input).toBe(screen.getByDisplayValue(inputValue))
    expect(screen.getByText('The number is too large.')).toBeInTheDocument()
    await user.clear(input)
  })
})
