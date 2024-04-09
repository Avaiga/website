'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import getYouTubeId from 'get-youtube-id';

function YouTube({ url, title = 'YouTube' }: { url: string; title?: string }) {
  const id = getYouTubeId(url);

  if (id === null || id === '') {
    return null;
  }

  return <LiteYouTubeEmbed id={id} title={title} />;
}

export default YouTube;
