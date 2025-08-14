import ProfileCard from './ProfileCard';
import { profiles } from './assets/data';

function App() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', background: '#f0f4f8', padding: '32px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        {profiles && profiles.map((profile, idx) => (
          <ProfileCard
            key={idx}
            name={profile.name}
            age={profile.age}
            occupation={profile.occupation}
            profileImage={profile.profileImage}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
