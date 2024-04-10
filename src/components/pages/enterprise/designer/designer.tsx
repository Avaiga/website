'use client';

import Image, { StaticImageData } from 'next/image';

import { useState } from 'react';

import applicationImage from '@/images/pages/enterprise/application.webp';
import pythonImage from '@/images/pages/enterprise/python.webp';
import renderingImage from '@/images/pages/enterprise/rendering.webp';
import widgetsImage from '@/images/pages/enterprise/widget.webp';

import Button from '@/components/shared/button';

import DesignerItem from './designer-item';

interface Feature {
  question: string;
  answer: string;
  image: StaticImageData;
  initialState?: 'open' | 'closed';
}

const items: Feature[] = [
  {
    question: 'Drag and drop widgets onto the page',
    answer:
      'Instead of traditional insertion methods or programming, users can simply drag and drop widgets from the toolbar or sidebar menu onto the page.',
    image: widgetsImage,
    initialState: 'open' as const,
  },
  {
    question: 'Connect the widgets to Python variables',
    answer:
      'Connect widgets to Python variables seamlessly for dynamic interaction and real-time data manipulation with ease.',
    image: pythonImage,
  },
  {
    question: 'Change the visual rendering',
    answer:
      'Enhance visual rendering: Transform display aesthetics for superior user engagement and experience.',
    image: renderingImage,
  },
  {
    question: 'Interact and share your application',
    answer:
      'Interact and share your application: Facilitate seamless collaboration and effortless sharing for enhanced user interaction.',
    image: applicationImage,
  },
];

function Designer() {
  const [currentFeature, setCurrentFeature] = useState(items[0]);
  
return (
    <section className="designer mt-[188px] px-safe">
      <div className="container flex max-w-[1280px] flex-col items-center gap-x-16">
        <h2 className="text-48 font-medium leading-dense tracking-tight">
          Taipy Designer features
        </h2>
        <p className="mt-5 max-w-[656px] text-center text-18 leading-snug text-grey-70">
          Get flexible solutions that fit your environment and give you full control of your
          observability data.
        </p>

        <div className="mt-[54px] flex max-w-[1280px] items-center gap-x-16">
          <ul className="basis-1/2">
            {items.map((feature, index) => (
              <DesignerItem
                {...feature}
                key={index}
                index={index}
                setCurrentPicture={() => setCurrentFeature(feature)}
              />
            ))}
          </ul>
          <div className="flex basis-1/2 items-center justify-center">
            <Image
              src={currentFeature.image}
              alt={`Feature ${currentFeature.question}`}
              className="max-h-full w-auto rounded-3xl"
            />
          </div>
        </div>
        <Button className="mt-[70px] w-full max-w-[180px]" size="lg" theme="red-filled">
          See our plans
        </Button>
      </div>
    </section>
  );
}

export default Designer;
