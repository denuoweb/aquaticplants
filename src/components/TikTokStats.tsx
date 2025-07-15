import React, { useEffect } from 'react';
import { TrendingUp, Eye, Heart, Share } from 'lucide-react';

const TikTokStats = () => {
  const pinnedVideoIds = [
    '7343775795535678766'
  ];

  useEffect(() => {
    const scriptId = 'tiktok-embed-script';
    // if it’s not injected yet, add it…
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      // once it’s actually loaded, parse all the blockquotes on the page:
      script.onload = () => {
        (window as any).tiktokEmbedInit?.();
      };
      document.body.appendChild(script);
    } else {
      // if it’s already there, just re-scan
      (window as any).tiktokEmbedInit?.();
    }
  }, [pinnedVideoIds]);
  const stats = [
    { icon: Eye, label: 'Total Views', value: '15.2M', color: 'text-pink-500' },
    { icon: Heart, label: 'Likes', value: '2.8M', color: 'text-red-500' },
    { icon: Share, label: 'Shares', value: '456K', color: 'text-blue-500' },
    { icon: TrendingUp, label: 'Followers', value: '89K', color: 'text-green-500' }
  ];
  return (
    <section className="py-20 bg-white">
      {/* … header + stats grid … */}
      <div>
        {pinnedVideoIds.map((id) => (
          <blockquote
            key={id}
            className="tiktok-embed"
            cite={`https://www.tiktok.com/@aquahound/video/${id}`}
            data-video-id={id}
            style={{ maxWidth: '605px', minWidth: '325px' }}
          >
            {/* ← this empty section is required */}
            <section></section>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default TikTokStats;
