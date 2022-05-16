import { useCallback, useEffect, useState } from 'react'

export const useModalCloseByESC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    },
    [isModalOpen]
  )

  useEffect(() => {
    document.addEventListener('keydown', escFunction)
  }, [escFunction])
}
