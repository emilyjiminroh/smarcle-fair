# simulation

## 풀리퀘스트(PR) 연습

### 1. 포크

<hr/>

1. **원본 repo**에서 **자기 repo**로 fork

### 2. local로 clone(다운로드)

<hr/>

2. fork 해 온 **자기 repo**에서 **code** 눌러서 url 복사

3. 작업하고 싶은 **local 폴더**에서 터미널 접속

4. 'git clone (자기 repo url)' 입력

   - repo 이름의 폴더 생성됨

   - repo 이름의 폴더 내에 .git 자동으로 생성됨

### 3. local에 원본 repo remote 추가

<hr/>

5. local에게는 두 개의 원격 저장소가 필요함. 하나는 **원본 repo**, 하나는 **자기 repo**

   - **원본 repo**: 'git remote add (별명) (원본 repo url)'을 입력해 직접 추가해줌

   - **자기 repo**: origin이란 별명으로 이미 저장되어 있으므로 별도의 작업 필요 없음

### 4. branch로 분기한 후, 수정

<hr/>

6. 수정 작업 전, branch를 만들어 준다. ('git checkout -b (이름)'을 사용하면 브랜치 추가와 함께 checkout이 가능함)

7. 수정한다.

8. add -> commit

### 5. **자기 repo**로 push

<hr/>

9. **자기 repo**의 **새 branch**로 push한다. 'git push origin (브랜치 이름)'

### 6. **풀리퀘(PR)** 날리기!

<hr/>

10. push 하고 github에서 **자기 repo**를 확인하면 **Compare & pull request 버튼**이 새롭게 생성되어 있다.

11. 버튼을 눌러 설명 메세지를 적고 **Create pull request** 버튼을 누른다.

### 7. **원본 repo** 관리자의 Merge 결정

<hr/>

12. **원본 repo** 관리자는 변경 내역을 확인하고 이상이 없으면 **Merge**한다.

### 8. **원본 repo**와 **local** 동기화

<hr/>

13. 'git pull (**원본 repo** 별명)'을 입력하여 **원본 repo**의 상태와 **local**의 상태를 동기화한다.
