import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img src="/logo.png" alt="SeekerTracker" style={{ height: '28px', marginRight: '8px' }} />
          <span style={{ color: '#00ffd9', fontWeight: 600 }}>SeekerTracker</span>
          <span style={{ color: '#666', marginLeft: '8px', fontSize: '14px' }}>Docs</span>
        </>
      ),
    },
    links: [
      {
        text: 'Website',
        url: 'https://seekertracker.com',
      },
      {
        text: 'Telegram',
        url: 'https://t.me/seeker_tracker',
      },
      {
        text: 'X Community',
        url: 'https://x.com/i/communities/2015698607681515529',
      },
    ],
    githubUrl: 'https://github.com/SeekerTracker',
  };
}
