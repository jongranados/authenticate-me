export default function Home({ sessionUser }) { 
    return (
        <p>{`${sessionUser.username}, you're in!`}</p>
    )
}
