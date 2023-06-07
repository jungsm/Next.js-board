'use client'

import Link from "next/link"
export default function ListItem({result}){
        return(
            <div>
            {
                result.slice(0, 8).map((a,i)=>
                <Link href={"/detail/" + result[i]._id}>
                <div className="list-item">
                <h2>{result[i].number}</h2>
              <h2 className="list-title">{result[i].title}</h2>
              <h2 >{result[i].time}</h2>
            </div>
            </Link>
            
              )}
              </div>
        )
}