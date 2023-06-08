import { connectDB } from "@/util/database"
import bcrypt from "bcrypt"
export default async function handler(요청,응답){
    if(요청.method == 'POST'){
     let hash = await bcrypt.hash(요청.body.password, 10)
        요청.body.password = hash
        console.log(요청.body.email)
        const db = (await connectDB).db("forum")
        let result = await db.collection('user_card').findOne({ email: 요청.body.email})

        if(result){
            응답.status(200).json("이미 존재하는 이메일입니다.")
        }else{
             const db = (await connectDB).db("forum")
            let result = await db.collection('user_card').insertOne(요청.body)
            응답.redirect(302,'/list')
        } 
    }
}