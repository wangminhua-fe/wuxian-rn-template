/*
 * @Author: Marshall
 * @Date: 2023-12-09 17:51:20
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-09 22:23:23
 * @Description:
 * @FilePath: /wuxian-rn-template/src/modules/home/Home.tsx
 */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@ant-design/react-native';
import {test} from '../../api';

export default () => {
  const [content, setContent] = useState('');
  const apiTest = async () => {
    const res = await test();
    setContent(JSON.stringify(res));
  };

  useEffect(() => {
    apiTest();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello Wuxian!</Text>
      <Text>接口请求结果:{content}</Text>
      <Button type="primary">按钮</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
