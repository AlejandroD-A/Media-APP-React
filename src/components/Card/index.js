import React, { useCallback } from 'react'
import { FaRegComments } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import moment from 'moment'

import FavShort from 'components/FavShort'

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
  id,
  user,
  title,
  created_at,
  tags,
  cover,
  images,
  content,
  index,
  commentsCount,
  favouritesCount
}) {
  const createDate = useCallback(() => {
    return moment(new Date(created_at)).local().fromNow()
  }, [created_at])

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

        {images &&
          images.map((img, index) => (
            <ImgWrapper key={index}>
              <img src={img.url} alt="img" />
            </ImgWrapper>
          ))}

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
              <button href="comments">
                <FaRegComments className="icon" />
                <span>{commentsCount < 0 ? commentsCount : null}</span>
              </button>
              <FavShort id={id} favouritesCount={favouritesCount} />
            </ul>
          </CardStatusList>
        </CardContent>
      </CardBody>
    </CardStyled>
  )
}

export default React.memo(Card)
