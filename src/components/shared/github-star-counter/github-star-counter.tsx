'use client';

import { useEffect, useState } from 'react';

import { ROUTE } from '@/constants/routes';
import clsx from 'clsx';

import { ClassName } from '@/types/classname';

import GithubLogo from '@/svgs/icons/logo-github.inline.svg';

import Button from '../button';

const API_URL = 'https://api.github.com/repos/Avaiga/taipy';
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const LOCAL_STORAGE_STARGAZERS_COUNT = 'taipy_github_stargazers_count';
const LOCAL_STORAGE_LAST_UPDATED_KEY = 'taipy_github_last_updated';

function GithubStarCounter({ className }: ClassName) {
  const [starsCount, setStarsCount] = useState<string | null>(null);

  const fetchStarCount = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      const updatedStarsCount = json.stargazers_count;

      if (updatedStarsCount !== undefined) {
        window.localStorage.setItem(LOCAL_STORAGE_STARGAZERS_COUNT, updatedStarsCount);
        const now = new Date().getTime();
        window.localStorage.setItem(LOCAL_STORAGE_LAST_UPDATED_KEY, now.toString());
        setStarsCount(updatedStarsCount);
      } else {
        // eslint-disable-next-line no-console
        console.log('Unable to find stargazers_count in response:', json);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching GitHub star count:', error);
    }
  };

  useEffect(() => {
    const lastUpdated = window.localStorage.getItem(LOCAL_STORAGE_LAST_UPDATED_KEY);
    const now = new Date().getTime();

    if (!lastUpdated || now - parseInt(lastUpdated, 10) > ONE_DAY_IN_MS) {
      fetchStarCount();
    } else {
      const prevStarsCount = window.localStorage.getItem(LOCAL_STORAGE_STARGAZERS_COUNT);
      setStarsCount(prevStarsCount);
    }
  }, []);

  return (
    <>
      <Button
        className={clsx('gap-x-2.5 pl-2 pr-3', className)}
        theme="outline"
        size="sm"
        href={ROUTE.GITHUB}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLogo className="h-[18px] flex-shrink-0 fill-white" />
        <span>Star Us</span>
        <span className="h-5 w-px bg-white/20" aria-hidden />
        <span>{starsCount ? `${(parseInt(starsCount, 10) / 1000).toFixed(1)}k` : '...'}</span>
      </Button>
    </>
  );
}

export default GithubStarCounter;
