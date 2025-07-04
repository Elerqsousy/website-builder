import React from 'react'

type ToastProps = {
  message: string
  type?: 'success' | 'error' | 'info'
}

const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => {
  let className = 'animate-fadeInToast fixed bottom-6 right-6 z-[1000] px-4 py-2 rounded shadow'
  if (type === 'success')
    className += ' animate-fadeInSuccess text-green-800 bg-green-50 border border-green-200'
  if (type === 'error')
    className += ' animate-shakeError text-red-700 bg-red-50 border border-red-200'
  return <div className={className}>{message}</div>
}

export default Toast
