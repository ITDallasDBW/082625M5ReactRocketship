import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Users() {
    const { username } = useParams()

// useEffect(() => {
//     // fetch(`https://api.instagram.com/${username}`)
// }, [])

    console.log(username)
    return <h1>{username}</h1>
    // return <h1>Users</h1>
}

export default Users