import React, { useState } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai'

import Card from 'components/Card'
import CardList from 'components/CardList'
import CreateShort from 'components/CreateShort'
import Loader from 'components/Loader'
import Modal from 'components/Modal'
import PerspectiveMenu from 'components/PerspectiveMenu'

import useShorts from 'hooks/useShorts'
import useUser from 'hooks/useUser'

function ShortList({ perspective, setPerspective }) {
  const { isLoading, shorts } = useShorts(perspective)
  const { isLogged } = useUser()
  const [showCreateModal, setShowCreateModal] = useState(false)

  const closeModal = () => {
    setShowCreateModal(false)
  }
  return (
    <>
      {showCreateModal && (
        <Modal onClose={closeModal}>
          <CreateShort onClose={closeModal} />
        </Modal>
      )}

      {isLogged && (
        <button
          className="buttonCreate"
          onClick={() => setShowCreateModal(true)}
        >
          <AiTwotoneEdit className="create" />
        </button>
      )}
      
      <PerspectiveMenu
        perspective={perspective}
        setPerspective={setPerspective}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <CardList>
          {shorts.map(short => (
            <Card
              id={short.id}
              key={short.id}
              user={short.user}
              content={short.content}
              created_at={short.created_at}
              tags={short.tags}
              images={short.images}
              commentsCount={short.commentsCount}
              favouritesCount={short.favouritesCount}
            />
          ))}
        </CardList>
      )}
    </>
  )
}

export default React.memo(ShortList)
