<h2>All about Calculator / 올 어바웃 계산기</h2>

<br/>

<img width="100%" src="https://s3.ap-northeast-2.amazonaws.com/picapipicca.shop/home-og-image.png" alt="allabout">

<br/>

- [사이트 링크 바로가기](https://allcalculator.shop/)

<br/>

# 목차

  - 프로젝트 소개 및 기간
  - 프로젝트 구조
  - 페이지 구성
  - 트러블 슈팅 & 프로젝트 디테일
  - 유저 피드백 및 개선사항
  
<br/>

## 프로젝트 소개
- 2023년 내 연봉으로 받는 실수령액이 얼마인지 궁금하지 않으신가요? <br/>
  공제액, 실수령액 뿐만 아니라 연봉 협상시 빠르게 사용할수 있는 퍼센트 상승별 내 연봉까지 알아 볼수 있는 계산기 입니다. <br/>
  또한 이력서, 자소서 작성시 꼭 필요한 글자수 체크, 글의 전과 후를 비교하는 다른곳 찾기, 적정 체중을 알려주는 비만도 계산기 까지 살면서 한번쯤 사용해본 여러가지 기능들을 모아놓았습니다

<br/>

## 프로젝트 기간

- 2023.01~2023.03

<br/>

## 프로젝트 구조 🗂️

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

## 기술 스텍 및 라이브러리 🛠
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

## 페이지 구성 📖

- 메인 ( 연봉계산기 검색 )
- 연봉 계산기 결과
- 비만도 계산기 검색/결과
- 다른곳 찾기 검색/결과
- 글자수 세기

<br/>

## 트러블 슈팅 & 프로젝트 디테일 ⛔️

> 레이아웃
  - 모바일 화면을 우선으로 하는 tailwind css 를 사용함으로써 데스크탑, 태블릿 pc, 모바일 모두에 최적화된 반응형 웹사이트 화면을 구현


> Database 
 - MySQL 호환 서버리스 데이터 플랜폼인 planet scale 과 typescript , nodejs 기반 orm인 prisma library 사용해서 구성
 - prisma로 Amount data model 정의 
 - 모든 사용자가 검색한 연봉(income)과 반복 검색된 수(count)를 db에 저장


> NextJS를 이용한 SEO 최적화 
 - NextJS 의 pre-rendering 기능을 이용해 업데이트가 자주 일어나지 않는 연봉계산기의 경우 빌드시에 연봉 2000만원~1억까지 html을 미리 생성함으로써 검색엔진에 노출될수 있도록 설정
 - NextJS 의 getStaticProps 기능을 이용해 pre-render된 동적 페이지(dynamic routing) 정보들을 meta tag / og tag 적용 -> dynamic meta tag / og tag 설정
 - sitemap.xml, robots.txt 작성


> 연봉계산기
 - 소득세 계산시 국세청 공식페이지에 있는 큰 용량의 엑셀을 가져와서 사용자가 검색한 연봉에 해당하는 범위에 있는 소득세를 찾아야 했는데,
   엑셀을 읽어서 범위안에 있는 소득세를 찾는 로직이 더 오래 걸린다는 판단하에 간단하게 엑셀에 있는 범위를 모두 단순 반복문을 통해 함수로 구현
 - 부양가족 1명과 여러명에 대한 소득세가 모두 다른데 부양가족 1명에 대한 값으로만 구현해서 2명과 여러명일때에 대한 업데이트 필요
 - db에 저장된 검색된 연봉들의 count를 금액 범위에 따라 파이그래프로 노출
 - 연봉별 공제액과 실수령액만 보여주는 표를 하단에 배치함으로써 사용자 편의성 고려 
 - 연봉 협상시에 유용하게 사용할수 있는 퍼센트별 내 연봉을 알수있는 + / -  퍼센트 기능 추가
 - 추후 연봉 범위 별로 사용자가 원하는 범위에 들어가 소통할수 있는 커뮤니티 기능 추가제작 고려


> 사이트 노출을 위한 seo 개선
 - 구글 서치 콘솔에서의 인덱싱이 잘 이루어 지지 않아서 개선 중
 - semantic tag 사용
 

> sitemap 작성
 - 구글이나 네이버 검색엔진에 잘 크롤링되기 위해 사이트맵 적용
 - 사용자가 새로운 연봉을 검색할때마다 사이트맵 업데이트가 필요해서 자동으로 동적인 사이트맵을 생성해 주는 기능 구현 
   - 정적페이지에 대한 sitemap 생성 : 프로젝트 폴더 구조를 바탕으로 정적인 페이지들의 sitemap 작성 (비만도 계산기, 글자수 세기, 다른곳찾기 그리고 연봉 1000만원 - 2억까지 100만원 단위의 정적 페이지)
   - 동적 페이지에 대한 sitemap 생성 : 1000만원부터 2억까지 100만원 단위의 값(1100,1200,...) 을 제외한 검색된 연봉을 백엔드로부터 swr로 amount list를 받아오는 방식으로 개발


> Analytics
- 사용자의 실제 사이트 활용률과 사이트 노출을 확인하기 위해 Google Analytics, Naver 웹 마스터, Google Tag Manager 를 통해 분석중

<br/>

## 유저 피드백 및 개선사항

(1) 내 연봉에서 몇퍼센트 오르면 얼마다 라고 알수있는 기능이 있으면 연봉협상시 잘 쓸 것 같아요
  - 전: 검색한 연봉으로만 공제액과 실수령액 결과 단순 노출
  - 후: +/- 버튼을 추가해 검색한 연봉에서 % 별 연봉 상승/하락을 바로 볼수있음

(2) 다른사람들은 어떤 연봉을 검색하는지 궁금해요
 - 전: 검색한 연봉으로만 공제액과 실수령액 결과 단순 노출
 - 후: 사용자의 검색 연봉을 db에  저장하여 연봉 범위별 검색 비율을 파이 그래프로 시각적으로 보여줌

  <br/>
