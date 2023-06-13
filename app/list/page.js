import { connectDB } from "@/util/database"
import Link from "next/link"
import ListItem from "./ListItem"


export default async function list() {


  const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    return (
      <div className="list-bg">
        <div className="pa-10">
        <h1>자유 게시판</h1>
      <div className="line"></div>
      <ul className="board-item">
        <li><h2>번호</h2></li>
        <li><h2>제목</h2></li>
        <li><h2>작성자</h2></li>
        <h2 className="board-time">작성일</h2>
      </ul>
      <ListItem result={result} />
      <Link href={"/write"}>
        
      <button className="list-btn">글쓰기</button>
      </Link>
      </div>
    </div>
    )
  }
  