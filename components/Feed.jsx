'use client'

import React from 'react'
import PromptCard from '@components/PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {
  console.log(data)

  return (
    <div className='mt-16 prompt-layout'>
      {data &&
        data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleTagClick={handleTagClick}
          />
        ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = React.useState('')
  const [posts, setPosts] = React.useState([])

  const handleSearchChange = (e) => {}

  React.useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch('/api/prompt')
      const data = await res.json()
      setPosts(data)
    }

    fetchPost()
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed
