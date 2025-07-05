'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

import Toast from '@/components/ui/Toast'

type ToastType = 'success' | 'error' | 'info'

type ToastContextType = {
  toast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toaster, setToaster] = useState<{ message: string; type: ToastType } | null>(null)

  const toast = useCallback((message: string, type: ToastType = 'info') => {
    setToaster({ message, type })
    setTimeout(() => setToaster(null), 4000)
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {toaster && <Toast message={toaster.message} type={toaster.type} />}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used within a ToastProvider')
  return context
}
