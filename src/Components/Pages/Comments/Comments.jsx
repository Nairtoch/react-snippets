import axios from "axios";
import { useEffect, useState } from "react"

export const Comments = props => {
    const [ commentList, setCommentList ] = useState([])

    useEffect(() => {
        const getCommentList = async () => {
            const result = await axios.get(`https://api.mediehuset.net/snippets/comments/1`)
            // console.log(result.data.items)
            setCommentList(result.data.items)
        }
        getCommentList();
    }, [])

    commentList && console.log(commentList);

    return (
        commentList && commentList.map((comments, i) => {
            const {comment, created, id, product_id, title, user_id, user} = comments;
            return(
                <div key={i}>
                    {comment}
                </div>
            )
        })
    )
}