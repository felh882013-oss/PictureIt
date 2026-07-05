import React, { useState } from 'react'
import { useGameStore } from '../store/gameStore'
import Card from '../components/Card'
import Button from '../components/Button'

function Groups() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newGroupName, setNewGroupName] = useState('')
  const groups = useGameStore((state) => state.groups)
  const user = useGameStore((state) => state.user)
  const joinGroup = useGameStore((state) => state.joinGroup)
  const createGroup = useGameStore((state) => state.createGroup)

  const userGroups = groups.filter((g) => user.groupIds.includes(g.id))
  const otherGroups = groups.filter((g) => !user.groupIds.includes(g.id))

  const handleCreateGroup = () => {
    if (newGroupName.trim()) {
      const newGroup = {
        id: `group_${Date.now()}`,
        name: newGroupName,
        members: 1,
        avatar: '🎨',
        description: 'New group',
        createdDate: new Date().toISOString().split('T')[0],
        points: 0,
      }
      createGroup(newGroup)
      setNewGroupName('')
      setShowCreateModal(false)
    }
  }

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent'>
          Groups 👥
        </h1>
        <Button variant='primary' size='lg' onClick={() => setShowCreateModal(true)}>
          Create Group
        </Button>
      </div>

      {/* Your Groups */}
      {userGroups.length > 0 && (
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-white mb-4'>Your Groups</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {userGroups.map((group) => (
              <Card key={group.id} hoverGlow={true}>
                <div className='text-5xl mb-3'>{group.avatar}</div>
                <h3 className='text-xl font-bold text-white mb-2'>{group.name}</h3>
                <p className='text-purple-300 text-sm mb-4'>{group.description}</p>
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-purple-300 text-sm'>👥 {group.members} members</span>
                  <span className='text-yellow-400 font-bold'>⭐ {group.points}</span>
                </div>
                <Button variant='success' size='md' className='w-full'>
                  View Group
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Discover Groups */}
      <div>
        <h2 className='text-2xl font-bold text-white mb-4'>Discover Groups</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {otherGroups.map((group) => (
            <Card key={group.id} hoverGlow={true}>
              <div className='text-5xl mb-3'>{group.avatar}</div>
              <h3 className='text-xl font-bold text-white mb-2'>{group.name}</h3>
              <p className='text-purple-300 text-sm mb-4'>{group.description}</p>
              <div className='flex items-center justify-between mb-4'>
                <span className='text-purple-300 text-sm'>👥 {group.members} members</span>
                <span className='text-yellow-400 font-bold'>⭐ {group.points}</span>
              </div>
              <Button
                variant='secondary'
                size='md'
                className='w-full'
                onClick={() => joinGroup(group.id)}
              >
                Join Group
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Create Group Modal */}
      {showCreateModal && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <Card className='w-96'>
            <h2 className='text-2xl font-bold text-white mb-4'>Create a New Group</h2>
            <input
              type='text'
              placeholder='Group Name'
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className='w-full bg-purple-900/50 border border-purple-600 rounded-lg px-4 py-2 text-white placeholder-purple-400 mb-4 focus:outline-none focus:border-purple-400'
            />
            <div className='flex gap-3'>
              <Button
                variant='secondary'
                size='md'
                className='flex-1'
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </Button>
              <Button
                variant='primary'
                size='md'
                className='flex-1'
                onClick={handleCreateGroup}
              >
                Create
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Groups
