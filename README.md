# React Native - Complete Guide

---

✅ 강의 자료 github: ‣

### 섹션1: 시작하기

1. 강의에 오신 것을 환영합니다 & 배울 내용
2. React Native란 무엇인가?
3. 온라인 학습 커뮤니티에 가입하세요
4. React Native의 내부 살펴보기
5. React Native 프로젝트 생성하기: Expo CLI vs React Native CLI
6. 새로운 React Native 프로젝트 생성하기
    1. expo-cli 설치
        
        ```bash
        $ sudo npm install -g expo-cli
        ```
        
    2. 프로젝트 생성
        
        ```bash
        $ expo init RNCourse
        ```
        
7. 생성된 프로젝트 분석하기
    1. app.json - 설정 파일
    2. App.js - 실행 파일
8. 첫 번째 앱을 실제 기기에서 실행해 봅시다!
    
    ```bash
    $ yarn start
    ```
    
    디바이스에서 Expo 앱 실행
    
    화면 확인
    
9. 로컬 개발 환경 설정하기
    - Android: [android studio](https://developer.android.com/studio?gclid=Cj0KCQiA1ZGcBhCoARIsAGQ0kkqH8-f8wus-g0ifm-Pgvv37pQnv4VQX25AhEGuNlayKq1_Q3nU2MfIaAlMkEALw_wcB&gclsrc=aw.ds) 실행 방법 설명 (android 시뮬레이터)
    - iOS: Xcode 설치 및 시뮬레이터 실행 방법 설명
10. 강의 소개
11. 강의 자료, 코드 스냅샷 & 사용 방법
    
    https://github.com/academind/react-native-practical-guide-code
    

### 섹션2: React Native의 기초 [강의 목표 앱]

1. 모듈 개요
    1. The Basics
        1. React Native 컴포넌트 & UI 다루기
        2. Styling React Native Apps
        3. Adding Interactivity & Managing State
2. 핵심 컴포넌트 & 컴포넌트 스타일링 살펴보기
    1. Text, View 가장 중요한 내장 컴포넌트
        - div, h2 와 같은 html 태그를 사용하지 못함. 이는 DOM을 통해 브라우저에서 작업할 때 사용할 수 있는 HTML 요소라서 네이티브 기기에서 사용할 수 없다.
        - 공식 문서를 보더라도 컴포넌트 수가 많지 않은데 아래의 몇 가지 컴포넌터를 가지고도 충분히 원하는 UI를 만들 수 있다.
            
            ![Untitled](React%20Native%20-%20Complete%20Guide%2046e603a739154bfb9c9967f4ff3bf25f/Untitled.png)
            
        - **React Native의 본질은 내장된 핵심 컴포넌트를 다루는 것**
    2. React Native에는 CSS가 없다. 브라우저가 아니기 때문에 CSS는 존재하지 않는다. 대신 스타일을 적용한다. Inline Style을 적용하거나 StyleSheet 객체를 사용한다.
    3. App.js 컴포넌트는 유일한 최상단 컴포넌트이며, 다른 컴포넌트는 App.js의 하위 컴포넌트이다.
3. 핵심 컴포넌트로 작업하기
4. React Native 앱 스타일링하기
    - `StylesSheet.create()`를 사용해서 스타일 오브젝트를 만들면 IDE에서 코드 힌트를 사용할 수 있다.
5. React Native: 핵심 컴포넌트, 스타일링 & 색상 - 추가 정보
6. 레이아웃 & 플렉스 박스 살펴보기
7. React Native & 플레스 박스
8. 레이아웃 생성에 플렉스 박스 사용하기
9. 플렉스 박스 - 집중 탐구
10. 레이아웃 개선하기
11. 이벤트 처리하기
    1. 이벤트 처리 방식은 웹 앱에서 사용하는 방식과 같다.
    2. `Button`: onClick (X) / onPress(O)
        1. 모바일에서는 탭(Tap) 하거나 누른다(Press)
12. (데모 앱 내에서) 강의 목표 리스트 관리하기
13. iOS & Android 스타일링의 차이점
    1. 웹용 CSS와 달리 RN의 스타일은 연속적으로 적용되지 않는다.
14. `ScrollView`를 통해 콘텐츠를 스크롤 할 수 있도록 만들기
15. `FlatList`를 통해 리스트 최적화하기
    1. ScrollView를 스크롤 할 때 마다 안에 있는 항목을 전부 렌더링한다. 현재 화면에서 보이지 않더라도 화면 뒤에서 계속 렌더링 된다. 성능 이슈.
    2. 이럴 때는 FlatList 컴포넌트를 사용한다. 보이는 항목만 렌더링 하고 화면 밖은 사용자의 스크롤이 있을 경우에만 렌더링한다.
16. 컴포넌트를 작은 컴포넌트로 쪼개기
17. 프로퍼티 활용하기
18. “Goal Input” 컴포넌트로 작업하기
19. Pressable 컴포넌트로 누르는 이벤트 처리하기
    1. `click`과 같은 이벤트는 `Pressable` 컴포넌트로 감싼 뒤 `onPress` 속성에 함수를 넣어 실행.
20. 아이템 삭제할 수 있게 만들기 & ID 사용하기
    1. array filter
21. Android 물결 효과 추가하기 & iOS 대안
    1. Pressable 컴포넌트의 android_ripple 속성을 가지고 사라지는 애니메이션 구현
    2. iOS의 경우 *style*={({ pressed }) => pressed && *styles.*pressedItem} 코드 활용
22. 모달 화면 추가하기
    1. `Modal` 컴포넌트 활용과 `animationType` 속성으로 부드럽게 애니메이션 효과 적용 가능
23. 모달 오버레이 스타일링 하기
    1. `View` 컴포넌트에서 `flex` 속성을 활용해 레이아웃을 잡는다.
24. 모달 열기 & 닫기
25. 이미지로 작업하기 & 색상 편집하기
    1. Image 컴포넌트로 이미지 추가한다
        1. `<Image source={require(’../assets/images/goal.png’)} />`
26. 앱 최종 마무리
    1. `app.json` 파일에서 전체 설정을 할 수 있다.
        1. e.g. `backgroundColor` 적용 (전체 배경 색상 설정)
    2. `StatusBar` 컴포넌트를 활용해서 상태 표시줄의 모양새를 설정할 수 있다.
        1. `App.js` 에서 `<StatusBar *style*="light" />과` 같은 방법으로 컬러를 설정할 수 있다.
27. 모듈 요약

### 섹션3: React Native 앱 디버깅하기 (개요)

1. 모듈 개요
2. 에러 핸들링
    1. 시뮬레이터 또는 터미널에서 에러 로그를 확인하는 방법
3. 콘솔 로딩하기
    1. `console.log`로 터미널에서 로그를 확인할 수 있음.
4. JavaScript를 원격으로 디버깅하기
    1. `expo`를 실행한 터미널에서 `m`을 누르면 menu로 진입할 수 있음.
    2. 메뉴 중에 `Debug Remote JS` 을 선택하면 `Chrome`에서 새 탭이 열린다. 
    개발자 도구를 열어서 일반 웹 디버그와 같은 방식으로 활용이 가능하다.
5. React 개발자 도구 사용하기
    1. `sudo npm install -g react-devtools` 으로 React 개발자 도구의 독립된 버전을 얻을 수 있다.
    2. `react-devtools` 명령어로 실행하면 다음과 같은 개발자 창이 열린다. menu에서 `Debug Remote JS`를 실행하면 연결이 된다.
        
        ![Untitled](React%20Native%20-%20Complete%20Guide%2046e603a739154bfb9c9967f4ff3bf25f/Untitled%201.png)
        
6. 문서 사용하기
    1. [https://reactnative.dev/docs/debugging](https://reactnative.dev/docs/debugging)

### 섹션4: 컴포넌트, 레이아웃 & 스타일링 자세히 살펴보기 - 미니 게임 웹 구축하기

![Untitled](React%20Native%20-%20Complete%20Guide%2046e603a739154bfb9c9967f4ff3bf25f/Untitled%202.png)

1. 모듈 개요 & 구축 계획
2. 시작 설정 & 대상 앱 분석하기
3. 화면 컴포넌트 설정하기
    1. `TextInput` 컴포넌트 활용하기
    2. custom button 제작하기
4. 커스텀 버튼 생성하기
    1. [github react native](https://github.com/facebook/react-native)에서 Button 컴포넌트 참조
        1. View, Text 컴포넌트 조합으로 만들어져 있음
    2. `PrimaryButton` 컴포넌트 생성
5. Android  & iOS용 스타일하기
    1. 그림자 스타일
        1. andrioid: `evevation` 속성 이용(숫자가 높을수록 진하게 표현)
            - 많은 컴포넌트의 속성이 iOS와 android 각자의 방식으로 컴파일 되지만 evelation 속성은 예외이다.
        2. iOS: 아래와 같은 속성으로 그림자를 넣을 수 있다.
        
        ```
        		shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shdaowOpacity: 0.25,
        ```
        
    2. View 컴포넌트 내의 주요 컴포넌트는 플랫폼에 따라 다르게 컴파일 된다
6. “Number Input”요소 스타일링하기
    1. TextInput의 `maxLength`로 길이 제한하기
        
        ```jsx
        <TextInput style={styles.numberInput} maxLength={2} />
        ```
        
7. TextInput 필드 구성하기
    1. 입력할 수 있는 문자의 유형을 제한하기(키보드 설정)
        - [https://reactnative.dev/docs/textinput#keyboardtype](https://reactnative.dev/docs/textinput#keyboardtype)
        
        ```jsx
        <TextInput
          style={styles.numberInput}
          ***maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}***
        />
        ```
        
8. 버튼에 시각적 피드백 추가하기
    1. `Pressable` 컴포넌트로 버튼 이벤트 등록하기
    2. Custom Button 스타일 설정
        
        ```jsx
        const styles = StyleSheet.create({
          buttonContainer: {
            backgroundColor: '#72063c',
            borderRadius: 28,
            paddingVertical: 8,
            paddingHorizontal: 16,
            margin: 4,
            elevation: 2, // for android
          },
          buttonText: {
            color: 'white',
            textAlign: 'center',
          },
        });
        ```
        
    3. 물결 효과 적용 : `android_ripple`
        1. `Pressable` 컴포넌트에 속성을 적용하면 버튼 바깥으로 효과가 보이는 경우가 있는데 이럴 때는 View 컴포넌트를 바깥쪽에 배치한다.
        2. 외부 컨테이너와 내부 컨테이너를 결합해서 버튼을 구축하는 경우들이 있다.
    4. `Pressed` 컴포넌트의 style 속성은 StyleSheet의 style 객체를 가지기도 하지만, 함수를 넣어서 누를 때마다 함수를 호출할 수도 있다.
    5. 함수에서 전달되는 pressed 값은 boolean을 반환하는데 버튼이 눌렸을때 와 아닐때를 삼항연산자로 적용할 수 있다. 여기에서 배열 형식으로 복수의 스타일을 적용할 수도 있다.
        
        ```jsx
        <View style={styles.buttonOuterContainer}>
          <Pressable
            ***style={({ pressed }) =>
              pressed
                ? [styles.pressed, styles.buttonInnerContainer]
                : styles.buttonInnerContainer
            }
            onPress={pressHandler}
            android_ripple={{ color: '#640233' }}***
          >
            <Text style={styles.buttonText}>{children}</Text>
          </Pressable>
        </View>
        ```
        
9. 버튼 개선하기
10. 컴포넌트 & 앱 전반에 색상 넣기
    1. 루트 파일이 App.js 이기 때문에 루트에 있는 컴포넌트(StartGameScreen)에 배경 색상을 지정하면 전체 배경 색상에 효과가 적용된다.
    2. 전체 배경을 적용할 때 `flex: 1` 스타일을 이용하면 모자라는 면적을 채울 수 있다.
11. 선형 그라데이션 추가하기
    1. `expo`를 활용한다. ([Expo Linear Gradient](https://www.notion.so/React-Native-Complete-Guide-46e603a739154bfb9c9967f4ff3bf25f) 설치)
        
        ```bash
        # npm install이 아닌 expo로 설치하게 되면 사용하는 Expo 툴이 프로젝트에 알맞은 버전을 설치한다
        **$ expo install expo-linear-gradient**
        ```
        
    2. View 컴포넌트 대신 `LinearGradient` 컴포넌트를 활용한다.
        
        ```html
        <LinearGradient ***colors={['#4e0329', '#ddb52f']}*** style={styles.rootScreen}>
          <StartGameScreen />
        </LinearGradient>
        ```
        
        `colors` 속성에 문자열 값을 갖는 색상 코드를 배열 형태로 넣어서 사용할 수 있다.
        
12. 배경 이미지 추가하기
    1. `ImageBackground` 컴포넌트 활용. 일반적으로 아래와 같은 코드로 사용
        
        ```jsx
        <ImageBackground
          source={require('./assets/images/background.png')}
          ***resizeMode="cover"***
        	style={styles.rootScreen}
        >
        ```
        
    2. `resizeMode`는 이미지가 기기의 화면보다 크기가 크거나 작을 때 이미지의 크기를 조정하는 방식을 설정한다. 
    3. 저장하면 이미지는 나타나지만 그라데이션이 사라진다. `imageStyle` 속성을 추가할 수 있는데 이는 `ImageBackground` 내부의 `Image` 컴포넌트에만 style 효과를 따로 적용하는 속성이다.
        
        ```html
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
          <ImageBackground
            source={require('./assets/images/background.png')}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
          >
            <StartGameScreen />
          </ImageBackground>
        </LinearGradient>
        
        ...
        
        const styles = StyleSheet.create({
          rootScreen: {
            flex: 1,
          },
          backgroundImage: {
            opacity: 0.15,
          },
        });
        ```
        
13. 게임 로직 시작하기
    1. TextInput에 사용자가 입력한 데이터를 받고 기본적인 useState를 활용한 상태 처리
14. 사용자 입력 처리하기 & 경고 대화창 표시하기
    1. 입력한 값에 대한 유효성 처리
    2. Alert은 API를 호출한다.(Native의 Alert을 호출하는 개념)
        - [Docs](https://reactnative.dev/docs/alert)
    
    ```jsx
    Alert.alert(
      'Invalid number!',
      'Number has to be a number between 1 and 99.',
      [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }]
    );
    ```
    
15. 프로그램 내에서 화면 전환하기
    1. 사용자가 숫자를 선택하기 전에는 `StartGameScreeen`을 렌더하고 숫자를 선택하면 `GameScreen`을 렌더한다.
    
    ```jsx
    const [userNumber, setUserNumber] = useState(null);
    
    function pickedNumberHandler(pickedNumber) {
      setUserNumber(pickedNumber);
    }
    
    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
    
    if (userNumber) {
      screen = <GameScreen />;
    }
    ```
    
16. 게임 화면 작업 시작하기
    1. `GameScreen` 기본 레이아웃 
17. **`SafeAreaView`**를 통해 기기 화면 제한 고려하기
    1. 실행 중인 장치를 자동으로 감지하고 노치와 상태 표시줄과 콘텐츠 사이에 적절한 간격을 자동으로 추가한다.
    2. 아래 코드와 같이 노치 뒤에 배치되어아 하는 배경 스크린 같은 경우를 제외하고 메인 콘텐츠 영역만 `SafeAreaView` 컴포넌트 안에 둔다. 추가적으로 `style`도 적용해야 하는데 r`ootScreen` 스타일을 입히면 노치 영역을 제외한 사용 가능한 공간에서 가득 차게 된다.(flex: 1)
        
        ```jsx
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
          <ImageBackground
            source={require('./assets/images/background.png')}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
          >
            ***<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>***
          </ImageBackground>
        </LinearGradient>
        ```
        
18. 제목 컴포넌트 생성하기
    1. `Title` 컴포넌트 제작
19. 색상을 글로벌 영역에서 관리하기
    1. ReactNative에서는 색상과 같이 자주 사용하는 상수값은 헬퍼파일을 만들어서 관리한다.
        
        ```jsx
        const Colors = {
          primary500: '#72063c',
          primary600: '#640233',
          primary700: '#4e0329',
          primary800: '#3b021f',
          accent500: '#ddb52f',
        };
        
        export default Colors;
        ```
        
20. 무작위 수 생성, 사용 & 디스플레이하기
    1. 무작위 생성 함수
        
        ```jsx
        function generateRandomBetween(min, max, exclude) {
          const rndNum = Math.floor(Math.random() * (max - min)) + min;
        
          if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
          } else {
            return rndNum;
          }
        }
        ```
        
    2. `NumberContainer` 컴포넌트 생성 및 스타일링 적용 (숫자 표시)
        
        ```jsx
        function NumberContainer({ children }) {
          return (
            <View style={styles.container}>
              <Text style={styles.numberText}>{children}</Text>
            </View>
          );
        }
        
        export default NumberContainer;
        
        const styles = StyleSheet.create({
          container: {
            borderWidth: 4,
            borderColor: Colors.accent500,
            padding: 24,
            margin: 24,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          },
          numberText: {
            color: Colors.accent500,
            fontSize: 36,
            fontWeight: 'bold',
          },
        });
        ```
        
        - iOS에서 `Text` 컴포넌트의 경계선 굴곡은 설정할 수 없다. 그래서 `View` 컴포넌트로 감싸준 것
21. 앱에 게임 제어 버튼(`+`, `-`) 추가하기
22. “게임 종료” 확인하기
    1. `currentGuess`와 `userNumber`의 값이 같을 경우를 체크한 후 App.js에서 화면 전환하기
    2. `gameIsOver` 상태 관리하기
23. 게임 화면 비주얼 개선하기
    1. `Card`, `InstructionText` 컴포넌트 생성 및 분리
24. “계단식 스타일” 사용하기
    1. 부모 컴포넌트에서 자식 컴포넌트의 props로 style을 넘길 수 있다. 자식 컴포넌트에서는 아래와 같이 style 속성에 배열 형태로 넣을 수 있다. 왼쪽에서 오른쪽으로 덮어씌어진다.
        
        ```jsx
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        ```
        
        ```jsx
        function InstructionText({ children, ***style*** }) {
          return <Text ***style={[styles.instructionText, style]}***>{children}</Text>;
        }
        
        export default InstructionText;
        
        const styles = StyleSheet.create({
          instructionText: {
            color: Colors.accent500,
            fontSize: 24,
          },
        });
        ```
        
25. 아이콘(버튼 아이콘)으로 작업하기
    1. `[@expo/vector-icons](https://docs.expo.dev/guides/icons/)` 활용하기(별도 설치 필요없음)
    2. Ionicons 예제
        
        ```
        import { Ionicons } from '@expo/vector-icons';
        
        ...
        
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name="md-remove" size={24} color="white" />
        </PrimaryButton>
        ```
        
26. React Native 앱을 통해 커스텀 폰트 추가 & 사용하기
    1. `$ expo install expo-font` 로 패키지 설치
    2. `import { useFonts } from 'expo-font'` 로 Hook 불러오기
    3. 정적 폰트 파일을 로드한다.
        
        ```
        useFonts({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Regular-Bold.ttf'),
        });
        ```
        
    4. 파일을 로드하는 동안 별도 처리를 하게 위해 expo-app-loading 패키지 설치
        
        ```html
        $ expo-app-loading
        ```
        
        useFonts에서 파일의 로드 상태를 boolean 받을 수 있음.
        
        ```jsx
        ***const [fontsLoaded] = useFonts***({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Regular-Bold.ttf'),
        });
        
        ***if (!fontsLoaded) {
          return <AppLoading />;
        }***
        ```
        
27. (전경) 이미지 추가하기
    1. Image 컴포넌트 활용 및 스타일 적용
28. 중첩 텍스트 사용 & 스타일링 하기
    1. 텍스트 안에 텍스트를 강조하기 위해서 중첩 텍스트를 사용할 수 있다. 하지만 Text 컴포넌트로 View와 같은 컴포넌트는 감쌀 수 없다.
        
        ```
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.hightlight}>X</Text> rounds to
          guess the number <Text style={styles.hightlight}>Y</Text>.
        </Text>
        
        ...
        
        summaryText: {
          fontFamily: 'open-sans',
          fontSize: 24,
        },
        hightlight: {
          fontFamily: 'open-sans-bold',
          color: Colors.primary500,
        },
        ```
        
    2. 외부 텍스트에 적용한 스타일은 내부 텍스트에도 적용이 된다. 상속 된다는 개념보다는 네이티브 컴포넌트의 컴파일 하는 방식 때문이다.
29. 게임 시작/재시작을 위한 로직 추가하기 & 요약화면 
30. 게임 라운드 로깅하기
    1. 각 라운드에서 입력하는 값을 배열로 받아서 리스트 형식으로 표시해 줌
        
        ```jsx
        <View>
          {guessRounds.map((guessRound) => (
            <Text key={guessRound}>{guessRound}</Text>
          ))}
        </View>
        ```
        
31. `FlatList`를 통해 로그 데이터 출력하기
    
    ```jsx
    <FlatList
      data={guessRounds}
      renderItem={(itemData) => <Text>{itemData.item}</Text>}
      keyExtractor={(item) => item}
    />
    ```
    
32. 게임 라운드 로그 스타일링 하기
    1. 로그 아이템을 표시하는 `GuessLogItem` 컴포넌트 생성
    2. Text 컴포넌트로 표시하던 부분을 GuessLogItem으로 변경하고 관련 props를 전달한다.
        
        ```jsx
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            ***<GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />***
          )}
          keyExtractor={(item) => item}
        />
        ```
        
    3. 화면 끝에 걸쳐지는 아이템을 제대로 볼 수 없는 이슈가 있다.
        
        ![Untitled](React%20Native%20-%20Complete%20Guide%2046e603a739154bfb9c9967f4ff3bf25f/Untitled%203.png)
        
33. 최종 마무리
    1. 위 이슈는 `FlatList` 상위에 `View` 컴포넌트를 배치해 FlatList가 차지할 수 있는 공간을 제어하는 방법으로 해결한다.
        
        ```jsx
        <View style={styles.listContainer}>
        	{
            <FlatList
              data={guessRounds}
              renderItem={(itemData) => (
                <GuessLogItem
                  roundNumber={guessRoundsListLength - itemData.index}
                  guess={itemData.data}
                />
              )}
              keyExtractor={(item) => item}
            />
          }
        </View>
        ...
        const styles = StyleSheet.create({
          ...
          ***listContainer: {
            flex: 1,
            padding: 16,
          },***
        });
        ```
        
    2. `GameOverScreen`에서 라운드 수를 표시한다.
34. 모듈 요약

### 섹션5: 호환 가능한 사용자 인터페이스 구축하기 (플랫폼 & 기기 크기에 맞추기)

1. 모듈 개요