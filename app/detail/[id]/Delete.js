'use client'
import Link from "next/link"
export default async function Delete({result}){


    return(
        <div>
               <Link href={'/list'}>
               <button className="list-btn" onClick={(e)=> {
                        fetch('/api/post/delete', {method : 'POST', body : result._id})
                        .then((r)=>{
                            return r.json() 
                        })
                        .then((r)=>{
                            alert(r)
                            location.reload()
                        })
                        }}>
                            삭제</button>
                            </Link>
                       
        </div>
    )
}