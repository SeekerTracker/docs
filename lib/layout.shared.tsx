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
        text: 'Twitter',
        url: 'https://x.com/Seeker_Tracker',
      },
    ],
    githubUrl: 'https://github.com/SeekerTracker',
  };
}
