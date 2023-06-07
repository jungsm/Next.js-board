import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import Link from "next/link"
import Delete from "./Delete"
export default async function Detail(props) {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id : new
        ObjectId(props.params.id)})
      
    return (
        <div className="list-bg">
              <h1>{result.title}</h1>
              <h4>{result.time}</h4>
            <div className="line"></div>
              <div className="detail-item">
                   <h1>{result.content}</h1>
              </div>
              <Link href={"/edit/" + result._id}>
                   <button className="list-btn">수정</button>
                   </Link>
                   <Delete result={result} />
            </div>
    )
  }
  