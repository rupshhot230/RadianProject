import React from 'react';

function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <button className="flex items-center justify-center gap-3 pl-8 pr-4 py-1 rounded-full bg-white text-black font-semibold hover:scale-105 transition group">
        Explore the EXR
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
            <path d="M16.6671 20.5L15.8346 19.6832L17.5938 17.9241C17.887 17.6309 18.1487 17.3848 18.3791 17.1859C18.6095 16.9764 18.7927 16.8194 18.9289 16.7147C19.065 16.5995 19.133 16.5419 19.133 16.5419C19.133 16.5419 19.044 16.5524 18.866 16.5733C18.688 16.5838 18.4419 16.5995 18.1278 16.6204C17.8241 16.6309 17.4681 16.6361 17.0597 16.6361L10.8398 16.6361V15.3639L17.044 15.3639C17.4524 15.3639 17.8137 15.3743 18.1278 15.3953C18.4419 15.4058 18.6828 15.4215 18.8503 15.4424C19.0283 15.4634 19.1173 15.4738 19.1173 15.4738C19.1173 15.4738 19.0493 15.4162 18.9131 15.301C18.777 15.1859 18.5938 15.0236 18.3634 14.8141C18.133 14.6047 17.8765 14.3586 17.5938 14.0759L15.8503 12.3168L16.6828 11.5L21.1592 16.0079L16.6671 20.5Z" fill="currentColor"></path>
          </svg>
        </div>
      </button>
      <button className="flex items-center justify-center gap-3 pl-8 pr-4 py-2 rounded-full border border-black text-black bg-yellow-400 hover:scale-105 transition group">
        Configure now
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-black  transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
            <path d="M16.6671 20.5L15.8346 19.6832L17.5938 17.9241C17.887 17.6309 18.1487 17.3848 18.3791 17.1859C18.6095 16.9764 18.7927 16.8194 18.9289 16.7147C19.065 16.5995 19.133 16.5419 19.133 16.5419C19.133 16.5419 19.044 16.5524 18.866 16.5733C18.688 16.5838 18.4419 16.5995 18.1278 16.6204C17.8241 16.6309 17.4681 16.6361 17.0597 16.6361L10.8398 16.6361V15.3639L17.044 15.3639C17.4524 15.3639 17.8137 15.3743 18.1278 15.3953C18.4419 15.4058 18.6828 15.4215 18.8503 15.4424C19.0283 15.4634 19.1173 15.4738 19.1173 15.4738C19.1173 15.4738 19.0493 15.4162 18.9131 15.301C18.777 15.1859 18.5938 15.0236 18.3634 14.8141C18.133 14.6047 17.8765 14.3586 17.5938 14.0759L15.8503 12.3168L16.6828 11.5L21.1592 16.0079L16.6671 20.5Z" fill="currentColor"></path>
          </svg>
        </div>
      </button>
    </div>
  );
}

export default HeroButtons;
