# movie-app
OMDb API키를 통하여 Javascript, Typescript 두 버전으로 영화 검색 사이트를 구현하였습니다. 해당 프로젝트는 순수 컴포넌트 클래스를 작성하여 메인페이지인 Search Page, 영화의 상세페이지인 Movie Page, 개발자 정보 페이지인 About페이지를 구성하였습니다.
각 페이지는 location의 hash값을 받아와 해당 페이지가 랜더링되도록 하였습니다. 
우선 async function을 선언하여 비동기 함수를 정의해서 영화 정보를 받아왔습니다. 비동기 함수를 사용하여 영화의 정보를 전달 받기전에 페이지가 랜더링되는 것을 차단하였습니다.
영화의 상세 정보를 불러오는 로딩시간에 Css로 Skeleton Screen을 추가하여 디자인 측면을 향상시켰습니다.
