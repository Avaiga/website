import Image from 'next/image';

import churnClassification from '@/images/pages/home/applications/churn-classification.png';
import driftDetection from '@/images/pages/home/applications/drift-detection.png';
import fraudDetection from '@/images/pages/home/applications/fraud-detection.png';
import pollutionDashboard from '@/images/pages/home/applications/pollution-dashboard.png';
import salesPrediction from '@/images/pages/home/applications/sales-prediction.png';
import stockVisualization from '@/images/pages/home/applications/stock-visualization.png';

import Link from '@/components/shared/link';

const CARDS = [
  {
    title: 'Sales prediction',
    description: 'Extract data from an Excel file and derive meaningful insights',
    image: salesPrediction,
  },
  {
    title: 'Fraud Detection',
    description: 'An application that analyzes credit card transactions to detect fraud',
    image: fraudDetection,
  },
  {
    title: 'Drift Detection',
    description: 'The example of detecting drift on a dataset',
    image: driftDetection,
  },
  {
    title: 'Stock visualization ',
    description: 'Build a forecast data visualization dashboard effortlessly',
    image: stockVisualization,
  },
  {
    title: 'Pollution Dashboard',
    description: 'This application shows pollution levels around a factory in real-time',
    image: pollutionDashboard,
  },
  {
    title: 'Churn classification',
    description: 'Identify the churn rate and enhance customer loyalty',
    image: churnClassification,
  },
];

function Applications() {
  return (
    <section className="applications mt-[200px] px-safe lg:mt-32">
      <div className="container max-w-[1281px]">
        <p className="text-center leading-snug text-primary-red">Applications</p>
        <h2 className="mt-4 text-center text-56 font-semibold leading-dense tracking-tight lg:mt-4 lg:text-48">
          Build anything, use Python only
        </h2>
        <p className="mx-auto mt-6 max-w-[768px] text-center text-18 font-light leading-snug text-grey-70 lg:mt-5 lg:max-w-[646px] lg:text-16 lg:leading-normal">
          Taipy holds no opinions on what&apos;s and how&apos;s. Build simple pilots, large-scale
          complex apps, or anything in between. Explore demos for inspiration.
        </p>
        <div className="mt-16 grid grid-cols-3 gap-8 lg:mt-12 lg:gap-6">
          {CARDS.map(({ image, title, description }, index) => (
            <div className="card-border h-[384px] rounded-lg lg:h-[304px]" key={index}>
              <div className="relative flex h-full w-full flex-col justify-end rounded-lg bg-grey-10 p-8 lg:p-6">
                <Image
                  className="pointer-events-none object-contain object-top"
                  src={image}
                  alt={title}
                  fill
                />
                <h3 className="text-20 font-semibold leading-snug lg:text-16">{title}</h3>
                <p className="mt-2 text-18 text-grey-70 lg:text-14">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[50px] flex justify-center lg:mt-10">
          <Link className="leading-snug" href="/" size="lg" theme="white" arrowTheme="red">
            See all demos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Applications;
