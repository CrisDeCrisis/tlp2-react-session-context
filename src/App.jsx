import React from 'react'
import { SessionProvider } from './contexts/authProvider.jsx'
import { Toaster } from 'react-hot-toast'
import AppView from './views/AppView'

const App = () => {
  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <SessionProvider>
        <AppView />
      </SessionProvider>
    </>
  )
}

export default App