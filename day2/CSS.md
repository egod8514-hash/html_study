# CSS 정리

## 1. CSS란?

CSS는 Cascading Style Sheets의 약자이다.

HTML이 웹페이지의 구조와 내용을 담당한다면,
CSS는 HTML 요소의 색상, 크기, 위치, 여백 등 디자인을 담당한다.

예를 들어 HTML에서 제목을 만들고,

```html
<h1>안녕하세요</h1>
```

CSS를 이용해 제목의 크기와 색상을 변경할 수 있다.

```css
h1 {
    font-size: 30px;
    color: blue;
}
```

---

# 2. CSS를 적용하는 방법

CSS를 HTML에 적용하는 방법은 크게 3가지가 있다.

## 2-1. Inline CSS

HTML 태그 안에 `style` 속성을 직접 작성하는 방법이다.

```html
<h1 style="color: blue;">안녕하세요</h1>
```

간단하게 스타일을 적용할 수 있지만,
HTML과 CSS가 섞이기 때문에 코드가 복잡해질 수 있다.

---

## 2-2. Internal CSS

HTML 문서의 `<head>` 안에 `<style>` 태그를 사용하여 CSS를 작성한다.

```html
<head>

    <style>

        h1 {
            color: blue;
        }

    </style>

</head>
```

하나의 HTML 파일에만 스타일을 적용할 때 사용할 수 있다.

---

## 2-3. External CSS

CSS 파일을 별도로 만들어 HTML에 연결하는 방법이다.

HTML

```html
<link rel="stylesheet" href="resume_style.css">
```

CSS

```css
h1 {
    color: blue;
}
```

HTML과 CSS를 분리할 수 있기 때문에
코드를 관리하기 편리하다.

이번 이력서 과제에서는 External CSS 방식을 사용하였다.

---

# 3. CSS Selector

Selector는 CSS를 적용할 HTML 요소를 선택하는 방법이다.

## 태그 선택자

HTML 태그 이름으로 요소를 선택한다.

```css
p {
    color: gray;
}
```

모든 `<p>` 태그에 적용된다.

---

## Class 선택자

HTML 요소의 `class` 값을 이용하여 선택한다.

HTML

```html
<section class="resume-section">
    내용
</section>
```

CSS

```css
.resume-section {
    margin-top: 40px;
}
```

Class 선택자는 이름 앞에 `.`을 사용한다.

---

## ID 선택자

HTML 요소의 `id`를 이용하여 선택한다.

HTML

```html
<main id="resume">
    내용
</main>
```

CSS

```css
#resume {
    background-color: white;
}
```

ID 선택자는 이름 앞에 `#`을 사용한다.

---

## 전체 선택자

모든 HTML 요소를 선택한다.

```css
* {
    box-sizing: border-box;
}
```

`*`는 모든 요소를 의미한다.

---

# 4. Text 관련 CSS 속성

## font-size

글자의 크기를 설정한다.

```css
h1 {
    font-size: 36px;
}
```

---

## font-weight

글자의 굵기를 설정한다.

```css
h1 {
    font-weight: bold;
}
```

또는 숫자로 설정할 수도 있다.

```css
h1 {
    font-weight: 700;
}
```

---

## text-align

글자의 정렬 방향을 설정한다.

```css
p {
    text-align: center;
}
```

대표적인 값:

- `left` : 왼쪽 정렬
- `center` : 가운데 정렬
- `right` : 오른쪽 정렬

---

## color

글자의 색상을 설정한다.

```css
p {
    color: #333;
}
```

---

## line-height

글자의 줄 간격을 설정한다.

```css
p {
    line-height: 1.7;
}
```

---

# 5. Box Model

HTML의 각 요소는 하나의 박스로 생각할 수 있다.

Box Model은 다음과 같이 구성된다.

```text
Margin
 └─ Border
     └─ Padding
         └─ Content
```

### Content

실제 글자나 이미지가 들어가는 영역이다.

### Padding

Content와 Border 사이의 안쪽 여백이다.

### Border

요소의 테두리이다.

### Margin

다른 요소와 떨어지는 바깥쪽 여백이다.

---

## margin

요소 바깥쪽의 여백을 설정한다.

```css
.resume-section {
    margin-top: 40px;
}
```

---

## padding

요소 안쪽의 여백을 설정한다.

```css
.resume {
    padding: 50px;
}
```

---

## border

요소의 테두리를 설정한다.

```css
.resume-section h2 {
    border-left: 4px solid #333;
}
```

---

## width

요소의 너비를 설정한다.

```css
.resume {
    width: 800px;
}
```

---

## height

요소의 높이를 설정한다.

```css
.profile-image {
    height: 110px;
}
```

---

## box-sizing

요소의 크기를 계산하는 방식을 설정한다.

```css
* {
    box-sizing: border-box;
}
```

`border-box`를 사용하면 width와 height 안에
padding과 border 크기가 포함된다.

---

# 6. Flexbox

Flexbox는 여러 HTML 요소를 쉽게 정렬할 수 있도록 도와주는 CSS 기능이다.

```css
.container {
    display: flex;
}
```

기본적으로 자식 요소들이 가로 방향으로 배치된다.

예를 들어 이번 이력서에서는

```text
사이드바 | 이력서
```

형태로 배치하기 위해 사용하였다.

---

## justify-content

주축 방향의 요소 정렬을 설정한다.

```css
.profile {
    display: flex;
    justify-content: space-between;
}
```

`space-between`을 사용하면 요소들이 양쪽 끝으로 배치된다.

---

## align-items

반대 축 방향의 요소 정렬을 설정한다.

```css
.profile {
    align-items: center;
}
```

---

## gap

Flex 요소 사이의 간격을 설정한다.

```css
.skill-list {
    display: flex;
    gap: 8px;
}
```

---

# 7. 반응형 디자인

반응형 디자인은 PC, 태블릿, 스마트폰 등
화면 크기에 따라 웹페이지의 레이아웃이 변경되도록 만드는 방법이다.

CSS에서는 Media Query를 사용할 수 있다.

```css
@media (max-width: 768px) {

    .container {
        display: block;
    }

    .sidebar {
        width: 100%;
    }

    .resume {
        width: 100%;
    }

}
```

화면의 너비가 768px 이하가 되면
위 CSS가 적용된다.

PC에서는

```text
사이드바 | 이력서
```

형태로 표시하고,

모바일에서는

```text
사이드바
────────
이력서
```

형태로 변경할 수 있다.

---

# 8. 이번 과제에서 사용한 CSS 정리

이번 이력서 스타일링에서는 다음 내용을 사용하였다.

- External CSS
- CSS Selector
- font-size
- font-weight
- color
- line-height
- margin
- padding
- border
- width
- height
- box-sizing
- display: flex
- justify-content
- align-items
- gap
- Media Query
- Responsive Design