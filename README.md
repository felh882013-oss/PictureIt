# PictureIt 📷🎮

A gamified web game where you complete photo challenges in real life, earn points, and compete with friends in clans and groups.

## ✨ Features

### 🎯 Core Gameplay
- **Daily & Weekly Challenges**: Get new photo challenges every day to complete in real life
- **Point System**: Earn points for completing challenges and level up
- **Streak Tracking**: Maintain daily challenge streaks for bonuses
- **Difficulty Levels**: Easy, Medium, and Hard challenges with varying rewards

### 🐺 Clans System
- **Create or Join Clans**: Build teams with other players
- **Clan Competition**: Compete with other clans for supremacy
- **Clan Leaderboard**: Track clan rankings and points
- **Clan Levels**: Increase clan level by earning points together
- **Invite System**: Invite friends to join your clan

### 👥 Groups System
- **Community Groups**: Join interest-based groups (Urban Explorers, Nature Enthusiasts, etc.)
- **Group Competition**: Compete within your groups
- **Group Leaderboard**: See who's leading in your group
- **Multiple Memberships**: Join as many groups as you want

### 🏆 Leaderboards
- **Global Rankings**: Compete with players worldwide in real-time
- **Clan Rankings**: See top clans by points and members
- **Achievement Badges**: Unlock badges and achievements
- **Rank Display**: See your position globally and in your clan

### 👤 User Profiles
- **Profile Stats**: View your level, points, achievements
- **Challenge History**: Track your completed challenges
- **Clan/Group Affiliation**: See all your memberships
- **Achievement Display**: Show off your unlocked badges

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite (Fast development server)
- **State Management**: Zustand (Lightweight store)
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: React Icons
- **Animation**: CSS animations & Framer Motion ready

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/felh882013-oss/PictureIt.git
cd PictureIt
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**
- Navigate to `http://localhost:3000`
- Start exploring the app!

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📁 Project Structure

```
PictureIt/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Top navigation bar
│   │   ├── Card.jsx            # Reusable card component
│   │   └── Button.jsx          # Reusable button component
│   ├── pages/
│   │   ├── Dashboard.jsx       # Main dashboard with daily challenges
│   │   ├── Challenges.jsx      # All challenges (daily & weekly)
│   │   ├── Clans.jsx           # Clan management & discovery
│   │   ├── Groups.jsx          # Group management & discovery
│   │   ├── Leaderboard.jsx     # Global & clan leaderboards
│   │   └── Profile.jsx         # User profile & achievements
│   ├── store/
│   │   └── gameStore.js        # Zustand state management
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & animations
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🎮 Features in Detail

### Dashboard
- Quick overview of your profile
- Daily challenges display
- Current streak and level
- Quick access to clans and groups

### Challenges
- **Daily Challenges**: 3 new challenges every day (24-hour reset)
- **Weekly Challenges**: Multi-step challenges spanning the week
- **Challenge Submission**: Submit photos for completed challenges
- **Point Rewards**: Different point values based on difficulty

### Clans
- Create your own clan
- Discover and join other clans
- View clan members and stats
- Track clan progression and leaderboard

### Groups
- Join interest-based communities
- View group members
- Participate in group-specific challenges
- See group leaderboards

### Leaderboard
- Global player rankings
- Clan rankings
- Real-time rank updates
- Medal indicators (🥇🥈🥉)

### Profile
- Personal statistics
- Achievement showcase
- Clan and group affiliations
- Challenge completion history

## 📊 Game Mechanics

### Point System
- **Easy Challenge**: 400 points
- **Medium Challenge**: 500 points
- **Hard Challenge**: 600 points
- **Weekly Completion Bonus**: 2000-2500 points

### Leveling
- Progress toward next level by earning points
- Each level increases in difficulty
- Unlock new features at higher levels

### Achievements
- On Fire (7-day streak)
- Rising Star (Level 10)
- Marksman (100 challenges completed)
- Clan Leader (Lead a clan)
- Elite (10k+ points)
- Explorer (Join all group types)

## 🔌 API Integration (Future)

The app is structured to easily connect to a backend API:

```javascript
// Example: Connecting to backend
const submitChallenge = async (challengeId, photoUrl) => {
  const response = await axios.post('/api/challenges/submit', {
    challengeId,
    photoUrl,
    userId: user.id
  })
  // Update state with response
}
```

### Recommended Backend Stack
- **Node.js** with Express.js
- **MongoDB** or PostgreSQL for database
- **Firebase** for image storage
- **WebSockets** for real-time updates

## 🎨 Customization

### Changing Colors
Edit `src/index.css` and `tailwind.config.js`:
```css
/* Change primary color from purple to blue */
.glass-dark {
  border: 1px solid rgba(59, 130, 246, 0.3);
}
```

### Adding New Challenges
Edit `src/store/gameStore.js`:
```javascript
dailyChallenges: [
  {
    id: 'daily_new',
    title: 'Your Challenge',
    description: 'Challenge description',
    reward: 500,
    difficulty: 'Medium',
    image: '📸',
  }
]
```

### Modifying Game Store
The Zustand store in `src/store/gameStore.js` contains all game state:
- User data
- Clans and groups
- Challenges
- Leaderboard data

## 📱 Responsive Design

- **Mobile**: Optimized for screens 320px and up
- **Tablet**: Better layout for 768px+ screens
- **Desktop**: Full experience on 1024px+ screens
- **Large Screens**: Optimized for 1280px+ displays

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Real photo upload and verification
- [ ] Real-time notifications
- [ ] Friend system and messaging
- [ ] Seasonal events and tournaments
- [ ] Mobile app (React Native)
- [ ] In-game rewards shop
- [ ] Social features (comments, likes)
- [ ] Photo gallery and sharing
- [ ] Advanced analytics
- [ ] Push notifications
- [ ] Offline mode support

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions, issues, or suggestions:
- Open an issue on GitHub
- Check existing issues for solutions
- Contact the development team

## 🎉 Getting Started Checklist

- [ ] Clone the repository
- [ ] Install dependencies (`npm install`)
- [ ] Start dev server (`npm run dev`)
- [ ] Explore all pages (Dashboard, Challenges, Clans, Groups, Leaderboard, Profile)
- [ ] Try creating a clan
- [ ] Join a group
- [ ] Complete a challenge
- [ ] Check the leaderboard

---

**Start taking pictures. Start winning. Start playing PictureIt today! 📷🎮**

Made with ❤️ by the PictureIt Team
