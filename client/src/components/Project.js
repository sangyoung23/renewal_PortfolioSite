import React from "react";
import Card from "react-bootstrap/Card";
import { ProjectDiv, ProjectItem } from "../Styles/ProjectCSS";

function Project() {
  return (
    <ProjectDiv id="project">
      <h1>Project</h1>
      <div>
        <Card style={{ width: "35rem" }}>
          <Card.Img variant="top" src="/image/community.png" />
          <ProjectItem>
            <h3>사용 기술</h3>
            <p>React, Express, MongoDB, Monggose</p>
            <h3>React-Community</h3>
            <p>
              본 프로젝트는 커뮤니티 사이트로 리액트와 서버단의 통신을 이용하여
              CRUD기능을 개발하여 글 작성, 수정, 삭제, 또한 사진 업로드까지
              가능하고, 작성한 글을 몽고DB에 저장하여 다른 사용자들과 소통이
              가능합니다.
            </p>
            <div>
              <a
                href="https://github.com/sangyoung23/MERN-STACK"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div>
              <a href="#" target="_blank" rel="noopener noreferrer">
                링크 URL
              </a>
            </div>
          </ProjectItem>
        </Card>
        <Card style={{ width: "35rem" }}>
          <Card.Img variant="top" src="/image/bookfriends.png" />
          <ProjectItem>
            <h3>사용 기술</h3>
            <p>React, Styled-Components, Redux, TypeScript, Netlify</p>
            <h3>Book Friends</h3>
            <p>
              카카오 도서 검색 API를 이용하여 검색어에 맞게 책을 렌더링 해주고
              Redux를 이용하여, 렌더링 된 도서들을 장바구니에 담고 수량 증가,
              감소등과 같은 기능을 만들었습니다. 마지막으로 LocalStorage를
              이용하여 간단한 로그인 기능도 만들어 보았습니다.
            </p>
            <div>
              <a
                href="https://github.com/sangyoung23/bookfriends"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div>
              <a
                href="https://yong-bookfriends.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                링크 URL
              </a>
            </div>
          </ProjectItem>
        </Card>
      </div>
      <div>
        <Card style={{ width: "35rem" }}>
          <Card.Img variant="top" src="/image/emotiondiary.png" />
          <ProjectItem>
            <h3>사용 기술</h3>
            <p>React, React-Hook, LocalStorage, Context-Api, Firebase</p>
            <h3>Emotion Diary</h3>
            <p>
              이 프로젝트는 React를 이용하여 오늘의 감정을 정하고 글 작성, 수정
              및 삭제등의 페이지로 구성되어 있습니다. 또한 LocalStorage를
              이용하여 일기의 데이터를 영구적으로 저장하였습니다.
            </p>
            <div>
              <a
                href="https://github.com/sangyoung23/emotion-diary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div>
              <a
                href="https://yong-react-project.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                링크 URL
              </a>
            </div>
          </ProjectItem>
        </Card>
        <Card style={{ width: "35rem" }}>
          <Card.Img variant="top" src="/image/yongflix.png" />
          <ProjectItem>
            <h3>사용 기술</h3>
            <p>React, React-Hook, React-Router-Dom, Netlify</p>
            <h3>YongFlix</h3>
            <p>
              본 프로젝트는 영화 Api를 fetch하여 년도별로 영화를 렌더링 해주고
              평점까지 보여줍니다. 또한 검색창을 통해 원하는 영화를 찾을 수
              있고, 영화 상세페이지 까지 구현하였습니다. 리액트의 기초를
              연습하기 위하여 진행하였던 프로젝트입니다.
            </p>
            <div>
              <a
                href="https://github.com/sangyoung23/YongFlix"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div>
              <a
                href="https://sangyong-movie-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                링크 URL
              </a>
            </div>
          </ProjectItem>
        </Card>
      </div>
    </ProjectDiv>
  );
}

export default Project;
