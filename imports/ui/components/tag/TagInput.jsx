import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const TagWrapper = styled.div`
  display: flex;
  border: 0.2rem solid #27e200;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
`
const Input = styled.input`
  border: none;
  height: 46px;
  font-size: 14px;
  margin-left: 0.5rem;
  &:focus {
    outline: transparent;
  }
`

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`

const Li = styled.li`
  width: auto;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0.2 0.8rem;
  font-size: 1rem;
  list-style: none;
  border-radius: 0.5rem;
  margin: 0.3rem 0.3rem
  background: #27e200;
`
const Span = styled.span`
  margin-top: 3px;
  padding: 0.5rem;
`

const DeleteTag = styled.span`
  display: block;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 1rem;
  margin: 0 0.3rem;
  color: #0052cc;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
`

const TagInput = ({ allTags = ['first', 'second'] }) => {
  const [tags, setTags] = useState(['react', 'nodejs'])

  useEffect(() => {
    setTags([...tags, allTags])
  }, [])

  const addTags = e => {
    if (e.target.value !== '') {
      setTags(Array.from(new Set([...tags, e.target.value])))
      e.target.value = ''
    }
  }
  const removeTag = tagIndexToRemove => {
    setTags([...tags.filter((item, idx) => idx !== tagIndexToRemove)])
  }
  return (
    <TagWrapper>
      <Ul>
        {tags &&
          tags.map((tag, idx) => (
            <Li key={idx}>
              <Span>{tag}</Span>
              <DeleteTag onClick={() => removeTag(idx)}>x</DeleteTag>
            </Li>
          ))}
      </Ul>
      <Input
        type="tex"
        onKeyUp={e => (e.key === 'Enter' ? addTags(e) : null)}
        placeholder="Add your tags"
      />
    </TagWrapper>
  )
}
export default TagInput
