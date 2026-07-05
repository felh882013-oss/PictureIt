import { create } from 'zustand'

export const useGameStore = create((set) => ({
  // User Data
  user: {
    id: 'user_1',
    username: 'SkyPhotographer',
    avatar: '📸',
    level: 12,
    points: 2450,
    totalPoints: 15680,
    joinedDate: '2024-01-15',
    streak: 7,
    clanId: 'clan_1',
    groupIds: ['group_1', 'group_2', 'group_3'],
  },

  // Daily Challenges
  dailyChallenges: [
    {
      id: 'daily_1',
      title: 'Golden Hour',
      description: 'Capture a photo during sunset or sunrise',
      reward: 400,
      difficulty: 'Easy',
      image: '🌅',
      completed: false,
      deadline: '2024-12-31',
    },
    {
      id: 'daily_2',
      title: 'Urban Explorer',
      description: 'Find and photograph interesting street art',
      reward: 500,
      difficulty: 'Medium',
      image: '🎨',
      completed: false,
      deadline: '2024-12-31',
    },
    {
      id: 'daily_3',
      title: 'Wildlife Wonder',
      description: 'Capture a photo of an animal in nature',
      reward: 600,
      difficulty: 'Hard',
      image: '🦅',
      completed: false,
      deadline: '2024-12-31',
    },
  ],

  // Weekly Challenges
  weeklyChallenges: [
    {
      id: 'weekly_1',
      title: 'City Week',
      description: 'Complete 5 urban photography challenges',
      reward: 2500,
      progress: 3,
      total: 5,
      image: '🏙️',
      completed: false,
    },
    {
      id: 'weekly_2',
      title: 'Nature Explorer',
      description: 'Take photos in 3 different natural locations',
      reward: 2000,
      progress: 1,
      total: 3,
      image: '🌲',
      completed: false,
    },
  ],

  // Clans
  clans: [
    {
      id: 'clan_1',
      name: 'Sky Hunters',
      avatar: '🦅',
      level: 15,
      members: 42,
      points: 125680,
      description: 'For those who reach for the skies',
      leaderPosition: 3,
    },
    {
      id: 'clan_2',
      name: 'Urban Legends',
      avatar: '🏙️',
      level: 18,
      members: 67,
      points: 187450,
      description: 'Master the art of city photography',
      leaderPosition: 1,
    },
    {
      id: 'clan_3',
      name: 'Nature Vibes',
      avatar: '🌿',
      level: 12,
      members: 35,
      points: 98765,
      description: 'Capture the beauty of the wild',
      leaderPosition: 5,
    },
  ],

  // Groups
  groups: [
    {
      id: 'group_1',
      name: 'Urban Explorers',
      avatar: '🏢',
      members: 234,
      description: 'For city photography enthusiasts',
      points: 45600,
      createdDate: '2024-06-15',
    },
    {
      id: 'group_2',
      name: 'Nature Enthusiasts',
      avatar: '🌲',
      members: 189,
      description: 'Wildlife and landscape photography',
      points: 38900,
      createdDate: '2024-05-20',
    },
    {
      id: 'group_3',
      name: 'Street Art Collective',
      avatar: '🎨',
      members: 156,
      description: 'Urban art and graffiti photography',
      points: 32450,
      createdDate: '2024-07-01',
    },
    {
      id: 'group_4',
      name: 'Night Photographers',
      avatar: '🌙',
      members: 98,
      description: 'Low light and night photography',
      points: 24600,
      createdDate: '2024-04-10',
    },
  ],

  // Leaderboard
  leaderboard: {
    global: [
      {
        rank: 1,
        username: 'PhotoMaster2024',
        avatar: '👑',
        level: 25,
        points: 450000,
      },
      {
        rank: 2,
        username: 'SunsetChaser',
        avatar: '🌅',
        level: 23,
        points: 425000,
      },
      {
        rank: 3,
        username: 'SkyPhotographer',
        avatar: '📸',
        level: 12,
        points: 15680,
      },
      {
        rank: 4,
        username: 'NatureNinja',
        avatar: '🥷',
        level: 20,
        points: 380000,
      },
      {
        rank: 5,
        username: 'UrbanArtist',
        avatar: '🎨',
        level: 18,
        points: 350000,
      },
    ],
    clanLeaderboard: [
      {
        rank: 1,
        clan: 'Urban Legends',
        avatar: '🏙️',
        level: 18,
        members: 67,
        points: 187450,
      },
      {
        rank: 2,
        clan: 'Sky Hunters',
        avatar: '🦅',
        level: 15,
        members: 42,
        points: 125680,
      },
      {
        rank: 3,
        clan: 'Nature Vibes',
        avatar: '🌿',
        level: 12,
        members: 35,
        points: 98765,
      },
      {
        rank: 4,
        clan: 'Pixel Perfectionists',
        avatar: '📷',
        level: 10,
        members: 28,
        points: 78900,
      },
      {
        rank: 5,
        clan: 'Shadow Seekers',
        avatar: '🌑',
        level: 9,
        members: 22,
        points: 56430,
      },
    ],
  },

  // Actions
  completeChallenge: (challengeId) =>
    set((state) => ({
      dailyChallenges: state.dailyChallenges.map((c) =>
        c.id === challengeId ? { ...c, completed: true } : c
      ),
    })),

  createClan: (clan) =>
    set((state) => ({
      clans: [...state.clans, clan],
    })),

  joinClan: (clanId) =>
    set((state) => ({
      user: { ...state.user, clanId },
    })),

  createGroup: (group) =>
    set((state) => ({
      groups: [...state.groups, group],
    })),

  joinGroup: (groupId) =>
    set((state) => ({
      user: {
        ...state.user,
        groupIds: [...state.user.groupIds, groupId],
      },
    })),
}))
