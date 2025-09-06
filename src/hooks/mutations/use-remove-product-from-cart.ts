import { useMutation, useQueryClient } from "@tanstack/react-query";

import { removeProductFromCart } from "@/actions/remove-cart-product";

import { CART_QUERY_KEY } from "../queries/use-cart";

export const REMOVE_PRODUCT_FROM_CART_MUTATION_KEY = (cartItemId: string) =>
  ["remove-cart-product", cartItemId] as const;

export const useRemoveProductFromCart = (cartItemId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: REMOVE_PRODUCT_FROM_CART_MUTATION_KEY(cartItemId),
    mutationFn: () => removeProductFromCart({ cartItemId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
    },
  });
};
