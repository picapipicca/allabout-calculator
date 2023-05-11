<h2>All about Calculator / 올 어바웃 계산기</h2>

<br/>

<img width="100%" src="https://s3.ap-northeast-2.amazonaws.com/picapipicca.shop/home-og-image.png" alt="allabout">

<br/>

- [사이트 링크 바로가기](https://allcalculator.shop/)

<br/>

# 목차

- 목차
  - [프로젝트 소개](#프로젝트-소개)
  - [프로젝트 기간](#프로젝트-기간)
  - [프로젝트 구조](#프로젝트-구조)
  - [페이지 구성](#페이지-구성)
  - [유저 피드백 및 개선사항](#유저-피드백-및-개선사항)

<br/>

## 프로젝트 소개
- 2023년 내 연봉으로 받는 실수령액이 얼마인지 궁금하지 않으신가요? <br/>
  공제액, 실수령액 뿐만 아니라 연봉 협상시 빠르게 사용할수 있는 퍼센트 상승별 내 연봉까지 알아 볼수 있는 계산기 입니다. <br/>
  또한 이력서, 자소서 작성시 꼭 필요한 글자수 체크, 글의 전과 후를 비교하는 다른곳 찾기, 적정 체중을 알려주는 비만도 계산기 까지 살면서 한번쯤 사용해본 여러가지 기능들을 모아놓았습니다

<br/>

## 프로젝트 기간

- 2023.01~2023.03

<br/>

## Project Structure

```
├── node_modules
├── public
├── components
│   ├── atoms                        
│   ├── bmi                      
│   ├── icons                                 
│   ├── layout
│   └── payTax
├── helper                           
│   ├── client
│   └── server
├── pages   
│   ├── api
│   ├── income                      
│   ├── _app.tsx                                 
│   ├── _document.tsx
│   ├── 404.tsx
│   ├── bmi.tsx
│   ├── character.tsx
│   ├── differCheck.tsx                        
│   ├── index.tsx
│   └── sitemap.xml.ts
├── prisma
├── styles
├── .env
├── package.json
├── package-lock.json
├── postcss.config.js
├── seo.config.js
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```


<br/>

## 🛠 기술 스텍 및 라이브러리
- 주요언어: Typescript
- 주요 라이브러리: NextJS
- 상태관리 : swr (data fetching library)
- 백엔드
  - planet scale (serverless MySQL platform)
  - prisma (orm)
- 배포
  - vercel
- 스타일
  - tailwind css
- 라이브러리 & 패키지
  -  react-chartjs-2
  -  react-diff-viewer
  -  next-seo

<br/>

## **페이지 구성📖**

- 메인 ( 연봉계산기 검색 )
- 연봉 계산기 결과
- 비만도 계산기 검색/결과
- 다른곳 찾기 검색/결과
- 글자수 세기

<br/>

## ⛔️ Trouble Shooting & Project Details

> 레이아웃
  - figma를 통해 레이아웃 구성
  - 모바일 화면을 우선으로 하는 tailwind css 를 사용함으로써 데스크탑,태블릿 pc, 모바일 모두에 최적화된 반응형 웹사이트 화면을 구현


> Database 
 - MySQL 호환 서버리스 데이터 플랜폼인 planet scale 과 typescript , nodejs 기반 orm인 prisma 사용해서 구성
 - prisma로 Amount data model 정의
 - 모든 사용자가 검색한 연봉을 db에 저장하고 반복된 수를 세서 그래프로 다시 출력. 사용자들이 많이 검색해보는 연봉을 범위에 따라 퍼센트 별로 노출
 - 추후 연봉 범위 별로 사용자가 원하는 범위에 들어가 소통할수 있는 커뮤니티 기능 추가제작 고려


> NextJS를 이용한 SEO 최적화 
 - nextjs 의 pre-rendering 을 이용해 업데이트가 자주 일어나지 않는 연봉계산기의 경우 빌드시에 연봉 2000만원~1억까지 html을 미리 생성함으로써 검색엔진에 잘 노출될수 있도록 설정
 - nextjs의 getStaticProps 를사용해 pre-render된 동적 페이지 정보들을 metatag/og tag 적용
 - 미리 생성되지 않은 페이지들을 dynamic routing을 통해 들어올때마다 수집해 동적으로 sitemap에 추가
 - robots.txt 작성 / 시멘틱 태그 사용
 - google analytics/ GTM / naver 웹 마스터 도구 로 사용자 분석


> 연봉계산기
 -   소득세 계산시 국세청 공식페이지에 있는 방대한 양의 엑셀을 가져와서 사용자가 검색한 연봉에 해당하는 범위에 있는 소득세를 찾아야 했음. 엑셀을 파싱해서 
범위안에 있는 소득세를 찾는 로직이 더 오래 걸린다는 판단하에 간단하게 엑셀에 있는 범위를 모두 단순 반복문을 통해 함수로 구현. 
 - 부양가족 1명과 여러명에 대한 소득세가 모두 다른데 부양가족 1명에 대한 값으로만 구현해서 2명과 여러명일때에 대한 업데이트 필요
 - 사용자가 검색한 것에 대한 카운트를 db에 저장해서 보여주는 파이 그래프를 만듦으로써 사용자에게 더 다양한 정보를 재공하고 재미를 더함
 - 연봉별 공제액과 실수령액만 보여주는 표를 하단에 배치함으로써 사용자 편의성 고려 
 - 그래프와 퍼센트별 연봉
   -  사용자가 제일 궁금해 하는것이 다른사람들은 어떤 연봉을 가장 많이 검색해 봤는가 일것같아 그래프 퍼센트로 나타냄
   -  + / -  퍼센트 기능 추가

> 사이트 노출을 위한 seo 
  - h1-h4 semantic tag 사용 , og tag images 모두 페이지 별로 다르게 사용. 인덱싱이 잘 안되서 ..어떻게 해떠라....??????

> next JS sitemap 작성
 - 구글이나 네이버에 잘 노출되기 위해 사이트맵 적용
 - 사용자가 새로운 연봉을 검색할때마다 사이트맵 업데이트가 필요해서 getServerSideProps 의 res 객체를 이용해 자동으로 동적인 사이트맵을 생성해 주는 기능 구현
   - 정적페이지에 대한 sitemap 생성 : 프로젝트 폴더 구조를 바탕으로 정적인 페이지들의 sitemap 작성 (비만도 계산기, 글자수 세기, 다른곳찾기 그리고 연봉 1000만원 - 2억까지 100만원 단위의 정적 페이지)
   - 동적 페이지에 대한 sitemap 생성 : 1000만원부터 2억까지 100만원 단위의 값(1100,1200,...) 을 제외한 연봉을 백엔드로부터 swr로 amount list를 받아오는 방식으로 개발

- nextjs 에 내장되어있는 ISR 을 통해 1000만원 - 2억원 까지 100 만원 단위로 미리 html 작성하여 사용자가 로딩화면을 보지않고 화면을 볼수있음 이외의 연봉을 입력할시에 사용자는
  skeleton component를 통해 기다린후 화면을 볼수 있도록 함
 
> Analytics
- 사용자의 실제 사이트 활용률과 사이트 노출을 확인하기 위해  google analytics, naver webmaster, naver analytics 도입해서 분석중

<br/>

## 유저 피드백 및 개선사항

(1) 내 연봉에서 몇퍼센트 오르면 얼마다 라고 알수있는 기능이 있으면 연봉협상시 잘 쓸 것 같아요
  - 전: 검색한 연봉으로만 공제액과 실수령액 결과 단순 노출
  - 후: +/- 버튼을 추가해 검색한 연봉에서 % 별 연봉 상승/하락을 바로 볼수있음

(2) 다른사람들은 어떤 연봉을 검색하는지 궁금해요
 - 전: 검색한 연봉으로만 공제액과 실수령액 결과 단순 노출
 - 후: 사용자의 검색 연봉을 db에  저장하여 연봉 범위별 검색 비율을 파이 그래프로 시각적으로 보여줌

  <br/>
