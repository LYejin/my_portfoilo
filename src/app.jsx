import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <header class="header">
        <div class="headerWapper">
          <div class="headerLine">
            <h1>YJ</h1>
            <nav>
              <ul>
                <li>
                  <a href="#myInfo">자기소개</a>
                </li>
                <li>
                  <a href="#project">프로젝트</a>
                </li>
              </ul>
            </nav>
          </div>
          <i
            class="fa-solid fa-bars"
            style={{ fontsize: "30px", margin: "0 2rem", color: "black" }}
          ></i>
        </div>
      </header>

      <section class="YJInformation">
        <div class="selfImg">
          <img
            src={`${process.env.PUBLIC_URL}/image/LYJimg.JPG`}
            alt="개인사진"
          />
        </div>
        <article class="LeftInformation">
          <div class="YJIndividualInformation">
            <div class="gender">
              <div>女</div>
              <div>성별</div>
            </div>
            <div class="birth">
              <div>2000.06.03</div>
              <div>생년월일</div>
            </div>
            <div class="residence">
              <div>서울</div>
              <div>거주지</div>
            </div>
          </div>
          <div>
            <div class="telInformation">
              <div>010-9813-7003</div>
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="emailInformation">
              <div>vgg789@naver.com</div>
              <i class="fa-solid fa-envelope"></i>
            </div>
          </div>
        </article>
      </section>

      <div class="underSection" id="myInfo">
        <h1 class="mainHeading">
          프론트엔드 <span>이예진</span>의 <span>23</span>년도 포트폴리오예요.
        </h1>
        <section class="SelfIntroducations">
          <h1 class="underSectionHead">
            <div class="underSectionHeading">
              <i class="fa-solid fa-circle"></i>
              <span>Self Introducations</span>
            </div>
            <div class="headingIcon">
              <i class="fa-regular fa-star"></i>
              <div class="vLine"></div>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </h1>
          <p class="SelfIntroducationsP">
            안녕하세요! 저는 프론트엔드를 공부중인 이예진이라고 합니다.
            <br />
            저에 대해 더 궁금하시다면 아래 링크를 통해 깃허브에 놀러오세요!!
            <br />
            깃허브 주소:{" "}
            <a href="https://github.com/LYejin" className="githubLink">
              https://github.com/LYejin
            </a>
          </p>
        </section>

        <section class="project" id="project">
          <h1 class="underSectionHead">
            <div class="underSectionHeading">
              <i class="fa-solid fa-circle"></i>
              <span>Project</span>
            </div>
            <div class="headingIcon">
              <i class="fa-regular fa-star"></i>
              <div class="vLine"></div>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </h1>
          <div class="project1">
            <h1>첫번째 개발 프로젝트: TogatherBuy</h1>
            <span>프로젝트 설명 : 공동 구매 서비스 플랫폼</span>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/image/TogetherBuy.png`}
                alt=""
              />
            </div>
          </div>
          <div class="project2">
            <h1>두번째 개발 프로젝트: Allkit</h1>
            <span>프로젝트 설명 : 간편식 커뮤니티 플랫폼</span>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/image/Allkit1.png`}
                alt="allkit"
              />
              <img
                src={`${process.env.PUBLIC_URL}/image/Allkit2.png`}
                alt="allkit"
              />
            </div>
          </div>
          <div class="award">
            <h1>창업 및 지금까지 받은 상장들</h1>
            <div>
              • 2021년 1학기 창업아이디어 경진대회 은상 수상
              <br />
              • 2021년 상반기 AI + X R&D 챌린지 대회(인공지능 비즈니스 모델 수립
              트랙) 금상
              <br />
              • 2021년 학생 창업유망팀 300 경진대회 선정
              <br />
              • 2021년 1학기 SW 창업아이디어 경진대회 금상 수상
              <br />
              • 2021년 강원 산학협력 한마음대회 캡스톤디자인 및 창업동아리
              경진대회 입상
              <br />
              • 2021년 2학기 창업아이디어 경진대회 금상 수상
              <br />
              • 2021년 강원 메이커스페이스 창업 아이디어 공모전 은상
              <br />
              • 2021년 강원 메이커톤 대회 최우수상
              <br />
              • 2022년 학생 창업유망팀 300 경진대회 선정
              <br />
              • 2022년 1학기 SW 캡스톤 디자인 경진대회 동상
              <br />
              • 2022년 오픈소스 웹개발 해커톤 은상
              <br />• 2022년 강원도 창업경진대회 우수상
            </div>
          </div>
        </section>

        <section class="Skills">
          <h1 class="underSectionHead">
            <div class="underSectionHeading">
              <i class="fa-solid fa-circle"></i>
              <span>Skills</span>
            </div>
            <div class="headingIcon">
              <i class="fa-regular fa-star"></i>
              <div class="vLine"></div>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </h1>
          <div class="SkillsLang">
            <h1>사용 경험 있는 언어들</h1>
            <span>
              html, css, javascript, react, TailwindCSS, TypeScript,
              ApolloGraphQL, StyledComponents
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
