import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default  async function handler(요청,응답){
    if (요청.method == 'POST'){
        let data = {title : 요청.body.title, content : 요청.body.content}
        console.log(요청.body)
        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').updateOne({_id : new ObjectId(요청.body._id)},{$set: data})
            응답.redirect(302,'/list')   
        } catch (error) {
            응답.status(200).json("에러가 발생했습니다.")
        }
      

    }
}