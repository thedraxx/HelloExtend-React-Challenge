import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavigatorScreen from './navigator/NavigatorScreens'
import { SearchProvider } from './context/SearchProvider'
import { AnimalFavsProvider } from './context/AnimalFavs/AnimalFavsProvider'


const App = () => {
  return (
    <AppState>
      <AnimalsState>
        <BrowserRouter>
          <NavigatorScreen />
        </BrowserRouter>
      </AnimalsState>
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return <SearchProvider>{children}</SearchProvider>;
};

const AnimalsState = ({ children }: any) => {
  return <AnimalFavsProvider>{children}</AnimalFavsProvider>;
};

export default App