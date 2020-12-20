### React Native Vector Icons
RN Vector Icon 사용을 위한 패키지  
#### install
```
$ npm install --save react-native-vector-icons
```

#### 사용법
IOS 및 Android에서 사용하기 위해선 각각 설정이 필요(IOS, Android Section 참고)  
https://github.com/oblador/react-native-vector-icons

### react-native-image-picker
#### install
```
$ npm install --sae react-native-image-picker
```

#### Usage in IOS
```
$ cd ios && pod install
```

#### Usage in Android
{project}/android/app/src/main/AndroidManifest.xml 에 다음 추가  
```xml
<uses-permission android:name="android.permission.CAMERA" /> <!-- 카메라 권한 -->
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<!-- 저장 storage read -->
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<!-- 저장 storage write -->
```

#### 참고사항
1. react-native version이 0.61.5 인 경우는 1.1.0 version을 install해야 작동함

### react-native-contacts
#### install
```
$ npm i -s react-native-contacts
```

#### Usage
https://github.com/morenoh149/react-native-contacts