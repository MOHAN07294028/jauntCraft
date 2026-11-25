
'use client'

import { notification } from 'antd'
import { useCallback } from 'react'

const useGlobalNotification = () => {
  const [api, contextHolder] = notification.useNotification()

  const showNotification = useCallback(
    (type, title, description) => {
      api[type]({
        title: title,
        description,
        placement: 'topRight',
        duration: 4,
      })
    },
    [api]
  )

  return {
    contextHolder,
    showNotification,
  }
}

export default useGlobalNotification
