import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

import { Input, Textarea } from "../Styles/ModalCSS";

function EditModal(props) {
  const [Author, setAuthor] = useState("");
  const [Content, setContent] = useState("");

  const params = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    if (Author === "" || props.Content === "") {
      alert("내용을 입력해주세요");
    }
    let body = {
      author: Author,
      content: Content,
      postNum: params.postNum,
    };
    axios
      .post("/api/post/submit", body)
      .then((res) => {
        if (res.data.success) {
          alert("글 작성이 완료되었습니다.");
          props.setModal(false);
        } else {
          alert("글 작성이 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Edit Modal</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <label htmlFor="author">박사용</label>
            <Input
              id="author"
              vlaue={Author}
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
            <Button variant="primary" onClick={(e) => onSubmit(e)}>
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
    </div>
  );
}

export default EditModal;
