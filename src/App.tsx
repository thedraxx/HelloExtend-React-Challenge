import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavigatorScreen from './navigator/NavigatorScreens'
import { SearchProvider } from './context/SearchProvider'


const App = () => {
  return (
    <AppState>
      <BrowserRouter>
        <NavigatorScreen />
      </BrowserRouter>
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return <SearchProvider>{children}</SearchProvider>;
};

export default App