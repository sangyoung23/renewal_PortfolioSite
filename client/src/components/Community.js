import React, { useEffect, useState } from "react";
import axios from "axios";
import InputModal from "./InputModal";
import Edit from "./Edit";
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {
  CommunityDiv,
  PostDiv,
  WriteButton,
  CommunityHeader,
  PaginationBox,
} from "../Styles/CommunityCSS";

function Community() {
  const [PostInfo, setPostInfo] = useState([]);
  const [Modal, setModal] = useState(false);
  const [EditModal, setEditModal] = useState(false);
  const [PostItem, setPostItem] = useState("");
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);

  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((res) => {
        if (res.data.success) {
          setPostInfo(res.data.postList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Modal]);

  const DeleteHandler = (item) => {
    let body = {
      postNum: item.postNum,
    };
    axios
      .post("/api/post/delete", body)
      .then((res) => {
        if (res.data.success) {
          alert("글 삭제가 완료되었습니다.");
          setPostInfo(res.data.postList);
        }
      })
      .catch(() => {
        alert("글 삭제에 실패하였습니다.");
      });
  };

  const EditHandler = (item) => {
    setEditModal(true);
    setPostItem(item);
  };

  if (Modal) {
    return <InputModal setModal={setModal} />;
  }
  if (EditModal) {
    return (
      <Edit
        setEditModal={setEditModal}
        PostItem={PostItem}
        setPostInfo={setPostInfo}
      />
    );
  }

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <CommunityDiv id="community">
      <h1>Community</h1>
      <CommunityHeader>
        <div>작성자</div>
        <div className="contentBox">내용</div>
        <WriteButton onClick={() => setModal(true)}>
          <FontAwesomeIcon icon={faPenToSquare} className="icon" />
        </WriteButton>
      </CommunityHeader>
      {PostInfo.slice(items * (page - 1), items * (page - 1) + items).map(
        (item, idx) => {
          return (
            <PostDiv key={idx}>
              <div>{item.author}</div>
              <div className="contentBox">{item.content}</div>
              <div className="custom">
                <button onClick={() => EditHandler(item)}>수정</button>
                <button onClick={() => DeleteHandler(item)}>삭제</button>
              </div>
            </PostDiv>
          );
        }
      )}
      <PaginationBox>
        <Pagination
          // 현제 보고있는 페이지
          activePage={1}
          // 한페이지에 출력할 아이템수
          itemsCountPerPage={5}
          // 총 아이템수
          totalItemsCount={300}
          // 표시할 페이지수
          pageRangeDisplayed={5}
          // 함수
          onChange={handlePageChange}
        ></Pagination>
      </PaginationBox>
    </CommunityDiv>
  );
}

export default Community;
