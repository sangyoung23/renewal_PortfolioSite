import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faLocationDot,
  faPhone,
  faEnvelope,
  faGraduationCap,
  faCodeBranch,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

import { Title, AboutDiv, AboutItem } from "../Styles/AboutCSS";

function About() {
  return (
    <div id="about">
      <Title>About Me</Title>
      <AboutDiv>
        <AboutItem>
          <div>
            <FontAwesomeIcon icon={faUser} className="icon" />
            <p>박상용</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <p>1999.01.31</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <p>부산 (서울 이사 예정)</p>
          </div>
        </AboutItem>
        <AboutItem>
          <div>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p>010-7567-4883</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p>bagsangyong34@gmail.com</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGraduationCap} className="icon" />
            <p>부산폴리텍대학교 휴학 (취업계 졸업예정)</p>
          </div>
        </AboutItem>
        <AboutItem>
          <div>
            <FontAwesomeIcon icon={faCodeBranch} className="icon" />
            <p>
              <a href="https://github.com/sangyoung23">깃허브</a>
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBlog} className="icon" />
            <p>
              <a href="https://velog.io/@sangyoung23">블로그</a>
            </p>
          </div>
        </AboutItem>
      </AboutDiv>
    </div>
  );
}

export default About;
