import React from 'react'
import { FaRegComments } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import moment from 'moment'

import {
  Card as CardStyled,
  CardHeader,
  CardBody,
  CardContent,
  CardTitle,
  ContentShort,
  ImgWrapper,
  TagList,
  CardStatusList
} from './styles'

function Card({
  user,
  title,
  created_at,
  tags,
  cover,
  content,
  index,
  commentsCount,
  favouritesCount
}) {
  const createDate = () => {
    return moment(new Date(created_at)).local().fromNow()
  }
  return (
    <CardStyled index={index}>
      <CardHeader>
        <span>
          <Link to={`user/${user.id}`}>@{user.username}</Link>
        </span>
        <small>{createDate()}</small>
      </CardHeader>

      <CardBody>
        {cover && (
          <ImgWrapper>
            <img src={cover} alt="img" />
          </ImgWrapper>
        )}

        {content && <ContentShort>{content}</ContentShort>}
        {title && <CardTitle>{title}</CardTitle>}

        <CardContent>
          <CardStatusList>
            <TagList>
              {tags.map(tag => (
                <li key={tag.id}>
                  <a href={`/tags/${tag.id}`}>#{tag.name}</a>
                </li>
              ))}
            </TagList>
            <ul>
              <a href="comments">
                <FaRegComments className="icon" />
                {commentsCount}
              </a>
              <a href="favs">
                <FaRegHeart className="icon" />
                {favouritesCount}
              </a>
            </ul>
          </CardStatusList>
        </CardContent>
      </CardBody>
    </CardStyled>
  )
}

export default React.memo(Card)
