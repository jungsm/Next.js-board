import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"


export default async function handler(요청,응답){
    if (요청.method == 'POST'){
        console.log(요청.body)

        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').deleteOne({ _id : new ObjectId(요청.body)})
            응답.status(200).json("글이 삭제되었습니다.")   
        } catch (error) {
            
        }
      응답.status(500).json("에러가 발생했습니다.")
    }
}