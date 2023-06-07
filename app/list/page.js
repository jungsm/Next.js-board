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
      <div className="board-item">
        <h2>제목</h2>
        <h2 className="board-time">작성일</h2>
      </div>
      <ListItem result={result} />
      <Link href={"/write"}>
      <button className="list-btn">글쓰기</button>
      </Link>
      </div>
    </div>
    )
  }
  