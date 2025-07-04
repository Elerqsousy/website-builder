import React from 'react'

import { cn } from '@/utils/tw-clsx'

type ToastProps = {
  message: string
  type?: 'success' | 'error' | 'info'
}

const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => {
  return (
    <div
      className={cn('animate-fadeInToast fixed top-6 right-6 z-[1000] px-4 py-2 rounded shadow', {
        ' animate-fadeInSuccess text-green-800 bg-green-50 border border-green-200':
          type === 'success',
        ' animate-shakeError text-red-700 bg-red-50 border border-red-200': type === 'error',
      })}
    >
      {message}
    </div>
  )
}

export default Toast
