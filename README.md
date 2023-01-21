# 230121 [L]@React Native - Complete Guide

Category: Learn, React Native
Date: 2023/01/21

# Learn

---

- [React Native - Complete Guide](https://www.notion.so/React-Native-Complete-Guide-46e603a739154bfb9c9967f4ff3bf25f)
    1. 중첩 텍스트 사용 & 스타일링 하기
        1. 텍스트 안에 텍스트를 강조하기 위해서 중첩 텍스트를 사용할 수 있다. 하지만 `Text` 컴포넌트로 `View`와 같은 컴포넌트는 감쌀 수 없다.
            
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
            
        2. 외부 텍스트에 적용한 스타일은 내부 텍스트에도 적용 된다. 상속 된다는 개념보다는 네이티브 컴포넌트의 컴파일 하는 방식 때문.
    2. 게임 시작/재시작을 위한 로직 추가하기 & 요약화면 
    3. 게임 라운드 로깅하기
        1. 각 라운드에서 입력하는 값을 배열로 받아서 리스트 형식으로 표시해 줌
            
            ```jsx
            <View>
              {guessRounds.map((guessRound) => (
                <Text key={guessRound}>{guessRound}</Text>
              ))}
            </View>
            ```
            
    4. `FlatList`를 통해 로그 데이터 출력하기
        
        ```jsx
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <Text>{itemData.item}</Text>}
          keyExtractor={(item) => item}
        />
        ```
        
    5. 게임 라운드 로그 스타일링 하기
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
            
            ![Untitled](230121%20%5BL%5D@React%20Native%20-%20Complete%20Guide%20a477df6000bf4ab598f842917c822130/Untitled.png)
            
    6. 최종 마무리
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
    7. 모듈 요약

# SideProject

---

- 

# Article

---

- 

# Book

---

- 

# Training

---