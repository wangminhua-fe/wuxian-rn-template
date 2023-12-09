/*
 * @Author: Marshall
 * @Date: 2023-12-09 17:51:20
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-09 19:35:12
 * @Description:
 * @FilePath: /wuxian-rn-template/src/modules/home/Home.tsx
 */
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@ant-design/react-native';
import {test} from '../../api';

export default () => {
  const apiTest = async () => {
    const res = await test();
    console.log('请求结果：', res);
  };
  useEffect(() => {
    apiTest();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello Wuxian!</Text>
      <Button type="primary">按钮</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
