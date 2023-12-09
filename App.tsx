/*
 * @Author: Marshall
 * @Date: 2023-12-09 12:37:44
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-09 19:49:02
 * @Description:
 * @FilePath: /wuxian-rn-template/App.tsx
 */
import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/modules/home/Home';
import {Provider} from '@ant-design/react-native';
import custom from './src/theme/custom';

function App(): React.JSX.Element {
  return (
    <Provider theme={custom}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
