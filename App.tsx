/*
 * @Author: Marshall
 * @Date: 2023-12-09 12:37:44
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-09 19:35:25
 * @Description:
 * @FilePath: /wuxian-rn-template/App.tsx
 */
import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/modules/home/Home';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
}

export default App;
