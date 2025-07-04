import React from 'react'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null
  return (
    <div className="animate-fadeInBackdrop fixed inset-0 bg-black/20 z-[1000]" onClick={onClose}>
      <div
        className="animate-fadeInModal bg-white rounded-lg max-w-md mx-auto mt-[10vh] p-6 relative z-[1001]"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
