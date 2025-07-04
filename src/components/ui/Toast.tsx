import React from 'react'

type ToastProps = {
  message: string
  type?: 'success' | 'error' | 'info'
}

const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => {
  let className = 'toast-animated'
  if (type === 'success') className += ' success-feedback'
  if (type === 'error') className += ' shake-error'
  return (
    <div className={className} style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
      {message}
    </div>
  )
}

export default Toast
