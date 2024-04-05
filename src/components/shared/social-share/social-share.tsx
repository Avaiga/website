'use client';

import React from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

import useCopyToClipboard from '@/hooks/use-copy-to-clipboard';
import clsx from 'clsx';
import { LazyMotion, domAnimation, m } from 'framer-motion';

import Button from '@/components/shared/button';

import LinkIcon from '@/svgs/icons/link.inline.svg';
import FacebookIcon from '@/svgs/icons/logo-facebook.inline.svg';
import LinkedinIcon from '@/svgs/icons/logo-linkedin.inline.svg';
import TwitterIcon from '@/svgs/icons/logo-x.inline.svg';

const links = [
  {
    name: 'Twitter',
    icon: TwitterIcon,
    tag: TwitterShareButton,
  },
  {
    name: 'Facebook',
    icon: FacebookIcon,
    tag: FacebookShareButton,
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    tag: LinkedinShareButton,
  },
];

type SocialShareProps = {
  pathname: string;
  title: string;
};

export default function SocialShare({ pathname, title }: SocialShareProps) {
  const url = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}${pathname}`;
  const { isCopied, handleCopy } = useCopyToClipboard(2000);

  return (
    <div className="flex items-center">
      <span className="mr-3.5 text-14 tracking-snug text-grey-60">Share:</span>
      <ul className="flex items-center gap-x-3.5">
        {links.map(({ icon: Icon, tag: Tag }, index) => (
          <li key={index}>
            <Tag className="block" url={url} title={title}>
              <Icon className="h-5 w-5 fill-white hover:fill-grey-90" />
            </Tag>
          </li>
        ))}
        <li className="relative">
          {/* TODO: implement copy logic from koyeb https://github.com/pixel-point/koyeb-next/blob/main/apps/www/src/components/page/article/social-share/social-share.tsx */}
          <Button
            className={clsx('block', {
              'pointer-events-none': isCopied,
            })}
            aria-label={isCopied ? 'Copied' : 'Copy'}
            disabled={isCopied}
            onClick={() => handleCopy(url)}
          >
            <span className="sr-only">Copy article link</span>
            <LinkIcon className="h-5 w-5 fill-white hover:fill-grey-90" />
          </Button>
          <LazyMotion features={domAnimation}>
            <m.span
              className="pp-md:bottom-10 text-grey-200 pointer-events-none absolute -right-3 bottom-8 whitespace-nowrap text-14 font-semibold leading-none opacity-0"
              animate={isCopied ? 'toggled' : 'initial'}
              variants={{
                initial: {
                  opacity: 0,
                  translateY: 20,
                  transition: { duration: 0.3 },
                },
                toggled: {
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.3 },
                },
              }}
            >
              Copied!
            </m.span>
          </LazyMotion>
        </li>
      </ul>
    </div>
  );
}
