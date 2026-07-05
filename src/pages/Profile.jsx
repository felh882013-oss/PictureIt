import React, { useState } from 'react'
import { useGameStore } from '../store/gameStore'
import Card from '../components/Card'
import Button from '../components/Button'
import { FaUser, FaTrophy, FaFire, FaStar } from 'react-icons/fa'

function Profile() {
  const user = useGameStore((state) => state.user)
  const clans = useGameStore((state) => state.clans)
  const groups = useGameStore((state) => state.groups)

  const userClan = clans.find((c) => c.id === user.clanId)
  const userGroups = groups.filter((g) => user.groupIds.includes(g.id))

  return (
    <div className='max-w-7xl mx-auto px-4'>
      {/* Header */}
      <div className='mb-12'>
        <Card>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='text-9xl'>{user.avatar}</div>
            <div className='flex-1'>
              <h1 className='text-4xl font-bold text-white mb-2'>{user.username}</h1>
              <p className='text-purple-300 mb-6'>Joined {user.joinedDate}</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='bg-purple-800/50 p-4 rounded-lg'>
                  <p className='text-purple-300 text-sm mb-1'>Level</p>
                  <p className='text-3xl font-bold text-white'>{user.level}</p>
                </div>
                <div className='bg-blue-800/50 p-4 rounded-lg'>
                  <p className='text-blue-300 text-sm mb-1'>Points</p>
                  <p className='text-3xl font-bold text-white'>{user.points.toLocaleString()}</p>
                </div>
                <div className='bg-yellow-800/50 p-4 rounded-lg'>
                  <p className='text-yellow-300 text-sm mb-1'>Total Points</p>
                  <p className='text-3xl font-bold text-white'>{user.totalPoints.toLocaleString()}</p>
                </div>
                <div className='bg-orange-800/50 p-4 rounded-lg'>
                  <p className='text-orange-300 text-sm mb-1'>Rank</p>
                  <p className='text-3xl font-bold text-white'>#3</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Achievements */}
        <div className='lg:col-span-2'>
          <h2 className='text-2xl font-bold text-white mb-4'>Achievements 🏆</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-8'>
            {[
              { emoji: '🔥', title: 'On Fire', desc: '7 day streak' },
              { emoji: '⭐', title: 'Rising Star', desc: 'Level 10' },
              { emoji: '🎯', title: 'Marksman', desc: '100 challenges' },
              { emoji: '👑', title: 'Clan Leader', desc: 'Lead a clan' },
              { emoji: '💎', title: 'Elite', desc: '10k points' },
              { emoji: '🌍', title: 'Explorer', desc: 'All group types' },
            ].map((achievement, idx) => (
              <Card key={idx}>
                <div className='text-center'>
                  <div className='text-5xl mb-2'>{achievement.emoji}</div>
                  <p className='text-white font-bold text-sm mb-1'>{achievement.title}</p>
                  <p className='text-purple-300 text-xs'>{achievement.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div>
          <h2 className='text-2xl font-bold text-white mb-4'>Stats 📊</h2>
          <div className='space-y-4'>
            <Card>
              <p className='text-purple-300 text-sm mb-2'>Challenges Completed</p>
              <p className='text-3xl font-bold text-white'>127</p>
            </Card>
            <Card>
              <p className='text-blue-300 text-sm mb-2'>Photos Submitted</p>
              <p className='text-3xl font-bold text-white'>312</p>
            </Card>
            <Card>
              <p className='text-green-300 text-sm mb-2'>Average Difficulty</p>
              <p className='text-3xl font-bold text-white'>Medium</p>
            </Card>
            <Card>
              <p className='text-yellow-300 text-sm mb-2'>Current Streak</p>
              <p className='text-3xl font-bold text-white'>7 days 🔥</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Affiliations */}
      <div className='mt-12'>
        <h2 className='text-2xl font-bold text-white mb-4'>Affiliations 🤝</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {userClan && (
            <Card>
              <h3 className='text-lg font-bold text-white mb-3 flex items-center gap-2'>
                <span className='text-3xl'>{userClan.avatar}</span>
                Your Clan: {userClan.name}
              </h3>
              <p className='text-purple-300 mb-4'>Level {userClan.level} • {userClan.members} members</p>
              <Button variant='secondary' size='md' className='w-full'>
                View Clan
              </Button>
            </Card>
          )}
          {userGroups.map((group) => (
            <Card key={group.id}>
              <h3 className='text-lg font-bold text-white mb-3 flex items-center gap-2'>
                <span className='text-3xl'>{group.avatar}</span>
                {group.name}
              </h3>
              <p className='text-purple-300 mb-4'>{group.members} members</p>
              <Button variant='secondary' size='md' className='w-full'>
                View Group
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
