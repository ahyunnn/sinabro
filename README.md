# 시나브로 (SINABRO) 👵👴

### 🎤 시나브로 소개 :

"복지관 시설을 내 집으로!" <br/>
온라인 노인여가복지 플랫폼을 제공합니다. <br/>

시나브로 : ‘조금씩 천천히’라는 뜻의 순우리말로 조금씩 천천히 성장한다,<br/> 가까워 진다는 듯을 담고 있습니다. <br/>

### 📃 Contents

1. [개발기간](#-개발기간) <br/>
2. [팀원 및 담당파트](#team) <br/>
3. [기획배경 & 타겟](#target-people) <br/>
4. [주요기능](#main-function) <br/>
5. [서비스 화면](#service) <br/>
6. [실행방법](#how-to-run) <br/>
7. [기술스택](#stack) <br/>
8. [시스템 아키텍처](#tech-architecture) <br/>
9. [ERD ](#erd) <br/>
10. [API 명세서](#api) <br/>
11. [스케줄](#schedule) <br/>
12. [협업툴](#cooperation-tool) <br/>

### 📆 개발기간:

<p> 2023.01.03 ~ 2023.02.16 </p>

### 💻 팀원 및 담당파트

- **윤선영(팀장/프런트엔드)**

- **김호균(팀원/백엔드)**

- **양동기(팀원/백엔드)**:

- **이아현(팀원/프런트엔드)**

- **이진우(팀원/백엔드)**:

### ✔️ 기획배경 & 타겟

- 기획배경:

  1. 노인 복지관 같은 어르신을 위한 복지시설이 수도권, 대도시에 주로 편중되어 있어서 노인 복지 지역격차가 발생하고 있다.
  2. 코로나19와 같은 특수 상황의 경우, 노인 활동이 가장 먼저 제약되고 이에 따라 노인층의 고립감과 외로움이 증폭된다. 이와 같은 상황을 해소하고자 기존에 제공되던 문화복지 강의들을 온라인으로 제공하고 있음.
  3. 웹엑스나 줌 같은 화상회의의 경우, 어르신들이 쓰기 불편한 UI/UX를 가지고 있음. 그래서 우리는 시나브로라는 어르신 맞춤형 온라인 강의 플랫폼 서비스를 기획하게 되었음.
  4. 고령화 시대에 발맞춰 향후 다음세대도 활용할 수 있는 온라인 복지 강의 플랫폼.

- 타겟층 :

  - 디지털 기기 활용이 가능한 60-70대 노인층
  - 시간적, 공간적, 신체적 제약으로 인해 다양한 강의 복지 서비스를 누리지 못하는 노인층.

### 🔍 주요기능

- 주요 기능 :
  - webRTC를 통한 실시간 화상 강의
  - 사용자(어르신) 친화적인 디자인을 고려한 UI/UX
  - 간소화된 회원가입 및 로그인, 강의신청, 화상강의 입장 프로세스
  - 3가지 화면 모드 : 참여자 모드, 화면 공유 모드, 무대 모드
  - 강사님이 참여자 마이크 원격 제어 가능함

### 👀 시나브로 서비스 화면

### < 수강자 화면>

##### 1. 회원가입 및 로그인

![첫페이지.png](assets/3e42e124515dacf94523ac11f0e3fc9a84cdd81a.png)

![회원가입1.png](assets/97f727858d51a9a664cb49b7ed79971c24db5200.png)

![회원가입2.png](assets/6e96a4bc90652056cfc36ba31815870107b63d58.png)

![회원가입3.jpg](assets/ab42141861fcb8fbe4fb2cdbb17a24e03f741980.jpg)

![회원가입4.png](assets/795a59100740f688df24c28e3dd991c523c939b6.png)

![회원가입5.png](assets/6d06833a85cd72da0da3b420d3d114902e7bab49.png)

![회원가입6.png](assets/745cd3385d5ac74ad65a9c6c9318b5bc7e74f3ad.png)

##### 2. 로그인

![로그인.png](assets/307564d01b209dd3bdda6f682375f5f403984d84.png)

##### 3. 메인페이지

![메인1.png](assets/36839af70ab89f0de7b9fb268b2cd26e94636241.png)

##### 4. 수강신청

![수강신청1.png](assets/b1e0808df44de38e0ab2dd35db5cd66d4091b8d5.png)

##### 5. 나의 배움터 확인 및 강의 입장

![수강신청 (1).jpg](assets/f1410233d308a6cefca34f5e0b7bb04dfc4b59f6.jpg)

##### 6. 대분류/소분류 카테고리별 강의 검색

![소분류카테고리.png](assets/48a6a87c0035f69b1c9835ea7ed956ef9d78251d.png)

##### 7. 강의 검색 결과

![검색결과.png](assets/5736898fc6540e9e0f865214bc1fc0900029c267.png)

##### 8. 화상회의 창 (기본)

![강의입장.png](assets/542c3e2bd20e7fb5ba0bd7dbcedd3a5982ee60bb.png)

##### 9. 화상회의 창 (돋보기)

![화면공유.png](assets/927e365c2e48131cfa752a7ed0b693c6bded7c85.png)

## <강의자 화면>

##### 1. 메인페이지

![강사메인.png](assets/88e76b20a123d1ae78bbfd835f70e9b713f34acb.png)

##### 2. 강의화면

![강사강의화면.png](assets/f135b9de0aed5577e79c25628d8ddea68da7accf.png)

##### 3. 화면 공유

![화면공유.png](assets/927e365c2e48131cfa752a7ed0b693c6bded7c85.png)

##### 4. 참여형 화면

![참여형.png](assets/c96d46ba9d75e5465d3087f1eade14d298949be8.png)

##### 5. 전체음소거

![전체음소거.png](assets/c03b006a3483575904816571b309c15162143a3b.png)

### ✨ 실행방법

- 포팅 매뉴얼 참조

### 📚 기술스택

- Front-End:
  - React
  - reduxjs/toolkit
  - styled-components
- Backend
  - Database: Mysql
  - Web: Springboot
  - Library: Spring JPA, Spring Security, OpenVidu
- CI/CD
  - Docker
  - Jenkins
- Web Service
  - AWS EC2
  - Nginx

### 🔨 시스템 아키텍처

![시스템아키텍처.png](assets/844a88eab734fa1c753317c15e01e509373a2d12.png)

### 🎨 ERD

![ERD.png](assets/242d16ffaf009f4dd2491a6a6212b7a730cf714d.png)

### 💡 API 명세서

![API문서.png](assets/2ad7924065412cd4b9afcfef1779469fdb7b5b91.png)

### 🗓️ 스케줄(간트차트)

![간트차트.png](assets/3c9d9211bd6ac36872a7b0c0b52a073fd234e58d.png)

### 💪 협업툴

- Notion
- Jira
- GitLab
- Figma
- MatterMost
