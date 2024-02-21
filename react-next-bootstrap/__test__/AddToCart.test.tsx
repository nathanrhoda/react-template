import {render, screen} from '@testing-library/react'
import AddToCart from '@/app/components/AddToCart'

it('should render AddToCart', () => {
    render(<AddToCart />)
    expect(screen.getByText('Add to Cart')).toBeInTheDocument()
    // screen.debug()
})