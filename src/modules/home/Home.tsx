/*
 * @Author: Marshall
 * @Date: 2023-12-09 17:51:20
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-10 00:14:34
 * @Description:
 * @FilePath: /wuxian-rn-template/src/modules/home/Home.tsx
 */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {Button} from '@ant-design/react-native';
import {test} from '../../api';
import Config from 'react-native-config';

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
    <ScrollView style={styles.container}>
      <Text>Hello Wuxian!</Text>
      <Text>接口请求结果:{content}</Text>
      <Text>环境变量:{Config.APP_BASE_URL}</Text>
      <Button type="primary">按钮</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
