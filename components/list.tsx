import { FC } from 'react'

type Props = {
  list: string[]
}

export const List: FC<Props> = ({ list }) => {
  return (
    <ul>
      {list.map((e, i) => {
        return (
          <li key={i}>
            {i + 1}. {e}
          </li>
        )
      })}
    </ul>
  )
}
