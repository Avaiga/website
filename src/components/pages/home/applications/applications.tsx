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
    <section className="applications mt-[200px] px-safe lg:mt-[132px] md:mt-24">
      <div className="container max-w-7xl text-center">
        <span className="text-center leading-snug text-primary-red md:text-14">Applications</span>
        <h2 className="mt-4 text-center text-56 font-semibold leading-dense tracking-tight lg:mt-3.5 lg:text-48 md:text-40">
          Build anything, use Python only
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-18 font-light text-grey-70 lg:mt-5 lg:max-w-[646px] lg:text-16 md:mt-4 md:max-w-[503px] md:text-14">
          Taipy holds no opinions on what&apos;s and how&apos;s. Build simple pilots, large-scale
          complex apps, or anything in between. Explore demos for inspiration.
        </p>
        <div className="mt-14 grid grid-cols-3 gap-8 lg:mt-12 lg:gap-6 md:mt-14 md:grid-cols-2 md:px-8">
          {CARDS.map(({ image, title, description }, index) => (
            <div
              className="card-border flex h-96 rounded-lg text-left lg:aspect-[1.013] lg:h-auto"
              key={index}
            >
              <div className="relative flex w-full flex-col justify-end rounded-lg bg-grey-10 p-8 lg:p-6">
                <Image
                  className="pointer-events-none absolute left-0 top-0 h-auto w-full"
                  src={image}
                  alt={title}
                />
                <h3 className="text-20 font-semibold leading-snug lg:text-16">{title}</h3>
                <p className="mt-2 text-18 text-grey-70 lg:text-14">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[50px] flex justify-center lg:mt-10 md:mt-9">
          <Link className="leading-snug" href="/" size="lg" theme="white" arrowTheme="red">
            See all demos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Applications;
