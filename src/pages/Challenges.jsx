import React, { useState } from 'react'
import { useGameStore } from '../store/gameStore'
import Card from '../components/Card'
import Button from '../components/Button'

function Challenges() {
  const [tab, setTab] = useState('daily')
  const dailyChallenges = useGameStore((state) => state.dailyChallenges)
  const weeklyChallenges = useGameStore((state) => state.weeklyChallenges)
  const completeDailyChallenge = useGameStore((state) => state.completeDailyChallenge)

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-8'>
        Challenges 🎯
      </h1>

      {/* Tabs */}
      <div className='flex gap-4 mb-8'>
        <button
          onClick={() => setTab('daily')}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            tab === 'daily'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
              : 'bg-purple-800/50 text-purple-300 hover:bg-purple-700/50'
          }`}
        >
          Daily Challenges
        </button>
        <button
          onClick={() => setTab('weekly')}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            tab === 'weekly'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
              : 'bg-blue-800/50 text-blue-300 hover:bg-blue-700/50'
          }`}
        >
          Weekly Challenges
        </button>
      </div>

      {/* Daily Challenges */}
      {tab === 'daily' && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {dailyChallenges.map((challenge) => (
            <Card key={challenge.id} hoverGlow={true}>
              <div className='flex items-start justify-between mb-4'>
                <div className='text-5xl'>{challenge.image}</div>
                <div className='text-right'>
                  <p className='text-2xl font-bold text-yellow-400'>{challenge.reward}</p>
                  <p className='text-xs text-purple-300'>points</p>
                </div>
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>{challenge.title}</h3>
              <p className='text-purple-300 text-sm mb-4'>{challenge.description}</p>
              <div className='flex items-center justify-between mb-4'>
                <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                  challenge.difficulty === 'Easy' ? 'bg-green-600/30 text-green-300' :
                  challenge.difficulty === 'Medium' ? 'bg-yellow-600/30 text-yellow-300' :
                  'bg-red-600/30 text-red-300'
                }`}>
                  {challenge.difficulty}
                </span>
                <span className='text-xs text-purple-400'>⏱️ {challenge.expiresIn}</span>
              </div>
              <Button
                variant={challenge.completedByUser ? 'secondary' : 'success'}
                size='md'
                className='w-full'
                onClick={() => !challenge.completedByUser && completeDailyChallenge(challenge.id)}
                disabled={challenge.completedByUser}
              >
                {challenge.completedByUser ? '✓ Completed' : 'Submit Photo'}
              </Button>
            </Card>
          ))}
        </div>
      )}

      {/* Weekly Challenges */}
      {tab === 'weekly' && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {weeklyChallenges.map((challenge) => (
            <Card key={challenge.id} hoverGlow={true}>
              <div className='flex items-start justify-between mb-4'>
                <div>
                  <div className='text-5xl mb-2'>{challenge.image}</div>
                  <h3 className='text-2xl font-bold text-white'>{challenge.title}</h3>
                </div>
                <div className='text-right'>
                  <p className='text-2xl font-bold text-blue-400'>{challenge.reward}</p>
                  <p className='text-xs text-purple-300'>points</p>
                </div>
              </div>
              <p className='text-purple-300 text-sm mb-4'>{challenge.description}</p>
              <div className='w-full bg-purple-900/50 rounded-lg overflow-hidden mb-4'>
                <div
                  className='h-3 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500'
                  style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                />
              </div>
              <p className='text-white font-bold text-center mb-4'>
                {challenge.progress} / {challenge.target} completed
              </p>
              <Button variant='primary' size='md' className='w-full'>
                Continue
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default Challenges
