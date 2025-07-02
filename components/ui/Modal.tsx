import React from 'react'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null
  return (
    <div
      className="backdrop-animated"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.2)',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        className="modal-animated"
        style={{
          background: '#fff',
          borderRadius: 8,
          maxWidth: 400,
          margin: '10vh auto',
          padding: 24,
          position: 'relative',
          zIndex: 1001,
        }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
