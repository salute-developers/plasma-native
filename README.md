# Plasma React Native

Это репозиторий, который содержит набор библиотек, реализующие дизайн системы для платформы react-native.

## Файловая структура

-   `core` - содержит библиотеки, которые являются обязательными зависимостями для работы дизайн системы.
-   `docs` - содержит документацию по всем компонентам библиотеки.
-   `libraries` - содержит пользовательские библиотеки компонентов.
-   `packages` - содержит утилитарные пакеты, необходимые для корректной работы дизайн системы.
-   `themes` - содержит пользовательские темы, разбитые на вертикали, сгенерированные на основе файлов из [репозитория](https://github.com/salute-developers/theme-converter).
-   `scripts` - содержит набор скриптов, которые позволяют переключать режим разработки дл выбранной платформы - mobile или tv.

### Директория `core`

Содержит библиотеки, которые являются обязательными зависимостями для работы дизайн системы.

### Директория `docs`

Содержит документацию по всем компонент библиотеки `core-components`.

### Директория `libraries`

Содержит пользовательские библиотеки компонентов.

### Директория `packages`

Содержит утилитарные пакеты, необходимые для корректной работы дизайн системы, а также набор иконок всех размеров.

### Директория `themes`

Содержит пользовательские темы, разбитые на вертикали, сгенерированные на основе файлов из [репозитория](https://github.com/salute-developers/theme-converter).

### Директория `scripts`

Содержит набор скриптов, которые позволяют переключать режим разработки дл выбранной платформы - mobile или tv.

## Разработка

Для разработки используются инструменты [Expo SDK](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/) и [storybook/react-native](https://github.com/storybookjs/react-native).

Есть несколько способов разработки библиотек компонентов для устройств:

1. Через веб-приложение
2. Через ios симулятор (требуется наличие `xcode`, версии 15 и выше). Подробная инструкция по установке - https://docs.expo.dev/workflow/ios-simulator/
3. Через android симулятор (требуется наличие `android studio`). Подробная инструкция по установке - https://docs.expo.dev/workflow/android-studio-emulator/

### Подготовка

Файлы `package.json` и `package-lock.json` в директориях libraries/\*\* и core/core-components не комитятся, поэтому при первом запуске необходимо использовать команду `npm run bootstrap:mobile` или `npm run bootstrap:tv` в зависимости от выбранной платформы в корне проекта.

Эти команды вызовут скрипты, которые создадут `package.json` и `package-lock.json` на основе файлов `platforms/mobile/package.json` (`platforms/tv/package.json`) и `platforms/mobile/package-lock.json` (`platforms/tv/package-lock.json`).

При дальнейшей разработке можно использовать команду `npx lerna bootstrap` как обычно.

Также перед выполнением всех дальнейших команд необходимо выполнить в корне проекта.

```bash
$ npm install
```

### Поддержка актуального состояния

Если нужно обновить файл `platforms/mobile/package.json` (`platforms/tv/package.json`), то необходимо внести все изменения в `package.json` как при обычной разработке и вызвать команду в директории с библиотекой компонент (например plasma-b2c)

```bash
$ npm run package-update
```

Либо в корне проекта вызывать (в зависимости от используемой платформы)

```bash
$ npm run platform:tv
```

Если забыли обновить файлы, то при пуше в удаленный репозиторий выполнится pre-push команда, которая автоматически обновит файлы и выведет дифф, если он есть.

### Запуск storybook

Необходимо перейти в нужную директорию с библиотекой компонент (например plasma-b2c)

```bash
$ cd ./libraries/plasma-b2c
```

Для сборки storybook на iPhone / AppleTV необходимо запустить iOS симулятор (через `Xcode`) и выполнить команду

```bash
$ npm run storybook:ios
```

Для сборки storybook на Android / AndroidTV необходимо запустить Android симулятор (через `Android Studio`) и выполнить команду

```bash
$ npm run storybook:android
```

## Troubleshooting

### Платформа TV

#### Ошибка при вызове sync у default модуля glob

Если при попытке собрать билды под android и ios возникает ошибка в пакете @react-native-tvos/config-tv. То это из-за того, что в файле withTVAndroidRemoveFlipper в методе mainApplicationFilePath, идёт попытка обратиться к методу sync через поле default модуля glob. Вероятно ошибка связана с версиями nodejs, т.к. если убрать default, то ошибка уйдёт.

Чтобы не делать это каждый раз в ручную, создан path, который это делает автоматически после установки пакетов.

#### Ошибка -ld_classic

Если возникает [ошибка](https://github.com/godotengine/godot/issues/83111) при сборке в файле `project.pbxproj`, необходимо удалить -ld_classic либо обновить xcode до версии 15.

#### Ошибка @color/splashscreen_background

Если возникает ошибка из-за отсуствии ресурса по ссылке `@color/splashscreen_background` после сборке нужно поменять в splashscreen.xml

```xml
<item android:drawable="@color/splashscreen_background"/>
```

на

```xml
<item android:drawable="@android:color/black"/>
```

#### Проблема со списком компонент в storybook на tv

Если запустить сторибуке на телевизорах, то секция с доступными сторями не будет отображать компоненты. В [этом](https://github.com/storybookjs/react-native/issues/568) эту багу не починили (хотя пытались), поэтому нужно в библиотеке @storybook/react-native в файле index.js строку

```js
sectionList: {
    flex: 1;
}
```

поменять на

```js
sectionList: {
    height: '100%';
}
```

Чтобы не делать это каждый раз в ручную, создан path, который это делает автоматически после установки пакетов.

#### Особенность рендера

В android нельзя указывать отрицательный отступы, т.к. контент, который выходит за пределы контейнера (в котором рендерится компонент) будет обрезаться: https://reactnative.dev/docs/0.73/style#known-issues

#### Пересборка проекта

Есть возникают какие-то не описанные здесь ошибки, можно выполнить команду в директории библиотеки компонент, которая полностью пересоберёт проекты для android и ios.

```bash
$ npm run storybook:tv-prebuild
```
