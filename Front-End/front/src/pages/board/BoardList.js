// 공지게시판 - 게시글 목록

import React from "react";
import BoardItem from "./BoardItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function BoardList() {
  return (
    <div className="BoardList">
      <h3>BoardList</h3>
      <BoardItem />
    </div>
  );
}

export default BoardList;