import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Input, Textarea } from "../Styles/ModalCSS";

function Edit(props) {
  const [Author, setAuthor] = useState(props.PostItem.author);
  const [Content, setContent] = useState(props.PostItem.content);

  const submitHandler = () => {
    let body = {
      author: Author,
      content: Content,
      postNum: props.PostItem.postNum,
    };
    axios
      .post("/api/post/edit", body)
      .then((res) => {
        alert("글 수정이 완료되었습니다.");
        props.setEditModal(false);
        props.setPostInfo(res.data.postList);
      })
      .catch(() => {
        alert("글 수정에 실패하였습니다.");
      });
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>글 수정</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <label htmlFor="author">작성자</label>
            <Input
              id="author"
              value={Author}
              onChange={(e) => setAuthor(e.currentTarget.value)}
            />
          </Modal.Body>
          <Modal.Body>
            <label htmlFor="content">내용</label>
            <Textarea
              id="content"
              value={Content}
              onChange={(e) => setContent(e.currentTarget.value)}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => props.setEditModal(false)}
            >
              Close
            </Button>
            <Button variant="primary" onClick={() => submitHandler()}>
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
    </div>
  );
}

export default Edit;
