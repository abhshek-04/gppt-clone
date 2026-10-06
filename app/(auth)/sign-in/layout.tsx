import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        {children}
        // check sample pr 
    </div>
  )
}

export default AuthLayout