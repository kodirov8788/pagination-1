import React from 'react'

function Posts({ posts, loading }) {
    if (loading) {
        return <h2>Loading ...</h2>
    }
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id} className='w-full text-2xl shadow-md'>
                    {post.title}
                </li>
            ))}
        </ul>
    )
}

export default Posts