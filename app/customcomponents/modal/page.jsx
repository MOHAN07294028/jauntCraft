
'use client'

import { Modal, Button } from 'antd'
import { useState, useCallback } from 'react'

const useGlobalModal = () => {
  const [modal, setModal] = useState({
    open: false,
    type: 'info',
    title: '',
    description: '',
    onOk: null,
  })

  const closeModal = useCallback(() => {
    setModal((prev) => ({
      ...prev,
      open: false,
    }))
  }, [])

  const showModal = useCallback(
    (type, title, description, onOk = null) => {
      setModal({
        open: true,
        type,
        title,
        description,
        onOk,
      })
    },
    []
  )

  const handleOk = () => {
    const callback = modal.onOk

    closeModal()

    if (typeof callback === 'function') {
      callback()
    }
  }

  const contextHolder = (
    <Modal
      open={modal.open}
      title={modal.title}
      onCancel={closeModal}
      centered
      closable
      footer={[
        <Button
          key="ok"
          type="primary"
          onClick={handleOk}
        >
          OK
        </Button>,
      ]}
    >
      <p>{modal.description}</p>
    </Modal>
  )

  return {
    contextHolder,
    showModal,
    closeModal,
  }
}

export default useGlobalModal
