import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './src/pages/Home';
import Task from './src/pages/Task';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task,
  })
)

export default function App() {
  return <Routes />
}
