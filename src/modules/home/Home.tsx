/*
 * @Author: Marshall
 * @Date: 2023-12-09 17:51:20
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-11 10:26:24
 * @Description:
 * @FilePath: /wuxian-rn-template/src/modules/home/Home.tsx
 */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  Keyboard,
  // PermissionsAndroid,
  // Vibration,
  // Linking,
  // PixelRatio,
  // BackHandler,
} from 'react-native';
import {Button} from '@ant-design/react-native';
import {test} from '../../api';
import Config from 'react-native-config';
import {
  useBackHandler,
  // useKeyboard
} from '@react-native-community/hooks';

export default () => {
  const [content, setContent] = useState('');
  const apiTest = async () => {
    const res = await test();
    setContent(JSON.stringify(res));
  };

  // 处理安卓返回键
  useBackHandler(() => {
    return true;
  });

  // const keyboard = useKeyboard();

  useEffect(() => {
    console.log(Platform.OS);
    console.log(Platform.Version);
    console.log(Platform.constants);

    // Linking
    // Linking.openURL('https://www.baidu.com/');
    // Linking.openURL('tel: 10086');
    // Linking.openURL('smsto: 10086');
    // Linking.openURL('mailto: 10086@qq.com');
    // Linking.openURL('应用schema：//host?参数名=');
    // Linking.openSettings();
    // Linking.sendIntent('', [{}]); // 安卓隐式跳转
    // Linking.getInitialURL(); // 获取初始化URL，从URL跳转进应用时使用

    // PixelRatio
    // console.log(PixelRatio.get()); // 获取屏幕像素比
    // console.log(PixelRatio.getFontScale()); // 获取字体比，安卓和ios不一致
    // console.log(PixelRatio.getPixelSizeForLayoutSize(200)); // 换算像素值
    // console.log(PixelRatio.roundToNearestPixel(32.1)); // 系统帮助计算像素值，用于处理误差导致的1px细线问题

    // BackHandler 安卓环境返回键 可用hooks处理
    // BackHandler.addEventListener('hardwareBackPress', backForAndroid);
    // BackHandler.exitApp();

    // 安卓权限校验
    // console.log(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN);
    // const needPermission = PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN;
    // PermissionsAndroid.check(needPermission).then(res => {
    //   console.log(res);
    //   if (!res) {
    //     // 申请权限，注意原生manifest注册权限
    //     // PermissionsAndroid.requestMultiple([]) // 申请多个权限
    //     PermissionsAndroid.request(needPermission).then(status => {
    //       console.log(status);
    //       if (status === 'granted') {
    //       } else if (status === 'denied') {
    //       }
    //     });
    //   }
    // });

    // 震动 VIBRATE, IOS单次400ms，android可指定时长
    // Vibration.vibrate();
    // Vibration.vibrate([100, 500, 200, 500], true); // 安卓：[停， 震，停， 震]， ios：【停。。。】
    // Vibration.cancel();

    // 键盘操作
    // const showSubscription = Keyboard.addListener(
    //   'keyboardDidShow',
    //   onKeyboardShow,
    // );
    // const hideSubscription = Keyboard.addListener(
    //   'keyboardDidHide',
    //   onKeyboardHide,
    // );
    // Keyboard.dismiss(); // 隐藏键盘

    apiTest();

    return () => {
      // BackHandler.removeEventListener('hardwareBackPress', backForAndroid);
      // showSubscription.remove();
      // hideSubscription.remove();
    };
  }, []);

  // const backForAndroid = () => {
  //   return true;
  // };

  // const onKeyboardShow = () => {
  //   console.log('键盘出现');
  // };

  // const onKeyboardHide = () => {
  //   console.log('键盘隐藏');
  // };

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
  container: {
    ...Platform.select({
      android: {},
      ios: {},
      default: {},
    }),
  },
});
