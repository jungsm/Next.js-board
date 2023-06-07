import { connectDB } from "@/util/database"

export default async function handler(요청,응답){
    if (요청.method == 'POST'){
        console.log(요청.body)
        if(요청.body.id == ''){
            응답.status(500).json("아이디를 입력해주세요")
        }
       try {
        const db = (await connectDB).db("forum")
        let result = await db.collection('member').insertOne(요청.body)
        응답.redirect(302,'/list');
       } catch (error) {
        응답.status(200).json("에러가 발생했습니다.")
       }

    }
}