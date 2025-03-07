# Codeit / **풀스택\_1기\_PART4_TEAM1**

📋 [무빙 - 프로젝트 문서](https://bubble-city-3ac.notion.site/1469702f08878035a353e93642fe2232?v=1469702f0887812c9d6a000c643c23d7&pvs=4)

💻 [GitHub Repository](https://github.com/codeit-moving)

🌐 [무빙 - 배포사이트](https://moving-fe-weld.vercel.app/)

## **목차**

1. [서비스 소개](#app)
2. [프론트엔드 팀 소개](#team)
3. [기술 및 개발 환경](#dev)
4. [구현 기능](#feature)
6. [프로젝트 구조](#tree)
7. [협업 문화](#culture)

<br><br>

## <span id="app">📝 1. 서비스 소개</span>

> 소개: 이사 소비자와 이사 전문가 매칭 서비스

이사 시장에서는 무분별한 가격 책정과 무책임한 서비스 등으로 인해 정보의 투명성 및 신뢰도가 낮은 문제가 존재합니다. 이러한 문제를 해결하기 위해, 소비자가 원하는 서비스와 주거 정보를 입력하면 이사 전문가들이 견적을 제공하고 사용자가 이를 바탕으로 이사 전문가를 선정할 수 있는 매칭 서비스를 제작합니다. 이를 통해 소비자는 견적과 이사 전문가의 이전 고객들로부터의 후기를 확인하며 신뢰할 수 있는 전문가를 선택할 수 있고, 소비자와 이사 전문가 간의 간편한 매칭이 가능합니다.

> 프로젝트 기간: 2024.11.17 ~ 2025.01.13

<br><br>

## <span id="team"> 🧑🏻‍💻👩🏻‍💻 2. 프론트엔드 팀 소개</span>

### 팀원

| 김현우                                                                           | 이진우                                                                          | 임송이                                                                           | 주영은                                                                          |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/158241915?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/58920761?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/126642292?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/80696592?v=4" width="200px"/> |
| [Accreditus](https://github.com/Accreditus)                                      | [ajantang](https://github.com/ajantang)                                         | [Im-amberIm](https://github.com/Im-amberIm)                                      | [juyeongeun](https://github.com/juyeongeun)                                     |

<br>

<br><br>

## <span id="dev">📝 3. 기술 및 개발 환경</span>

#### FRONT-END

<div align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge" height="30" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=black&style=for-the-badge" height="30" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=black&style=for-the-badge" height="30" alt="storybook logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" height="30" alt="typescript logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Sentry-362D59?logo=sentry&logoColor=white&style=for-the-badge" height="30" alt="sentry logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/-TanStack Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" height="30" alt="tanstack logo"  />
 <img width="12" />
 <img src="https://img.shields.io/badge/-Zustand-Fee354?style=for-the-badge&logo=&logoColor=white" height="30" alt="zustand logo"  />
 <img width="12" />
 <img src="https://img.shields.io/badge/MockServiceWorker-FF6A33?style=for-the-badge&logo=mockserviceworker&logoColor=white" height="30" alt="mock service worker logo"  />
</div>

#### COLLABORATION TOOL

<div align="left">

  <img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge" height="30" alt="git logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge" height="30" alt="github logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white&style=for-the-badge" height="30" alt="discord logo"  />
   <img width="12" />
  <img src="https://img.shields.io/badge/Notion-000000?logo=notion&logoColor=white&style=for-the-badge" height="30" alt="notion logo"  />
</div>

###

<br><br>

## <span id="feature">📝 4. 구현 기능 상세</span>

### **주영은**

- **공통 Component**
  - Input
    - 페이지에서 공통으로 사용되는 Input을 공통 컴포넌트로 제작
    - 타입에 따라 검색 Input, PW Input 등 디자인 고려
  - Modal
    - 유사한 Modal끼리 그룹화해 컴포넌트 제작
    - 비밀번호 확인 모달 추가 제작
- **[기사&고객] 일반 로그인 및 회원가입**
  - PAGE
    - 기사님과 일반 유저를 분리하여 로그인 및 회원가입 페이지 제작
    - 회원가입 시 기본 정보 작성 후 프로필 생성 페이지로 자동 이동
  - API
    - 각 유저 타입에 대한 end-point 호출
    - 기사님 : `POST auth/signup/{userType}`
  - Cookie
    - next.config.js에서 rewrite()를 활용하여 Next.js 서버를 프록시처럼 사용해 CORS 이슈 해결, 보안 강화, 쿠키 자동 전달을 구현
- **소셜 로그인 기능**

  - API

    - 각 유저와 sns 타입에 대한 end-point 호출
      `${backUrl}/oauth/${sns}/${userType}`

  - Cookie
    - middleware.ts에서 oauth로 오는 쿠키 도메인을 로컬로 변경하는 작업을 통해 Cookie 유지

- **소셜 회원가입 후 회원 프로필 정보 입력 기능**
  - user 타입(기사님, 고객)에 대한 프로필 입력을 위해 백엔드에서 받은 redirectUrl로 페이지 이동
  - API
    - `POST {userType}`
- **[기사&고객] 기본 정보**
  - PAGE
    - user 타입에 따라 기본 정보 수정하는 페이지 제작
    - 페이지 접근 전 비밀번호 확인을 위한 모달 추가 생성
    - 소셜 로그인 사용자는 기본 정보 수정 불가 모달 추가 생성
  - API
    - 기사님과 고객 동일한 end-point 사용으로 PATCH users/ 호출
- [기사&고객] 프로필 정보
  - PAGE
    - user 타입에 따라 프로필 정보 등록 페이지 제작
    - user 타입에 따라 프로필 정보 수정하는 페이지 제작
  - API
    - user 타입에 대한 end-point 사용
    - `PATCH {userType}/`
- [고객] 기사님 상세 페이지 제작
  - 해당 기사님에 대한 상세 페이지 제작
  - 기본 정보 카드 컴포넌트 사용
  - 리뷰 카드 컴포넌트 사용
- [기사] 마이페이지
  - 기본 정보 카드 컴포넌트 사용
  - 기본 정보 수정 및 프로필 수정 버튼을 통해 각각의 페이지로 연결
- [기사] 내 견적 관리 및 견적 상세 페이지
  - PAGE
    - 보낸 견적 페이지 제작
    - 견적 상세 페이지 제작
    - 반려 견적 페이지 제작
    - 해당 견적에 대한 타입(보낸 견적 조회, 반려 요청)에 따라 카드 컴포넌트를 사용

<br><br>

<br/>

## <span id="tree"> 🗂️ 6. SRC 파일 구조 </span>

```

📦src
 ┣ 📂api
 ┃ ┣ 📂mutation-hooks
 ┃ ┃ ┣ 📜mover.ts
 ┃ ┃ ┣ 📜movingRequest.ts
 ┃ ┃ ┗ 📜review.ts
 ┃ ┣ 📂query-hooks
 ┃ ┃ ┣ 📜mover.ts
 ┃ ┃ ┣ 📜quote.ts
 ┃ ┃ ┗ 📜review.ts
 ┃ ┣ 📜auth.ts
 ┃ ┣ 📜axios.ts
 ┃ ┣ 📜customer.ts
 ┃ ┣ 📜mover.ts
 ┃ ┣ 📜movingRequest.ts
 ┃ ┣ 📜notification.ts
 ┃ ┣ 📜pendingQuote.ts
 ┃ ┣ 📜queryKeys.ts
 ┃ ┣ 📜quote.ts
 ┃ ┣ 📜review.ts
 ┃ ┗ 📜user.ts
 ┣ 📂app
 ┃ ┣ 📂(mover)
 ┃ ┃ ┣ 📂mover
 ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📂register
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂info-edit
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂my-page
 ┃ ┃ ┃ ┃ ┣ 📜ProfileActions.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂my-quote
 ┃ ┃ ┃ ┃ ┣ 📂[quoteId]
 ┃ ┃ ┃ ┃ ┃ ┣ 📜SentQuoteDetail.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┃ ┣ 📜ProfileContent.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂profile-edit
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂request
 ┃ ┃ ┃ ┃ ┣ 📜CreateQuoteNiceModal.tsx
 ┃ ┃ ┃ ┃ ┣ 📜FilterNiceModal.tsx
 ┃ ┃ ┃ ┃ ┣ 📜RejectRequetNiceModal.tsx
 ┃ ┃ ┃ ┃ ┣ 📜RequestForm.tsx
 ┃ ┃ ┃ ┃ ┣ 📜filters.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜layout.tsx
 ┃ ┣ 📂(request)
 ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┣ 📜AddressSelectionField.tsx
 ┃ ┃ ┃ ┣ 📜Chatter.tsx
 ┃ ┃ ┃ ┣ 📜ProgressBarMovingRequest.tsx
 ┃ ┃ ┃ ┣ 📜StepSelectionFiled.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜layout.tsx
 ┃ ┣ 📂(user)
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┣ 📜SearchParamsContent.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂register
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂find-mover
 ┃ ┃ ┃ ┣ 📂[moverId]
 ┃ ┃ ┃ ┃ ┣ 📜ClientPage.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📜DropdownList.tsx
 ┃ ┃ ┃ ┣ 📜moverList.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂me
 ┃ ┃ ┃ ┣ 📂info-edit
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂mover
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂profile-edit
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂review
 ┃ ┃ ┃ ┃ ┣ 📜EmptyReview.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂my-quote
 ┃ ┃ ┃ ┣ 📂[quoteId]
 ┃ ┃ ┃ ┃ ┣ 📜QuoteDetail.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📜expiredRequests.tsx
 ┃ ┃ ┃ ┣ 📜mock.ts
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜layout.tsx
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜GeistMonoVF.woff
 ┃ ┃ ┣ 📜GeistVF.woff
 ┃ ┃ ┣ 📜PretendardVariable.woff2
 ┃ ┃ ┗ 📜pretendard.css
 ┃ ┣ 📜error.tsx
 ┃ ┣ 📜global-error.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx
 ┃ ┣ 📜not-found.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜FormHeader.tsx
 ┃ ┃ ┣ 📜LoginComponent.stories.tsx
 ┃ ┃ ┣ 📜LoginComponent.tsx
 ┃ ┃ ┣ 📜RoleGuard.tsx
 ┃ ┃ ┣ 📜SignUpComponent.stories.tsx
 ┃ ┃ ┣ 📜SignUpComponent.tsx
 ┃ ┃ ┗ 📜SnsComponent.tsx
 ┃ ┣ 📂cards
 ┃ ┃ ┣ 📜ConfirmedQuoteCard.stories.tsx
 ┃ ┃ ┣ 📜ConfirmedQuoteCard.tsx
 ┃ ┃ ┣ 📜CreateReviewCard.stories.tsx
 ┃ ┃ ┣ 📜CreateReviewCard.tsx
 ┃ ┃ ┣ 📜FavoriteMoverCard.stories.tsx
 ┃ ┃ ┣ 📜FavoriteMoverCard.tsx
 ┃ ┃ ┣ 📜IncomingRequestCard.stories.tsx
 ┃ ┃ ┣ 📜IncomingRequestCard.tsx
 ┃ ┃ ┣ 📜MoverInfoCard.stories.tsx
 ┃ ┃ ┣ 📜MoverInfoCard.tsx
 ┃ ┃ ┣ 📜MoverProfileCard.stories.tsx
 ┃ ┃ ┣ 📜MoverProfileCard.tsx
 ┃ ┃ ┣ 📜MyReviewCard.stories.tsx
 ┃ ┃ ┣ 📜MyReviewCard.tsx
 ┃ ┃ ┣ 📜PendingRequestCard.stories.tsx
 ┃ ┃ ┣ 📜PendingRequestCard.tsx
 ┃ ┃ ┣ 📜ReceivedQuoteCard.stories.tsx
 ┃ ┃ ┣ 📜ReceivedQuoteCard.tsx
 ┃ ┃ ┣ 📜RejectedRequestCard.stories.tsx
 ┃ ┃ ┣ 📜RejectedRequestCard.tsx
 ┃ ┃ ┣ 📜SentQuoteCard.stories.tsx
 ┃ ┃ ┗ 📜SentQuoteCard.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┃ ┣ 📜CardContainer.tsx
 ┃ ┃ ┃ ┣ 📜FavoriteUi.stories.tsx
 ┃ ┃ ┃ ┣ 📜FavoriteUi.tsx
 ┃ ┃ ┃ ┣ 📜GrayLabel.stories.tsx
 ┃ ┃ ┃ ┣ 📜GrayLabel.tsx
 ┃ ┃ ┃ ┣ 📜MoverExperience.tsx
 ┃ ┃ ┃ ┣ 📜MoverInfo.stories.tsx
 ┃ ┃ ┃ ┣ 📜MoverInfo.tsx
 ┃ ┃ ┃ ┣ 📜NameText.stories.tsx
 ┃ ┃ ┃ ┣ 📜NameText.tsx
 ┃ ┃ ┃ ┣ 📜ProfileImage.stories.tsx
 ┃ ┃ ┃ ┣ 📜ProfileImage.tsx
 ┃ ┃ ┃ ┣ 📜QuoteDetails.stories.tsx
 ┃ ┃ ┃ ┣ 📜QuoteDetails.tsx
 ┃ ┃ ┃ ┣ 📜QuoteModalUser.tsx
 ┃ ┃ ┃ ┣ 📜ReviewMover.tsx
 ┃ ┃ ┃ ┣ 📜ServiceChip.stories.tsx
 ┃ ┃ ┃ ┣ 📜ServiceChip.tsx
 ┃ ┃ ┃ ┣ 📜TextWithGrayLabel.stories.tsx
 ┃ ┃ ┃ ┗ 📜TextWithGrayLabel.tsx
 ┃ ┃ ┣ 📂checkboxs
 ┃ ┃ ┃ ┣ 📜Checkbox.stories.tsx
 ┃ ┃ ┃ ┣ 📜Checkbox.tsx
 ┃ ┃ ┃ ┣ 📜CheckboxChip.stories.tsx
 ┃ ┃ ┃ ┣ 📜CheckboxChip.tsx
 ┃ ┃ ┃ ┣ 📜CheckboxCircle.stories.tsx
 ┃ ┃ ┃ ┗ 📜CheckboxCircle.tsx
 ┃ ┃ ┣ 📂progress-bar
 ┃ ┃ ┃ ┣ 📜ProgressBar.tsx
 ┃ ┃ ┃ ┣ 📜ProgressBarMovingRequest.stories.tsx
 ┃ ┃ ┃ ┣ 📜ProgressBarMovingRequest.tsx
 ┃ ┃ ┃ ┣ 📜ProgressBarRating.stories.tsx
 ┃ ┃ ┃ ┗ 📜ProgressBarRating.tsx
 ┃ ┃ ┣ 📜AddressChip.tsx
 ┃ ┃ ┣ 📜AddressField.tsx
 ┃ ┃ ┣ 📜Button.stories.tsx
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜ChatField.stories.tsx
 ┃ ┃ ┣ 📜ChatField.tsx
 ┃ ┃ ┣ 📜Dropdown.tsx
 ┃ ┃ ┣ 📜Input.stories.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┣ 📜LineSeparator.tsx
 ┃ ┃ ┣ 📜Loader.stories.tsx
 ┃ ┃ ┣ 📜Loader.tsx
 ┃ ┃ ┣ 📜Message.tsx
 ┃ ┃ ┣ 📜Pagination.stories.tsx
 ┃ ┃ ┣ 📜Pagination.tsx
 ┃ ┃ ┣ 📜QuoteButtonGroup.tsx
 ┃ ┃ ┣ 📜ReviewModal.tsx
 ┃ ┃ ┣ 📜SearchInput.stories.tsx
 ┃ ┃ ┣ 📜SearchInput.tsx
 ┃ ┃ ┣ 📜ShareButtons.stories.tsx
 ┃ ┃ ┣ 📜ShareButtons.tsx
 ┃ ┃ ┣ 📜StarRating.tsx
 ┃ ┃ ┣ 📜StarRatingDisplay.stories.tsx
 ┃ ┃ ┣ 📜StarRatingDisplay.tsx
 ┃ ┃ ┣ 📜Textarea.stories.tsx
 ┃ ┃ ┗ 📜Textarea.tsx
 ┃ ┣ 📂dropdowns
 ┃ ┃ ┣ 📜DropdownNotification.stories.tsx
 ┃ ┃ ┣ 📜DropdownNotification.tsx
 ┃ ┃ ┣ 📜DropdownProfile.stories.tsx
 ┃ ┃ ┣ 📜DropdownProfile.tsx
 ┃ ┃ ┣ 📜DropdownQuote.stories.tsx
 ┃ ┃ ┣ 📜DropdownQuote.tsx
 ┃ ┃ ┣ 📜DropdownRegion.stories.tsx
 ┃ ┃ ┣ 📜DropdownRegion.tsx
 ┃ ┃ ┣ 📜DropdownService.stories.tsx
 ┃ ┃ ┣ 📜DropdownService.tsx
 ┃ ┃ ┣ 📜DropdownSortMover.stories.tsx
 ┃ ┃ ┣ 📜DropdownSortMover.tsx
 ┃ ┃ ┣ 📜DropdownSortMovingRequest.stories.tsx
 ┃ ┃ ┗ 📜DropdownSortMovingRequest.tsx
 ┃ ┣ 📂forms
 ┃ ┃ ┣ 📜InfoEdit.tsx
 ┃ ┃ ┗ 📜Profile.tsx
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜AuthButtons.tsx
 ┃ ┃ ┗ 📜AuthSection.tsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜useResize.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜GNB.stories.tsx
 ┃ ┃ ┣ 📜GNB.tsx
 ┃ ┃ ┣ 📜Main.tsx
 ┃ ┃ ┣ 📜MswComponent.tsx
 ┃ ┃ ┣ 📜NiceModalRegistry.tsx
 ┃ ┃ ┣ 📜QuoteGNB.stories.tsx
 ┃ ┃ ┣ 📜QuoteGNB.tsx
 ┃ ┃ ┗ 📜QuoteGNBWrapper.tsx
 ┃ ┣ 📂modals
 ┃ ┃ ┣ 📜AlertModal.tsx
 ┃ ┃ ┣ 📜BackDrop.tsx
 ┃ ┃ ┣ 📜ConfirmModal.tsx
 ┃ ┃ ┣ 📜CreateQuoteModal.stories.tsx
 ┃ ┃ ┣ 📜CreateQuoteModal.tsx
 ┃ ┃ ┣ 📜FilterModal.stories.tsx
 ┃ ┃ ┣ 📜FilterModal.tsx
 ┃ ┃ ┣ 📜QuoteRequestModal.stories.tsx
 ┃ ┃ ┣ 📜QuoteRequestModal.tsx
 ┃ ┃ ┣ 📜RejectRequetModal.stories.tsx
 ┃ ┃ ┣ 📜RejectRequetModal.tsx
 ┃ ┃ ┣ 📜ReviewModal.stories.tsx
 ┃ ┃ ┗ 📜ReviewModal.tsx
 ┃ ┣ 📂request
 ┃ ┃ ┣ 📜DatePicker.stories.tsx
 ┃ ┃ ┣ 📜DatePicker.tsx
 ┃ ┃ ┗ 📜QuoteDetailInfo.tsx
 ┃ ┣ 📂request-checkbox-field
 ┃ ┃ ┣ 📜CheckboxButton.tsx
 ┃ ┃ ┣ 📜CheckboxCircle.tsx
 ┃ ┃ ┣ 📜CheckboxField.stories.tsx
 ┃ ┃ ┗ 📜CheckboxField.tsx
 ┃ ┣ 📂review
 ┃ ┃ ┣ 📜CustomerReview.tsx
 ┃ ┃ ┣ 📜MoversReviewList.tsx
 ┃ ┃ ┗ 📜ReviewImageSlider.tsx
 ┃ ┣ 📜ButtonFavorite.tsx
 ┃ ┣ 📜CheckboxField.stories.tsx
 ┃ ┣ 📜CheckboxField.tsx
 ┃ ┣ 📜EmptyList.tsx
 ┃ ┣ 📜LandingSection.tsx
 ┃ ┣ 📜LandingSwipe.tsx
 ┃ ┣ 📜LoadingDots.tsx
 ┃ ┣ 📜MovingRequestProgressInfo.stories.tsx
 ┃ ┣ 📜MovingRequestProgressInfo.tsx
 ┃ ┣ 📜NavItem.tsx
 ┃ ┣ 📜NavigationEvents.tsx
 ┃ ┣ 📜NavigationProgress.tsx
 ┃ ┣ 📜NiceModalProvider.tsx
 ┃ ┣ 📜RatingInfo.stories.tsx
 ┃ ┣ 📜RatingInfo.tsx
 ┃ ┣ 📜ReactQueryDevtoolsClient.tsx
 ┃ ┣ 📜ScrollIndicator.tsx
 ┃ ┗ 📜Toast.tsx
 ┣ 📂config
 ┃ ┣ 📜cn.ts
 ┃ ┗ 📜queryClient.ts
 ┣ 📂contexts
 ┃ ┣ 📜QuoteProgressContext.tsx
 ┃ ┗ 📜queryClientProvider.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAuth.ts
 ┃ ┣ 📜useInfiniteScroll.ts
 ┃ ┗ 📜useResize.ts
 ┣ 📂mocks
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📜mover.ts
 ┃ ┃ ┣ 📜movingQuotes.ts
 ┃ ┃ ┣ 📜movingRequest.ts
 ┃ ┃ ┣ 📜pendingQuotes.ts
 ┃ ┃ ┣ 📜quote.ts
 ┃ ┃ ┗ 📜review.ts
 ┃ ┣ 📂handlers
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜mover.ts
 ┃ ┃ ┣ 📜movingRequest.ts
 ┃ ┃ ┣ 📜quote.ts
 ┃ ┃ ┗ 📜review.ts
 ┃ ┣ 📂types
 ┃ ┃ ┗ 📜quotes.ts
 ┃ ┣ 📜browser.ts
 ┃ ┗ 📜server.ts
 ┣ 📂store
 ┃ ┣ 📜signupStore.ts
 ┃ ┣ 📜useNavigationStore.ts
 ┃ ┣ 📜useToastStore.ts
 ┃ ┗ 📜userStore.ts
 ┣ 📂stories
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜accessibility.png
 ┃ ┃ ┣ 📜accessibility.svg
 ┃ ┃ ┣ 📜addon-library.png
 ┃ ┃ ┣ 📜assets.png
 ┃ ┃ ┣ 📜avif-test-image.avif
 ┃ ┃ ┣ 📜context.png
 ┃ ┃ ┣ 📜discord.svg
 ┃ ┃ ┣ 📜docs.png
 ┃ ┃ ┣ 📜figma-plugin.png
 ┃ ┃ ┣ 📜github.svg
 ┃ ┃ ┣ 📜share.png
 ┃ ┃ ┣ 📜styling.png
 ┃ ┃ ┣ 📜testing.png
 ┃ ┃ ┣ 📜theming.png
 ┃ ┃ ┣ 📜tutorials.svg
 ┃ ┃ ┗ 📜youtube.svg
 ┃ ┣ 📜Button.stories.ts
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜Configure.mdx
 ┃ ┣ 📜Header.stories.ts
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜Page.stories.ts
 ┃ ┣ 📜Page.tsx
 ┃ ┣ 📜button.css
 ┃ ┣ 📜header.css
 ┃ ┗ 📜page.css
 ┣ 📂types
 ┃ ┣ 📜api.ts
 ┃ ┣ 📜auth.ts
 ┃ ┣ 📜mover.ts
 ┃ ┣ 📜movingRequest.ts
 ┃ ┣ 📜quote.ts
 ┃ ┗ 📜review.ts
 ┣ 📂utils
 ┃ ┣ 📜auth.ts
 ┃ ┣ 📜authValidation.ts
 ┃ ┣ 📜canUseDom.ts
 ┃ ┣ 📜env.ts
 ┃ ┣ 📜formatCost.ts
 ┃ ┣ 📜generateImgSrc.js
 ┃ ┣ 📜getQueryClient.ts
 ┃ ┗ 📜utilFunctions.ts
 ┣ 📂variables
 ┃ ┣ 📜dropdown.ts
 ┃ ┣ 📜images.js
 ┃ ┣ 📜mover.ts
 ┃ ┣ 📜movingRequest.ts
 ┃ ┣ 📜notification.ts
 ┃ ┣ 📜quote.ts
 ┃ ┣ 📜regions.ts
 ┃ ┣ 📜screen.ts
 ┃ ┣ 📜service.ts
 ┃ ┗ 📜services.ts
 ┣ 📜.DS_Store
 ┣ 📜instrumentation.ts
 ┗ 📜middleware.ts

```


