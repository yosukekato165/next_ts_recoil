import { atom } from 'recoil'

export type Todos = {
  todos: string[]
}

export const textState = atom<Todos>({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: {
    todos: []
  } // default value (aka initial value)
})
