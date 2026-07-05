import React, { useState } from 'react'
import { useGameStore } from '../store/gameStore'
import Card from '../components/Card'
import { FaTrophy, FaMedal } from 'react-icons/fa'

function Leaderboard() {
  const [tab, setTab] = useState('global')
  const leaderboard = useGameStore((state) => state.leaderboard)

  const getMedalIcon = (rank) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return '👤'
  }

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-2 flex items-center gap-3'>
          <FaTrophy className='text-yellow-400' />
          Leaderboard
        </h1>
        <p className='text-purple-300'>Compete with players and clans worldwide</p>
      </div>

      {/* Tabs */}
      <div className='flex gap-4 mb-8'>
        <button
          onClick={() => setTab('global')}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            tab === 'global'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
              : 'bg-purple-800/50 text-purple-300 hover:bg-purple-700/50'
          }`}
        >
          Global Players
        </button>
        <button
          onClick={() => setTab('clans')}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            tab === 'clans'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
              : 'bg-blue-800/50 text-blue-300 hover:bg-blue-700/50'
          }`}
        >
          Clans
        </button>
      </div>

      {/* Global Leaderboard */}
      {tab === 'global' && (
        <div className='space-y-3'>
          {leaderboard.global.map((player) => (
            <Card key={player.rank} hoverGlow={true}>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4 flex-1'>
                  <div className='text-3xl font-bold text-purple-400 min-w-12'>
                    #{player.rank}
                  </div>
                  <div className='text-4xl'>{getMedalIcon(player.rank)}</div>
                  <div className='text-4xl'>{player.avatar}</div>
                  <div>
                    <h3 className='text-lg font-bold text-white'>{player.username}</h3>
                    <p className='text-purple-300 text-sm'>Level {player.level}</p>
                  </div>
                </div>
                <div className='text-right'>
                  <p className='text-2xl font-bold text-yellow-400'>
                    {player.points.toLocaleString()}
                  </p>
                  <p className='text-xs text-purple-300'>points</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Clan Leaderboard */}
      {tab === 'clans' && (
        <div className='space-y-3'>
          {leaderboard.clanLeaderboard.map((clan) => (
            <Card key={clan.rank} hoverGlow={true}>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4 flex-1'>
                  <div className='text-3xl font-bold text-blue-400 min-w-12'>
                    #{clan.rank}
                  </div>
                  <div className='text-4xl'>{getMedalIcon(clan.rank)}</div>
                  <div className='text-5xl'>{clan.avatar}</div>
                  <div>
                    <h3 className='text-lg font-bold text-white'>{clan.clan}</h3>
                    <p className='text-purple-300 text-sm'>Level {clan.level} • {clan.members} members</p>
                  </div>
                </div>
                <div className='text-right'>
                  <p className='text-2xl font-bold text-yellow-400'>
                    {clan.points.toLocaleString()}
                  </p>
                  <p className='text-xs text-purple-300'>points</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default Leaderboard
