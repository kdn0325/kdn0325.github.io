var store = [{
        "title": "#1 [Jekyll] 블로그 기초",
        "excerpt":"Blog “title : 포스트의 제목을 큰 따옴표로 적어 준다. 이 title을 적어주지 않으면 .md 파일 이름으로 적어주었던 title 부분이 제목으로 업로드 된다. excerpt : 포스트 목록에서 보여지는 블로그 소개 글 categories : 이 포스트의 카테고리는 Blog로 정함. tags : 태그와 카테고리의 차이점은 카테고리는 sub url이 붙는 페이지가 있지만 태그는 없다는...","categories": ["Blog"],
        "tags": ["Blog","jekyll","Github","Git","minimal-mistake"],
        "url": "/blog/1/",
        "teaser": null
      },{
        "title": "#1 자바스크립트 성장과 미래",
        "excerpt":"자바스크립트의 탄생 자바스크립트는 간단히 말하면 우리가 사용하는 브라우저를 제어하기 위한 스크립트 언어 입니다. 설명한 것 처럼 ‘브라우저’를 제어하기위해 탄생했습니다. 1995년 브라우저 시장의 선두주자인 넷스케이프 커뮤니케이션즈에서 SchemeScript라는 스크립트 언어를 제작한 Brendan Eich를 영입해 만들게 된 언어 입니다. 재미있는 사실은 당시 강세였던 Java언어 스러운 스크립트 언어를 만들고 싶었고 Java의 인기에 묻혀가고 싶어서...","categories": ["Javascript"],
        "tags": ["javascript","js","자바스크립트","자바스크립트 성장 과정"],
        "url": "/javascript/1/",
        "teaser": null
      },{
        "title": "#1 React 시작하기",
        "excerpt":"설치할 항목 Nodejs : 리액트 프로젝트를 준비하기 위해 필요한 webpack, babel 등의 도구들을 실행하는데에 사용됩니다. Yarn : 자바스크립트 패키지를 관리하기 위해서 사용됩니다. Node.js 를 설치하면 npm 이 설치되어서 npm 으로 해도 되긴 하지만, yarn을 사용하면 훨씬 빠릅니다. =&gt; Nodejs https://nodejs.org/ko/ =&gt; LTS 버전 기존노드가 설치되어있던분들은 프로그램 삭제후 다시 설치해주세요 기존에 설치된 Node.js 제거 다음...","categories": ["React"],
        "tags": ["react","node.js","yarn","npm","vscode"],
        "url": "/react/1/",
        "teaser": null
      },{
        "title": "#1 Typescript 기초",
        "excerpt":"JavaScript 의 장점은 일반적인 C, Java처럼 자료형이 존재하지 않는 개념이다. JS의 특징은 강력한 장점이자 단점은 개인적으로 동적이고 유연한 언어라는 것이다. 실제로 어떤 서비스를 운영할 때에 테스트할 때 발견되지 않았던 버그가 생길 수 있다. TypeScript는 기본적으로 변수에 타입을 지정해주면서, 코드를 추적해줌. TypeScript는 JavaScript의 상위 집합이므로 JS를 사용해본 개발자라면 쉽게 사용이 가능하다 장점:...","categories": ["Typescript"],
        "tags": ["ts","typescript","typescript가 필요한 이유"],
        "url": "/typescript/1/",
        "teaser": null
      },{
        "title": "#2 Typescript Overview",
        "excerpt":"프로그래밍 언어 Complied Language Transpile JS ⇒ Interpreted Language Compiled Interpreted 컴파일 필요 O 컴파일 필요 X 컴파일러가 필요 O 컴파일러가 필요 X 컴파일하는 시점 O 컴파일하는 시점 X 컴파일된 결과물 실행 코드 자체를 실행 컴파일된 결과물을 실행하는 시점 코드를 실행하는 시점 O = 런타임 Traditional Compiled Language 컴파일 언어...","categories": ["Typescript"],
        "tags": ["ts","typescript","IDE","CompilerOptions","Type Alias","Interface","Class"],
        "url": "/typescript/2/",
        "teaser": null
      },{
        "title": "#1 애자일 방법론",
        "excerpt":"애자일 방법론이란? 애자일 방법론 이란, ‘Agile = 기민한, 날렵한’ 이란 뜻으로 좋은 것을 빠르게 취하고, 낭비 없게 만드는 다양한 방법론을 통칭해 일컫는 말이다. 앞을 예측하며 개발하지 않고, 일정한 주기를 가지고 계속 검토해 나가며 필요할 때마다 요구사항을 더하고 수정하여 커다랗게 살을 붙이면서 개발해 프로세스 모델 방식이다. 미리 정해진 몇 개의 단계에 따라...","categories": ["computerscience"],
        "tags": ["cs","컴퓨터 공학","소프트웨어 개발","애자일 방법론","‘Agile"],
        "url": "/computerscience/1/",
        "teaser": null
      },{
        "title": "#2 Virtual DOM",
        "excerpt":"Virtual DOM과 Internals   A JavaScript library for building user interfaces ko.reactjs.org      Virtual DOM : DOM과 유사한 객체를 메모리 상에서 구현하여 변경 사항이 생기면 메모리가 올라간 Virtual DOM을 수정하고 DOM과 비교하여 변경 사항만 DOM에 반영함  ","categories": ["React"],
        "tags": ["react","node.js","yarn","npm","virtual DOM"],
        "url": "/react/2/",
        "teaser": null
      },{
        "title": "#1 Git 단축키 목록",
        "excerpt":"Git 1. 설정과 초기화 전역 사용자명/이메일 구성하기 git config - -global user.name “Your name” git config - -global user.email “Your email address” 저장소별 사용자명/이메일 구성하기 (해당 저장소 디렉터리로 이동후) git config user.name “Your name” git config user.email “Your email address” 참고로 user 설정이 되어 있지 않으면 Github에 있는 repository에 변경사항을...","categories": ["Git"],
        "tags": ["git","git 단축키"],
        "url": "/git/1/",
        "teaser": null
      },{
        "title": "#3 바벨과 웹팩",
        "excerpt":"바벨과 웹팩 [JSX없이 사용하는 React] https://ko.reactjs.org/docs/react-without-jsx.html JSX 없이 사용하는 React – React A JavaScript library for building user interfaces React.js 시작하기 React CDN 링크 A JavaScript library for building user interfaces ko.reactjs.org ​ ​ BABEL @babel/standalone · Babel @babel/standalone provides a standalone build of Babel for use in browsers and...","categories": ["React"],
        "tags": ["react","node.js","yarn","npm","vscode"],
        "url": "/react/3/",
        "teaser": null
      },{
        "title": "#1 Next.js 시작하기",
        "excerpt":"next.js는 React로 만드는 서버사이드 렌더링 프레임 워크입니다. 클라이언트 렌더링의 경우 모든 js 파일을 로드하고 사용자는 웹을 보게됩니다. 이때까지 사용자는 많은 시간을 대기해야 합니다. seo 문제 - 클라이언트 사이드의 경우 자바스크립트가 로드 되지 않은 경우 아무런 정보를 보이지 않습니다. 구글의 검색엔진의 경우 자바스크립트가 로드되지 않은 페이지를 검색엔진으로 스캔함으로 결론적으로 검색에 아무...","categories": ["Next"],
        "tags": ["next.js","ssr","ssg","서버사이드 랜더링","react.js","프레임워크"],
        "url": "/next/1/",
        "teaser": null
      },{
        "title": "#4 부가기능 및 리액트로 만들어진 사이트",
        "excerpt":"Chrome을 기본브라우저로 설정 ​ 컴퓨터에서 Chrome을 열기 오른쪽 상단에서 더보기 를 클릭(또는 윈도우시작 - 톱니바퀴모양 설정 ) 설정을 클릭. ‘기본 브라우저’ 섹션에서 Chrome을 기본 브라우저로를 클릭 ​ 부가기능 ​ Wappalyzer - Identify web technologies react-developer-tools React Developer Tools Adds React debugging tools to the Chrome Developer Tools. Created from revision...","categories": ["React"],
        "tags": ["react","node.js","yarn","npm","vscode"],
        "url": "/react/4/",
        "teaser": null
      },{
        "title": "#2 Next.js에 styled-components 사용하기",
        "excerpt":"styled-component를 사용할 경우 커스텀이 필요하다. Next.js - styled-components? 해당 코드를 추가해주어야 SSR시에 styled가 헤더에 주입된다.추가해주지 않으면 CSS가 적용되지 않고 먼저 렌더링되는 현상이 발생한다. 생략부분에는 메타태그를 넣어주거나 웹폰트를 preload 시켜줄 수 있다. _document.js import React from \"react\"; import Document, { Main, NextScript, Head } from \"next/document\"; import Helmet from \"react-helmet\"; import...","categories": ["Next"],
        "tags": ["next.js","ssr","ssg","서버사이드 랜더링","react.js","프레임워크"],
        "url": "/next/2/",
        "teaser": null
      },{
        "title": "#5 what is React",
        "excerpt":"리액트 공식 문서에 홈페이지에 가면 가자마자 리액트는 선언형, 컴포넌트 기반이라는 키워드를 발견할 수 있다. 리액트의 특징을 아주 잘 나타내는 말인 거 같다. 1. 선언형 js만으로 UI를 만들고 브라우저에 나타내려면 우리는 아래와 같이 DOM API를 통해 필요한 HTML element를 만든다. document.createElement('div') 리액트는 이러한 방식 대신 JSX라는 문법을 사용하여 태그를 직접 나타낼...","categories": ["React"],
        "tags": ["react","node.js","yarn","npm","vscode"],
        "url": "/react/5/",
        "teaser": null
      },{
        "title": "#1 CSS 기초",
        "excerpt":"정의 CSS는 Cascading Style Sheet의 약자이다. CSS는 문서의 콘텐츠와 레이아웃, 글꼴 및 시각적 요소들로 표현되는 문서의 외관(디자인)을 분리하기 위한 목적으로 만들어졌다. 속성 여러 속성 값은 반드시 공백으로 구분되어야 한다. 축약 표현 속성은 여러 속성 값을 하나의 간소화된 선언으로 적용할 수 있다. 속성이 명시되지 않으면 해당 속성의 기본 값이 적용된다. 기본 문법...","categories": ["CSS"],
        "tags": ["css","CSS3","Cascading Style Sheet"],
        "url": "/css/1/",
        "teaser": null
      },{
        "title": "#2 선택자 정리",
        "excerpt":"CSS 선택자 정리 선택자종류  선택자 형태 선택자 예  설명  전체선택자  *   *  HTML 페이지 내부의 모든 태그를 선택  태그선택자  태그  h1  특정 태그를 선택 아이디선택자  #아이디  #header  아이디속성을 가지고 있는 태그를 선택 클래스선택자  .클래스  .head  특정한 클래스를 가지고 있는 태그를 선택  후손선택자  선택자A 선택자B  header h1  선택자A의 후손에 위치하는 선택자B를...","categories": ["CSS"],
        "tags": ["css","CSS3","Cascading Style Sheet"],
        "url": "/css/2/",
        "teaser": null
      },{
        "title": "#6 React-Proptype",
        "excerpt":"React-Proptypes-docs 타입 검사 방법 모든 타입 PropTypes.any Number 객체 PropTypes.number String 객체 PropTypes.string Boolean 객체 PropTypes.bool Function 객체 PropTypes.func Array 객체 PropTypes.array Object 객체 PropTypes.object Symbol 객체 PropTypes.symbol Node 객체 PropTypes.node React 요소 PropTypes.element 여러 타입 중 하나 PropTypes.oneOfType([PropType.number, PropType.string]) 특정 클래스의 인스턴스 PropTypes.instanceOf(Date) 전달 속성 제한 PropTypes.oneOf([‘name’, ‘career’]) 특정...","categories": ["React"],
        "tags": ["react","proptypes","객체","isRequired","type"],
        "url": "/react/6/",
        "teaser": null
      },{
        "title": "#7 Hooks - useState , Map - 리스트 key",
        "excerpt":"Hook이란? Hook을 사용하는 규칙 최상위(at the Top Level)에서만 Hook을 호출해야함 반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출하지 말아야함. 대신 early return이 실행되기 전에 항상 React 함수의 최상위(at the top level)에서 Hook을 호출해야함. 오직 React 함수 내에서 Hook을 호출해야함 React 함수 컴포넌트에서 Hook을 호출한다. Custom Hook을 사용해서 Hook을 호출한다. https://ko.reactjs.org/docs/hooks-state.html...","categories": ["React"],
        "tags": ["react","useState","map","key","리스트","hooks"],
        "url": "/react/7/",
        "teaser": null
      },{
        "title": "#8 Hooks - useRef",
        "excerpt":"useRef 직접 DOM 요소에 접근해야 할 때, useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능 useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능 useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다 useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다. ​ ​ https://ko.reactjs.org/docs/hooks-reference.html#useref ​...","categories": ["React"],
        "tags": ["react","useRef","hooks"],
        "url": "/react/8/",
        "teaser": null
      },{
        "title": "#1 HTML 시작하기",
        "excerpt":"HTML이란? HTML (Hyper Text Markup Langage)의 약자로 웹 페이지는 HTML 문서라고도 불리며, HTML 태그들로 구성됩니다. 각각의 HTML 태그는 웹 페이지의 디자인이나 기능을 결정하는 데 사용됩니다 HTML 태그(tag) HTML 태그는 보통 시작 태그(start tag, opening tag)와 종료 태그(end tag, closing tag)의 한 쌍으로 구성됩니다. 종료 태그는 시작 태그와 전부 똑같지만, 태그 이름...","categories": ["HTML"],
        "tags": ["html","HTML 태그","W3C","XHTML","DOM"],
        "url": "/html/1/",
        "teaser": null
      },{
        "title": "#9 Hooks - useEffect",
        "excerpt":"useEffect Hooks API Reference – React useEffect는 React Hooks API의 일종으로,  컴포넌트가 렌더링 될 때마다 특정 작업을 실행하기 위한 Hook이다. 1. 백엔드 서버에서 변경된 REST API 데이터를 패치 2. props, state 등 상태값의 변동을 확인하기 위함 3. Timers(setTimeout, setInterval) 을 운용하기 위함 기본 문법 useEffect(callback function, [dependency array]) 1) Callback function useEffect의 첫 번째 인자이자 effect...","categories": ["React"],
        "tags": ["react","useEffect","hooks","Callback function","Cleanup function","Dependency Array"],
        "url": "/react/9/",
        "teaser": null
      },{
        "title": "#2 변수",
        "excerpt":"변수란 변하는 데이터값을 저장할수 있는 메모리 공간(그릇)주고 받기를 하는 과정에서 사용되는 데이터를 일시적으로 보존해주는 그릇변수에는 문자형,숫자형,논리형(true/false)를 저장 할 수 있다 특정 이름에 특정 값을 담을 때 사용 키워드 : 자바스크립트에서 사용하는 단어 식별자 : 사용자가 임의로 사용하는 단어 선언 var ( variable )참고 : ie10 이상 let , const 사용let :...","categories": ["Javascript"],
        "tags": ["javascript","변수","스코프","할당","변수의 선언 방법"],
        "url": "/javascript/2/",
        "teaser": null
      },{
        "title": "#10 localStorage , JSON.parse() , JSON.stringify()",
        "excerpt":"localStorage , JSON.parse() , JSON.stringify() Window.localStorage - Web API | MDN** localStorage 읽기 전용 속성을 사용하면 Document 출처의 Storage 객체에 접근할 수 있습니다. 저장한 데이터는 브라우저 세션 간에 공유됩니다. localStorage **JSON.parse() - JavaScript MDN** JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다. 선택적으로, reviver 함수를 인수로 전달할...","categories": ["React"],
        "tags": ["react","localStorage","JSON.parse","JSON.stringify"],
        "url": "/react/10/",
        "teaser": null
      },{
        "title": "#3 JavaScript란 무엇인가?",
        "excerpt":"JavaScript란 무엇인가? 개발자가 만든 문서에 방문자가 방문하여 어떤 동작을 취했을 때, 그 동작에 대응하여 반응이 일어날 수 있도록 해주는 언어 자바스크립트 언어는 컴퓨터와 사람이 함께 알아들을수 있는 약속된 언어로 웹과 함께 등장한 언어다. 지금은 자바스크립트가 웹브라우저만 제어하기 위한것만 사용하는 것이 아니라 웹 서버를 동작하기 위한 도구로써 사용되고 서버 사이드 스크립트라고 합니다....","categories": ["Javascript"],
        "tags": ["javascript","변수","스코프","할당","변수의 선언 방법"],
        "url": "/javascript/3/",
        "teaser": null
      },{
        "title": "#4 동기와 비동기방식의 차이점",
        "excerpt":"동기(Synchronous) 동기는 데이터의 요청과 결과가 한 자리에서 동시에 일어나는것을 말함. 동기식 방식은 요청을 보낸 후 응답(결과물)을 받아야지만 다음 동작이 이루어지는 방식.모든 일은 순차적으로 실행되며 어떤 작업이 수행중이라면 다음 작업은 대기해야함. 이 시간이 10분이든 100분이든 관계없이 , 한 개의 데이터 요청에 대한 서버의 응답이 이루어질 때까지 계속 대기해야만 해야함. 장점 : 설계가 매우...","categories": ["Javascript"],
        "tags": ["javascript","동기","Synchronous","비동기","Asynchronous"],
        "url": "/javascript/4/",
        "teaser": null
      },{
        "title": "#10 router",
        "excerpt":"router 란 라우팅 - 위키백과, 우리 모두의 백과사전 SPA(Single Page Application) 싱글페이지라고 부르는 이유는 유저가 처음 접속했을때 구체적인 data를 제외한 정적파일을 모두 불러오기 때문 리액트 라우터로 페이지를 나누어 유저가 접속하는 url마다 다른 data를 보여줄 수 할수 있음 페이지의 로딩 없이, 페이지에 필요한 컴포넌트를 불러와 렌더링 하여 보여주도록 도와줌 새로운 페이지를...","categories": ["React"],
        "tags": ["react","SPA","CSR","Route","Routing","switch","Link","useNavigate"],
        "url": "/react/11/",
        "teaser": null
      },{
        "title": "#1 Code convention과 개발자가 지켜야할 수칙",
        "excerpt":"Code convention 중요할까? Code Convention을 따라야 할 이유는 뭘까? 무엇보다도 같이 일할 팀원을 위해서이고 다른 개발자들을 배려하기 위해서이다. Convention은 일종의 관습으로 많은 개발자들이 사용하는 룰이다. Class는 대문자로 시작하고, 상수는 대문자로만 작성하고, isArray와 같이 함수는 동사형으로 시작하고, 데이터베이스를 구축할 때 외래키는 ‘테이블명_id’와 같이 일종의 룰들이다. for each문을 사용하기 보다는 for(let i=0;...","categories": ["Refer"],
        "tags": ["Code convention","Java","C","C++","Javascript","MySQL","Oracle","Linux kernel","Shell","MongoDB","HTML"],
        "url": "/refer/1/",
        "teaser": null
      },{
        "title": "#3 next/router 사용하기",
        "excerpt":"next/router 사용하기 router 객체에 접근하기 위해서 useRouter를 사용한다 1. import 후 import { useRouter } from ‘next/router’ 2. 아래의 형태로 사용 const router = useRouter() router object 1. asPath basePath이나 locale이 포함되지 않은 path    ex ) ‘https://dlquff-byeol4001.vercel.app/501da229-9915-4264-9d37-6783545ee553’ 의 경우 asPath = ’/501da229-9915-4264-9d37-6783545ee553’ 2. basePath 활성화 되어 있는 basePath → next.config.js에 지정한 경로 접두사 // next.config.js module.exports = { basePath: '/경로접두사', } 3. isFallback fallback 에...","categories": ["Next"],
        "tags": ["next.js","ssr","ssg","서버사이드 랜더링","next/router","router"],
        "url": "/next/3/",
        "teaser": null
      },{
        "title": "#11 useContext",
        "excerpt":"useContext   https://ko.reactjs.org/docs/context.html   **Context – React** A JavaScript library for building user interfaces ko.reactjs.org  ","categories": ["React"],
        "tags": ["react","useContext"],
        "url": "/react/12/",
        "teaser": null
      },{
        "title": "#3 Type",
        "excerpt":"1. Primitive Type Number : 숫자형 String: 문자형 bigint: 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형 symbol : 변경이 불가능한 원시 값 null: ‘의도적으로 값이 없음’을 명시하기 위한 기본 데이터 타입 undefined : ‘아무 값도 할당받지 않은 상태’의 타입 Typescript 기본 타입 // 1. number const num :...","categories": ["Typescript"],
        "tags": ["ts","typescript","typescript의 기본 타입 정리"],
        "url": "/typescript/3/",
        "teaser": null
      },{
        "title": "#4 Function 정의",
        "excerpt":"2. Function Javascript 기본 함수 function jsAdd(num1,num2){ return num1+num2 } * 화살표함수 * const jsAdd = (num1,num2) =&gt; { return num1+num2 } Typescript 기본 함수 매개변수의 타입을 지정해줌 , 함수의 타입을 지정해줌 function add(num1:number,num2:number):number{ return num1+num2 } * 화살표함수 * const add = (num1:number,num2:number):number =&gt; { return num1+num2 } Optional...","categories": ["Typescript"],
        "tags": ["ts","typescript","typescript의 기본 함수","Function"],
        "url": "/typescript/4/",
        "teaser": null
      },{
        "title": "#5 Array",
        "excerpt":"3. Array 타입을 지정하는 두가지 방법 const scroes:number[] = [1,3,4]; // 방법 1 * 권장 * const scroes1:Array&lt;number&gt; = [1,3,4];// 방법 2 readonly는 읽기만 가능하고 업데이트를 할 수 없음 function printArray(fruits: readonly string[]){} Tuple : Typescript에서는 사용을 권장하지 않음 =&gt; interface(타입 추론) ,type alias ( 타입 지정) , class let...","categories": ["Typescript"],
        "tags": ["ts","typescript","Array","Tuple"],
        "url": "/typescript/5/",
        "teaser": null
      },{
        "title": "#6 Type Aliases",
        "excerpt":"4. Type Aliases : 원하는 타입을 지정하는 것 1. 변수처럼 타입의 별명을 지어줌 type Text = string; const name: Text = 'kdn'; const address: Text = 'korea' 2. 객체에 들어갈 타입을 지정해줌 type Student = { name:string; age:number; } const student: Student ={ name:'kdn', age:12, } String Literal Types :...","categories": ["Typescript"],
        "tags": ["ts","typescript","Type Aliases","Literal Types","String Literal Types"],
        "url": "/typescript/6/",
        "teaser": null
      },{
        "title": "#7 Union Type & Intersection Types",
        "excerpt":"5. Union Type : 여러 타입 중 하나를 만족하는 하나의 타입 (OR연산자) 변수의 값이 여러 타입을 가지는 경우 주로 사용 (가장 많이 쓰임) type Direction = 'left' | 'right' | 'up' | 'down'; function move(direction:Direction){ console.log(direction); } move('down') // 값: down 6. Intersection Types : 여러 타입을 모두 만족하는 하나의...","categories": ["Typescript"],
        "tags": ["ts","typescript","Union Type","Intersection Types"],
        "url": "/typescript/7/",
        "teaser": null
      },{
        "title": "#8 Enum",
        "excerpt":"7. Enum : 상수 값들을 한 곳에 정의하는 타입 (기존 JS에서는 제공하지 않음) 앞에 글자만 대문자로 * , 타입스크립트에선 가능한 쓰지 않는게 좋음 Enum을 사용하면 타입이 보장되지 않음 ⇒ UNION 타입 추천 enum Days { Monday=1, // 0 Thesday, // 1 WednesDay, // 2 Thursday, // 3 Friday, // 4...","categories": ["Typescript"],
        "tags": ["ts","typescript","Enum"],
        "url": "/typescript/8/",
        "teaser": null
      },{
        "title": "#9 Type Assertions & Type Inference",
        "excerpt":"8. Type Inference : 타입 추론 (보통 몇 개의 표현식(코드)을 바탕으로 타입을 추론) function add(x:number, y:number):number{ return x+y; } const result = add(1,2); console.log(result); x,y는 number 타입으로 간주함 9. Type Assertions : **타입 표명** 100% 타입을 장담할 때만 쓰임 (잘안씀) **JavaScript 코드를 TypeScript으로 포팅할 때 많이 씀** function findNumbers():number[] |...","categories": ["Typescript"],
        "tags": ["ts","typescript","Type Assertions","Type Inference","타입 추론","타입 표명"],
        "url": "/typescript/9/",
        "teaser": null
      },{
        "title": "#2 Git Branch 전략화",
        "excerpt":"Git Branch 전략   master   제품으로 출시될 수 있는 브랜치(Production)   develop   다음 출시 버전을 개발하는 브랜치   feature   기능을 개발하는 브랜치   release   이번 출시 버전을 준비하는 브랜치   hotfix   출시 버전에서 발생한 버그를 수정 하는 브랜치   ","categories": ["Git"],
        "tags": ["git","Git Branch"],
        "url": "/git/2/",
        "teaser": null
      },{
        "title": "#1 React-Native",
        "excerpt":"1. React-Native CLI로 프로젝트 시작하기 Node.JS 설치 Expo로 프로젝트 시작하기 $ npm install -g react-native-cli cocoapods 설치 $ sudo gem install cocoapods 2. Expo로 시작하기 Expo의 장점 편리성 흔히 이렇게 어느정도 틀이 만들어져서 제공되는 것의 가장 큰 장점은 편리하다는 것이다. 굳이 복잡한 초기 설정을 본인이 하지 않아도 가장 일반적인 형태로...","categories": ["rn"],
        "tags": ["React-Native"],
        "url": "/rn/1/",
        "teaser": null
      },{
        "title": "#1 각도기",
        "excerpt":"문제 설명 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요. 예각 : 0 &lt; angle &lt; 90 직각 : angle = 90 둔각 : 90 &lt; angle &lt;...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/1/",
        "teaser": null
      },{
        "title": "#2 짝수의합",
        "excerpt":"문제 설명 정수 n이 주어질 때, n 이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요. 제한사항 0 &lt; n ≤ 1000 입출력 예 n result 10 30 4 6 입출력 설명 입출력 예 #1 n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다. 입출력 예 #2...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/2/",
        "teaser": null
      },{
        "title": "#3 배열의 평균값",
        "excerpt":"문제 설명 정수 배열 numbers 가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요. 제한사항 0 ≤ numbers의 원소 ≤ 1,000 1 ≤ numbers의 길이 ≤ 100 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다. 입출력 예 numbers result [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 5.5 [89, 90,...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/3/",
        "teaser": null
      },{
        "title": "#4 양꼬치",
        "excerpt":"문제 설명 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요. 제한사항 0 &lt; n &lt; 1,000 n / 10 ≤ k &lt; 1,000 서비스로 받은 음료수는 모두 마십니다. 입출력 예 n k result...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/4/",
        "teaser": null
      },{
        "title": "#5 피자 나눠 먹기 (1)",
        "excerpt":"문제 설명 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요. 제한사항 • 1 ≤ n ≤ 100 입출력 예 n result 7 1 1 1 15 3 입출력 설명 입출력 예...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/5/",
        "teaser": null
      },{
        "title": "#6 배열 뒤집기",
        "excerpt":"문제 설명 정수가 들어 있는 배열 num_list 가 매개변수로 주어집니다. num_list 의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요. 제한사항 1 ≤ num_list의 길이 ≤ 1,000 0 ≤ num_list의 원소 ≤ 1,000 입출력 예 num_list result [1, 2, 3, 4, 5] [5, 4, 3, 2, 1] [1, 1, 1, 1, 1, 2]...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/6/",
        "teaser": null
      },{
        "title": "#7 배열 원소의 길이",
        "excerpt":"문제 설명 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.. 제한사항 1 ≤ strlist 원소의 길이 ≤ 100 strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다. 입출력 예 strlist result [“We”, “are”, “the”, “world!”] [2, 3, 3, 6] [“I”, “Love”, “Programmers.”] [1, 4, 12] 입출력 설명 입출력 예 #1...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/7/",
        "teaser": null
      },{
        "title": "#8 문자열 뒤집기",
        "excerpt":"문제 설명 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요. 제한사항 • 1 ≤ my_string의 길이 ≤ 1,000 입출력 예 my_string return “jaron” “noraj” “bread” “daerb” 입출력 설명 입출력 예 #1 my_string이 “jaron”이므로 거꾸로 뒤집은 “noraj”를 return합니다. 입출력 예 #2 my_string이 “bread”이므로 거꾸로 뒤집은 “daerb”를 return합니다. 나의 풀이 function...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/8/",
        "teaser": null
      },{
        "title": "#9 중복된 숫자 개수",
        "excerpt":"문제 설명 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요. 제한사항 1 ≤ array의 길이 ≤ 100 0 ≤ array의 원소 ≤ 1,000 0 ≤ n ≤ 1,000 입출력 예 array n result [1, 1, 2, 3, 4, 5] 1 2 [0, 2, 3, 4] 1...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/9/",
        "teaser": null
      },{
        "title": "#10 점의 위치 구하기",
        "excerpt":"문제 설명 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다. x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다. x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다. x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다. x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다. x...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/10/",
        "teaser": null
      },{
        "title": "#11 문자 반복 출력하기",
        "excerpt":"문제 설명 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요. 제한사항 2 ≤ my_string 길이 ≤ 5 2 ≤ n ≤ 10 “my_string”은 영어 대소문자로 이루어져 있습니다. 입출력 예 my_string n result “hello” 3 “hhheeellllllooo” 입출력 설명 입출력 예 #1 “hello”의 각 문자를 세 번씩 반복한 “hhheeellllllooo”를...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/11/",
        "teaser": null
      },{
        "title": "#12 배열 자르기",
        "excerpt":"문제 설명 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요. 제한사항 2 ≤ numbers의 길이 ≤ 30 0 ≤ numbers의 원소 ≤ 1,000 0 ≤num1 &lt; num2 &lt; numbers의 길이 입출력 예 numbers num1 num2 result [1, 2, 3, 4, 5] 1 3 [2, 3, 4] [1,...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/12/",
        "teaser": null
      },{
        "title": "#13 아이스 아메리카노",
        "excerpt":"문제 설명 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요. 제한사항 0 &lt; money ≤ 1,000,000 입출력 예 money result 5,500 [1, 0] 15,000 [2, 4000]...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/13/",
        "teaser": null
      },{
        "title": "#14 짝수는 싫어요",
        "excerpt":"문제 설명 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요. 제한사항 1 ≤ n ≤ 100 입출력 예 n result 10 [1, 3, 5, 7, 9] 15 [1, 3, 5, 7, 9, 11, 13, 15] 입출력 설명 입출력 #1 10 이하의 홀수가 담긴 배열 [1, 3, 5, 7,...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/14/",
        "teaser": null
      },{
        "title": "#15 최댓값 만들기(1)",
        "excerpt":"문제 설명 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요. 제한사항 0 ≤ numbers의 원소 ≤ 10,000 2 ≤ numbers의 길이 ≤ 100 입출력 예 numbers result [1, 2, 3, 4, 5] 20 [0, 31, 24, 10, 1, 9] 744 입출력 설명 입출력...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/15/",
        "teaser": null
      },{
        "title": "#16 삼각형의 완성조건 (1)",
        "excerpt":"문제 설명 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다. 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다. 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요. 제한사항 sides의 원소는...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/16/",
        "teaser": null
      },{
        "title": "#17 피자 나눠 먹기 (3)",
        "excerpt":"문제 설명 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요. 제한사항 2 ≤ slice ≤ 10 1 ≤ n ≤ 100 입출력 예...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/17/",
        "teaser": null
      },{
        "title": "#18 머쓱이보다 키 큰 사람",
        "excerpt":"문제 설명 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요. 제한사항 1 ≤ array의 길이 ≤ 100 1 ≤ height ≤ 200 1 ≤ array의 원소 ≤ 200...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/18/",
        "teaser": null
      },{
        "title": "#19 배열 두배 만들기",
        "excerpt":"문제 설명 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요. 제한사항 10,000 ≤ numbers의 원소 ≤ 10,000 1 ≤ numbers의 길이 ≤ 1,000 입출력 예 numbers result [1, 2, 3, 4, 5] [2, 4, 6, 8, 10] [1, 2, 100, -99, 1, 2, 3] [2, 4,...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/19/",
        "teaser": null
      },{
        "title": "#20 특정 문자 제거하기",
        "excerpt":"문제 설명 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요. 제한사항 1 ≤ my_string의 길이 ≤ 100 letter은 길이가 1인 영문자입니다. my_string과 letter은 알파벳 대소문자로 이루어져 있습니다. 대문자와 소문자를 구분합니다. 입출력 예 my_string letter result “abcdef” “f” “abcde” “BCBdbe” “B” “Cdbe” 입출력 예 설명 입출력 예 #1 “abcdef” 에서 “f”를...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/20/",
        "teaser": null
      },{
        "title": "#21 옷가게 할인 받기",
        "excerpt":"문제 설명 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요. 제한사항 10 ≤ price ≤ 1,000,000 price는 10원 단위로(1의 자리가 0) 주어집니다. 소수점 이하를 버린 정수를 return합니다. 입출력 예...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/21/",
        "teaser": null
      },{
        "title": "#22 배열의 유사도",
        "excerpt":"문제 설명 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요. 제한사항 10 ≤ price ≤ 1,000,000 price는 10원 단위로(1의 자리가 0) 주어집니다. 소수점 이하를 버린 정수를 return합니다. 문제 설명...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/22/",
        "teaser": null
      },{
        "title": "#23 순서쌍의 개수",
        "excerpt":"문제 설명 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요. 제한사항 1 ≤ n ≤ 1,000,000 입출력 예 n result 20 6 100 9 입출력 예 설명 입출력 예 #1 n이 20...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/23/",
        "teaser": null
      },{
        "title": "#24 편지",
        "excerpt":"문제 설명 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요. 제한사항 공백도 하나의 문자로 취급합니다. 1 ≤ message의 길이 ≤ 50...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/24/",
        "teaser": null
      },{
        "title": "#25 중앙값 구하기",
        "excerpt":"문제 설명 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요. 제한사항 array의 길이는 홀수입니다. 0 &lt; array의 길이 &lt; 100 1,000 &lt; array의 원소 &lt; 1,000 입출력...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/25/",
        "teaser": null
      },{
        "title": "#26 자릿수 더하기",
        "excerpt":"문제 설명 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요 제한사항 0 ≤ n ≤ 1,000,000 입출력 예 n result 1234 10 930211 16 입출력 예 설명 입출력 예 #1 1 + 2 + 3 + 4 = 10을 return합니다. 입출력 예 #2 9 + 3 + 0...","categories": ["codingtest"],
        "tags": ["cs","programmers"],
        "url": "/codingtest/26/",
        "teaser": null
      },{
        "title": "#10 Type Generic",
        "excerpt":"10. Generic : **제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것** 제네릭은 C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징입니다. 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됩니다. { function checkNotNullBad(arg:number | null):number{ if(arg==null){ throw new Error('Not valid Number!'); } return arg; } } {...","categories": ["Typescript"],
        "tags": ["ts","typescript","Type Generic","Type Inference","타입 추론","타입 표명"],
        "url": "/typescript/10/",
        "teaser": null
      },{
        "title": "#5 변수,데이터형",
        "excerpt":"1. 선언 JavaScript의 선언의 3가지 방법 1) [var](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/var) 변수를 선언. 추가로 동시에 값을 초기화. var name = \"홍길동\"; //재할당 var age = 26; var good = true; var loading = false; var end = null; var data; var arr = [10,20,30] //typeof는 데이터형 확인가능 console.log(typeof name); console.log(typeof age); console.log(typeof loading);...","categories": ["Javascript"],
        "tags": ["javascript","선언","var","let","const","호이스팅"],
        "url": "/javascript/5/",
        "teaser": null
      },{
        "title": "#6 Scope",
        "excerpt":"1. Scope Scope 어떤 함수의 바깥에 변수를 선언하면, 현재 문서의 다른 코드에 해당 변수를 사용할 수 있기에 전역 변수라고 합니다. 만약 함수 내부에 변수를 선언하면, 오직 그 함수 내에서만 사용할 수 있기에 지역 변수라고 부릅니다. ECMAScript 2015 이전의 JavaScript는 블록 문 스코프가 없습니다. 그래서 오히려, 블록 내에 선언된 변수는 그 블록 내에...","categories": ["Javascript"],
        "tags": ["javascript","변수","스코프","할당","지역변수","전역변수"],
        "url": "/javascript/6/",
        "teaser": null
      },{
        "title": "#7 연산자 정리",
        "excerpt":"1. 연산자 이름 단축 연산자 뜻         할당 x = y x = y         더하기 할당 x += y x = x + y         빼기 할당 x -= y x = x - y         곱하기...","categories": ["Javascript"],
        "tags": ["javascript","연산자 정리","산술연산자","관계연산자","대입연산자","논리연산자","증감연산자","조건연산자"],
        "url": "/javascript/7/",
        "teaser": null
      },{
        "title": "#8 반복문 정리",
        "excerpt":"1. for문 반복문은 특정 작업을 반복적으로 할 때 사용 몇 번 반복해라 ( 횟수가 정해질 때 많이 사용 ) for( 초기값; 조건식; 증감식 ){ 표현식 } 초기값 :시작값변수I,j,k 순 조건식 : ~까지 관계연산자 증감식 :수식 ,++,– (1): 초기 값을 처리. (2): 조건식을 비교하여 참이면 문장을 실행하고, 거짓이면 for 반복문을 종료....","categories": ["Javascript"],
        "tags": ["javascript","For문","이중 for문","while","do while","break","continue"],
        "url": "/javascript/8/",
        "teaser": null
      },{
        "title": "#9 함수 정리",
        "excerpt":"1. 함수 반복 사용되는 코드를 구조화하거나 재활용을 목적 자주 사용하는 코드실행문을 담아두고 언제든지 꺼내쓰는 방식 코드 재사용 , 코드줄이기 , 코드간소화 let function 함수명(){ /* 실행코드 */ } 함수명() - 함수호출 =&gt; function app(){ console.log('함수 호출'); }; app(); //함수호출 { function fx(num){ //num:number let x = num+10 // 100+10=110 console.log(`${x}\\n--------------------`)...","categories": ["Javascript"],
        "tags": ["javascript","함수","콜백함수","재귀함수","즉시함수","시간차함수"],
        "url": "/javascript/9/",
        "teaser": null
      },{
        "title": "#10 함수 활용",
        "excerpt":"1. 함수 기본형 { function greeting(){ return \"굿모닝\" } function printmessage(anfunction){ console.log(anfunction()); } printmessage(greeting); } =&gt; 결과값 [Running] node \"/workspaces/codespaces-blank/index.js\" 굿모닝 [Done] exited with code=0 in 0.048 seconds { function greeting(){ return function(){ return \"굿모닝\"; } } let anFunction = greeting(); let message = anFunction(); console.log(message); } =&gt;결과값 [Running] node...","categories": ["Javascript"],
        "tags": ["javascript","고차함수","함수구성","함수의 활용","커링함수"],
        "url": "/javascript/10/",
        "teaser": null
      },{
        "title": "#11 객체",
        "excerpt":"1. 객체: 사람이 보고 만지고 느낄 수 있는 모든 대상 객체.속성(키) : 고유값 객체.메서드() : 행동 객체모델링: 현실세계의 객체를 컴퓨터 언어로 변경하는 것 키(속성): 객체가 갖고 있는 고유 특징을 기술한 것 메서드: 객체가 갖고있는 동작 ex) 객체.속성 강아지.속성: 종,성별,색 강아지.메서드(): 뛰기,걷기,꼬리흔들기 객체.속성: ()가 없음 객체.메서드(): ()가 반드시 있어야함 ==== ((객체.함수())라고도...","categories": ["Javascript"],
        "tags": ["javascript","객체","length","charAt","slice","substring","substr","indexOf","search","includes","concat","trim","split","replace","padStart","padEnd"],
        "url": "/javascript/11/",
        "teaser": null
      },{
        "title": "#12 배열 (1)",
        "excerpt":"1. 배열: 리스트와 비슷한 객체로서 순회와 변형 작업을 수행하는 메서드 [Array - JavaScript MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array) 버스타기 : Array를 사용 사람이 많다 : 데이터가 많다(3개 이상) 줄 세움 (나열) =&gt; 처리속도가 빠름 처리속도가 빠름 : 삭제,수정,추가가 용이(유지보수가 좋다) { /* 기본 배열 출력 */ let arr =[]; arr[0]= '홍길동'; arr[1]= 20; arr[2]=...","categories": ["Javascript"],
        "tags": ["javascript","배열","for","for of","for in","toString","join","push","pop","unshift","shift","isArray","concat","slice","splice"],
        "url": "/javascript/12/",
        "teaser": null
      },{
        "title": "#13 배열 (2)",
        "excerpt":"1. sort 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다. [Array.prototype.sort() - JavaScript MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 1): sort 기본 1. sort 기본 { const data = [10,50,20,60,80,90]; data.sort(); console.log(data); // 문자열 유니코드로 정렬 } =&gt;결과값 [Running] node...","categories": ["Javascript"],
        "tags": ["javascript","배열","sort","filter","find","findIndex","map","forEach","reduce"],
        "url": "/javascript/13/",
        "teaser": null
      },{
        "title": "#14 클래스 & 프로토타입",
        "excerpt":"1. Argument와 Rest Parameters 차이 arguments 객체는 함수에 전달된 인수에 해당하는 Array 형태의 객체입니다. [arguments 객체 - JavaScript MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments) 1.나머지 매개변수(Rest Parameters) 구문을 사용해야 한다 Array형태”란 arguments가 length 속성과 더불어 0부터 인덱스 된 다른 속성을 가지고 있지만, Array의 forEach,map과 같은 내장 메서드를 가지고 있지 않다 1): Argument /* Argument 출력 */ { function getName(name){ /* name: argument(인자) */ console.log(name)...","categories": ["Javascript"],
        "tags": ["javascript","Argument","Rest Parameters","JSON.stringify","객체 지향 프로그래밍","private","Class","상속","오버라이드","super"],
        "url": "/javascript/14/",
        "teaser": null
      },{
        "title": "#12 useReducer",
        "excerpt":"useReducer useState의 대체 함수입니다. (state, action) =&gt; newState의 형태로 reducer를 받고 (필수) dispatch 메서드와 짝의 형태로 현재 state를 반환합니다. 사용하는 이유 다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우 state가 이전 state에 의존적인 경우에 보통 useState보다 useReducer를 선호 useReducer는 자세한 업데이트를 트리거 하는 컴포넌트의 성능을 최적화할 수 있게 하는데, 이것은...","categories": ["React"],
        "tags": ["react","useReducer","state","action"],
        "url": "/react/14/",
        "teaser": null
      },{
        "title": "#15 예외처리(Exception Handling)",
        "excerpt":"1. Error 런타임 오류가 발생했을 때 던져짐 1) 프로그래밍의 에러 3가지 (1). 문법 에러 : 문법상 맞지 않아서 발생하는 에러 (컴파일 시 에러가 있다고 알려줌) (2). 런타임 에러 : 문법은 어긋나지 않지만 실행시에 오류가 발생. (존재하지 않는 메소드를 호출) (3). 논리적 에러 : 문법적으로도 맞고 실행시에 아무런 문제가 발생하지 않지만...","categories": ["Javascript"],
        "tags": ["javascript","Error","SyntaxError","ReferenceError","RangeError","TypeError","URIError","EvalError","InternalError","try","catch","finally","throw"],
        "url": "/javascript/15/",
        "teaser": null
      },{
        "title": "#16 동기식 & 비동기식(Synchronous and Asynchronous )",
        "excerpt":"1. Synchronous and Asynchronous (1): 특징 **JavaScript는 동기식 언어** 자바스크립트는 한 번에 하나의 작업을 수행함 단일 스레드(싱글 스레드) 방식 (2): 비동기식이 필요한 이유 웹 페이지가 로딩되거나, 어떠한 동작(Event) 하나가 30초 이상이 걸림. 그렇게 되면, 웹 페이지는 이 동작이 끝날 때까지 화면에 나타나지 않거나 다음 동작을 수행하는데 지장을 주게 된다. 또,...","categories": ["Javascript"],
        "tags": ["javascript","Synchronous","Asynchronous","동기식","LIFO","비동기식","FIFO","Callback","Promise","async","await","Queue","Stack"],
        "url": "/javascript/16/",
        "teaser": null
      }]
