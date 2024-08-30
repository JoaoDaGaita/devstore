'use client'
import { useCart } from '@/contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
}
export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full text-white font-semibold bg-emerald-600 hover:bg-emerald-600/85"
    >
      Adicionar ao carrinho
    </button>
  )
}
