# 배경

이번, Wanted에서 진행하는 OnBoarding Challenge 1월 프론트엔드에 참여하려고 합니다.
참여하기 전 사전에 간단한 Todo App을 만들어 제출하라는 미션이 있어 React & TypeScript로 제공한 API에 맞는 프론트엔드 서버를 구현하려고 합니다. 
과제를 진행하면서 학습하거나, 요구사항들 관리는 Notion에서 진행하려고 합니다.
[Wanted OnBoarding Challenge](https://www.notion.so/Wanted-OnBoarding-Challenge-b0b888a2b9604b2f9605c65666cd0046) 

# Subject

[사전 과제 안내](https://www.notion.so/e5b066df5287430480c18ebf9ca7175e)

[API 설명](https://www.notion.so/API-45d5ca23ed7f4fb482f2450c065b1066)

# TodoList

- [ ]  Login / SignUp
    - [ ]  이메일, 비밀번호, 제출 버튼 구성
    - [ ]  이메일과 비밀번호 유효성 체크
        - [ ]  이메일은 “@”, “.”를 포함
        - [ ]  비밀번호는 8자 이상 입력
        - [ ]  이메일과 비밀번호가 모두 입력된 상태에서만 버튼 활성화
    - [ ]  로그인 API호출 후 TodoList App으로 이동
        - [ ]  응답으로 받은 토큰은 로컬스토리지에 저장
        - [ ]  다음 로그인 시, 토큰이 존재한다면, 루트 경로로 리다이렉트
        - [ ]  토큰이 유효하지 않다면, 사용자에게 알리고 로그인 페이지로 리다이렉트
        - [ ]  로그아웃 시, 로컬스토리지에서 토큰을 삭제

- [ ]  TodoList app
    - [ ]  CRUD 기능
        - [ ]  목록과 상세 영역으로 나누어 구현
        - [ ]  Todo 목록 화인
        - [ ]  Todo 추가 버튼을 클릭하면 할 일 목록이 추가
        - [ ]  Todo 수정 버튼을 클릭하면 수정 모드로 활성화되며, 수정 내용을 제출하거나 취소가 가능
        - [ ]  Todo 삭제 버튼 클릭 시 해당 Todo를 삭제
    - [ ]  Todo 리스트와 상세 목록 확인
        - [ ]  새로고침 시, 현재 상태 유지
        - [ ]  개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통해 조회가 가능
    - [ ]  새로고침 없이 데이터 정합성 구현
        - [ ]  수정되는 Todo 내용이 목록에서도 실시간으로 반영