import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: ({ itens }, action: PayloadAction<Produto>) => {
      const produto = action['payload']

      if (itens.find(({ id }) => id === produto['id'])) {
        alert('Item já adicionado')
      } else {
        itens.push(produto)
      }
    },
    favoritar: ({ favoritos }, action: PayloadAction<Produto>) => {
      const produto = action['payload']

      if (favoritos.find(({ id }) => id === produto['id'])) {
        const remove = favoritos.findIndex(
          (item) => item['id'] === produto['id']
        )
        if (remove > -1) {
          favoritos.splice(remove, 1)
        }
      } else {
        favoritos.push(produto)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice['actions']
export default carrinhoSlice['reducer']
