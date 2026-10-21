# JavaScript DOM 조작법 정리

## 1. DOM(Document Object Model)이란?

DOM(Document Object Model)은 HTML 문서를 JavaScript가 접근하고 조작할 수 있도록 객체 형태로 표현한 것이다.

브라우저가 HTML 문서를 읽으면 HTML의 각 태그를 객체로 만들어 트리 형태로 구성한다.

예를 들어 다음과 같은 HTML이 있다고 하면,

```html
<body>
    <h1>안녕하세요</h1>
    <button>클릭</button>
</body>
```

브라우저는 `body`, `h1`, `button`과 같은 HTML 요소들을 DOM 객체로 만든다.

JavaScript에서는 DOM을 이용해서 HTML 요소를 선택하거나 내용을 변경하고, 새로운 요소를 추가하거나 삭제할 수 있다.

예를 들어:

```javascript
const title = document.querySelector("h1");

title.textContent = "반갑습니다";
```

위 코드는 HTML의 `h1` 요소를 찾아서 글자를 `반갑습니다`로 변경한다.

즉,

**HTML → DOM → JavaScript로 조작**

하는 구조라고 이해할 수 있다.


---

## 2. Selector(선택자)로 DOM 요소 가져오기

Selector는 HTML에 있는 특정 요소를 JavaScript에서 선택하기 위해 사용한다.

JavaScript에서는 대표적으로 `querySelector()`와 `querySelectorAll()`을 사용할 수 있다.

### querySelector()

`querySelector()`는 조건에 맞는 첫 번째 요소 하나를 가져온다.

```javascript
const display = document.querySelector("#display");
```

`#display`는 `id="display"`를 가진 HTML 요소를 의미한다.

HTML:

```html
<input type="text" id="display">
```

JavaScript:

```javascript
const display = document.querySelector("#display");
```

이렇게 하면 JavaScript에서 `display`라는 변수를 통해 해당 HTML 요소를 사용할 수 있다.


### querySelectorAll()

`querySelectorAll()`은 조건에 맞는 요소를 모두 가져온다.

```javascript
const numberButtons = document.querySelectorAll(".number");
```

`.number`는 `class="number"`를 가진 요소를 의미한다.

예를 들어:

```html
<button class="number">1</button>
<button class="number">2</button>
<button class="number">3</button>
```

위의 버튼들을:

```javascript
const numberButtons = document.querySelectorAll(".number");
```

와 같이 한 번에 가져올 수 있다.

정리하면,

- `querySelector()` : 요소 하나 선택
- `querySelectorAll()` : 조건에 맞는 요소 여러 개 선택


---

## 3. Event란?

Event(이벤트)는 웹 페이지에서 발생하는 사건이나 동작을 의미한다.

예를 들어 사용자가 버튼을 클릭하거나 마우스를 움직이고 키보드를 누르는 것 등이 Event이다.

대표적인 Event에는 다음과 같은 것들이 있다.

- `click` : 요소를 클릭했을 때
- `mouseover` : 마우스가 요소 위로 올라갔을 때
- `mouseout` : 마우스가 요소 밖으로 나갔을 때
- `keydown` : 키보드의 키를 눌렀을 때
- `keyup` : 눌렀던 키보드의 키를 뗐을 때

예를 들어 계산기에서 사용자가 숫자 버튼 `7`을 클릭하는 것도 하나의 `click` 이벤트이다.


---

## 4. EventListener(이벤트 리스너)

### 4-1. EventListener(이벤트 리스너)란?

EventListener는 특정 요소에서 Event가 발생하는 것을 기다렸다가, Event가 발생하면 지정된 코드를 실행하도록 하는 기능이다.

예를 들어 버튼을 클릭했을 때 특정 코드를 실행하고 싶다면 `addEventListener()`를 사용할 수 있다.

```javascript
button.addEventListener("click", function() {
    console.log("버튼을 클릭했습니다.");
});
```

위 코드에서는 `button`에서 `click` 이벤트가 발생하는지 기다린다.

사용자가 버튼을 클릭하면:

```javascript
console.log("버튼을 클릭했습니다.");
```

가 실행된다.


### 4-2. EventListener를 사용하는 목적과 이유

웹 페이지는 사용자의 행동에 따라 화면이나 기능이 변경되어야 하는 경우가 많다.

예를 들어:

- 버튼을 클릭하면 메뉴 열기
- 로그인 버튼을 클릭하면 로그인 처리하기
- 계산기 버튼을 클릭하면 숫자 입력하기
- 마우스를 올리면 디자인 변경하기
- 키보드를 누르면 검색하기

이런 기능을 구현하려면 사용자의 행동을 감지해야 한다.

EventListener를 사용하면 특정 이벤트가 발생했을 때 원하는 JavaScript 코드를 실행할 수 있다.


### 4-3. EventListener 정의하기

기본적인 형태는 다음과 같다.

```javascript
요소.addEventListener("이벤트", function() {
    실행할 코드
});
```

예를 들어:

```javascript
const button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log("클릭!");
});
```

코드의 실행 순서는 다음과 같다.

1. `querySelector()`로 HTML 버튼을 찾는다.
2. `addEventListener()`를 사용한다.
3. `"click"` 이벤트를 기다린다.
4. 사용자가 버튼을 클릭한다.
5. 함수 내부의 코드가 실행된다.


### 4-4. EventListener 응용

이번 계산기에서는 숫자 버튼을 다음과 같이 가져왔다.

```javascript
const numberButtons = document.querySelectorAll(".number");
```

숫자 버튼이 여러 개이기 때문에 `forEach()`를 이용해서 각각의 버튼에 EventListener를 적용할 수 있다.

```javascript
numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("숫자 버튼 클릭:", button.textContent);
    });
});
```

`forEach()`는 가져온 숫자 버튼을 하나씩 확인한다.

각각의 숫자 버튼에:

```javascript
button.addEventListener("click", ...)
```

을 등록했기 때문에 어떤 숫자 버튼을 클릭하더라도 클릭 이벤트를 감지할 수 있다.

`button.textContent`를 이용하면 클릭한 버튼 안에 있는 글자를 가져올 수 있다.

예를 들어 `7` 버튼을 클릭하면 Console에는:

```text
숫자 버튼 클릭: 7
```

이 출력된다.


---

## 5. 마우스 감지란?

JavaScript에서는 EventListener를 이용하여 사용자의 마우스 행동을 감지할 수 있다.

대표적인 마우스 이벤트는 다음과 같다.

- `click` : 마우스를 클릭했을 때
- `dblclick` : 더블 클릭했을 때
- `mouseover` : 마우스가 요소 위로 올라갔을 때
- `mouseout` : 마우스가 요소 밖으로 나갔을 때
- `mousemove` : 마우스를 움직였을 때


### 마우스 감지 사용

예를 들어 버튼 위에 마우스를 올렸을 때 감지하려면 다음과 같이 작성할 수 있다.

```javascript
const button = document.querySelector("button");

button.addEventListener("mouseover", function() {
    console.log("마우스가 버튼 위에 있습니다.");
});
```

마우스가 버튼 밖으로 나가는 것을 감지하려면:

```javascript
button.addEventListener("mouseout", function() {
    console.log("마우스가 버튼 밖으로 나갔습니다.");
});
```

따라서 EventListener를 이용하면 클릭뿐만 아니라 다양한 마우스 동작을 감지해서 웹 페이지의 기능이나 디자인을 변경할 수 있다.


---

## 6. 화살표 함수란?

화살표 함수(Arrow Function)는 JavaScript에서 함수를 간단하게 작성할 수 있는 문법이다.

일반적인 함수는 다음과 같이 작성할 수 있다.

```javascript
function hello() {
    console.log("안녕하세요");
}
```

함수 표현식에서는:

```javascript
const hello = function() {
    console.log("안녕하세요");
};
```

처럼 작성할 수 있다.

이를 화살표 함수로 변경하면:

```javascript
const hello = () => {
    console.log("안녕하세요");
};
```

처럼 작성할 수 있다.

`=>` 모양 때문에 화살표 함수라고 부른다.


### 화살표 함수 사용

EventListener에서도 화살표 함수를 사용할 수 있다.

기존 방식:

```javascript
button.addEventListener("click", function() {
    console.log("클릭했습니다.");
});
```

화살표 함수를 사용하면:

```javascript
button.addEventListener("click", () => {
    console.log("클릭했습니다.");
});
```

처럼 작성할 수 있다.

이번 계산기의 코드도:

```javascript
numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("숫자 버튼 클릭:", button.textContent);
    });
});
```

화살표 함수를 사용하면 다음과 같이 표현할 수 있다.

```javascript
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("숫자 버튼 클릭:", button.textContent);
    });
});
```

두 코드 모두 같은 방식으로 숫자 버튼의 클릭을 감지한다.


---

# 전체 정리

DOM을 이용하면 JavaScript에서 HTML 요소에 접근하고 조작할 수 있다.

`querySelector()`와 `querySelectorAll()`을 사용하면 원하는 DOM 요소를 선택할 수 있으며, `addEventListener()`를 사용하면 선택한 요소에서 발생하는 클릭이나 마우스 움직임 등의 Event를 감지할 수 있다.

이번 계산기에서는 다음과 같이 사용하였다.

```javascript
const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("숫자 버튼 클릭:", button.textContent);
    });
});
```

전체적인 흐름은 다음과 같다.

```text
HTML 요소
   ↓
DOM
   ↓
querySelector / querySelectorAll
   ↓
원하는 HTML 요소 선택
   ↓
addEventListener
   ↓
사용자의 Event 감지
   ↓
JavaScript 코드 실행
```

따라서 DOM과 Event를 이용하면 사용자의 행동에 반응하는 동적인 웹 페이지를 만들 수 있다.