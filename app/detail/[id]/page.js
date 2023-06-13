import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import Link from "next/link"
import Delete from "./Delete"
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function Detail(props) {
    
  let seesion = await getServerSession(authOptions)

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
              {
                seesion
                ? <div><Link href={"/edit/" + result._id}>
                <button className="list-btn">수정</button>
                </Link>
                <Delete result={result} />
                </div>
                : <span></span>
              }
              <Link href={'/list'}>
              <button className="list-btn">뒤로가기</button>
                </Link>
             
            </div>
    )
  }
  