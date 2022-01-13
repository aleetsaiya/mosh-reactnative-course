# Mosh - React Native 課程筆記

## Ch1. Getting Started

### 建立 React Native 專案

```bash
npm install -g expo-cli
expo init myApp
```

### 使用模擬器

android emulator: 

1. 下載 android studio
2. 下載完後，從 Actions 中選擇 AVD (Android Virtual Device) Manager 
3. 選擇 Create Virtual Device
4. 選擇裝置 (建議選擇有 Play Store 的裝置)
5. 選擇裝置 OS (建議選擇第二個，為最新且穩定的版本)
6. 下載完後選擇剛剛下載的版本，然後命名

這樣就建立完成一個 android emulator 

### 執行 React Native Project (android emulator)

1. 在 cmd 中輸入: `npm start`
2. 在開啟 android emulator 後，於 cmd 選擇 _open android_

接下來就會在 android emulator 上下載並執行我們的
程式

### 使用實際手機測試 (android)

1. 從 App Store 下載 _Expo Go_
2. 在 cmd 中輸入: `npm start`
3. 用 _Expo Go_ 內建的 QR Code 掃描器，掃描螢幕上的 QR Code (手機跟電腦要用同個網路)

_(搖晃手機可以開啟 developer menu)_