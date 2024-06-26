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
    url: 'https://docs.taipy.io/en/release-3.0/knowledge_base/demos/sales_dashboard/',
  },
  {
    title: 'Fraud Detection',
    description: 'An application that analyzes credit card transactions to detect fraud',
    image: fraudDetection,
    url: 'https://docs.taipy.io/en/release-3.0/knowledge_base/demos/fraud_detection/',
  },
  {
    title: 'Drift Detection',
    description: 'The example of detecting drift on a dataset',
    image: driftDetection,
    url: 'https://docs.taipy.io/en/release-3.0/knowledge_base/demos/drift_detection/',
  },
  {
    title: 'Stock visualization ',
    description: 'Build a forecast data visualization dashboard effortlessly',
    image: stockVisualization,
    url: 'https://docs.taipy.io/en/release-3.0/knowledge_base/demos/stock_visualization/',
  },
  {
    title: 'Pollution Dashboard',
    description: 'This application shows pollution levels around a factory in real-time',
    image: pollutionDashboard,
    url: 'https://docs.taipy.io/en/release-3.0/knowledge_base/demos/pollution_sensors/',
  },
  {
    title: 'Churn classification',
    description: 'Identify the churn rate and enhance customer loyalty',
    image: churnClassification,
    url: 'https://docs.taipy.io/en/release-3.0/knowledge_base/demos/churn_classification/',
  },
];

function Applications() {
  return (
    <section className="applications mt-[200px] px-safe lg:mt-[132px] md:mt-24 sm:mt-[76px]">
      <div className="container max-w-7xl text-center">
        <span className="text-center leading-snug text-primary-red md:text-14">Applications</span>
        <h2 className="mt-4 text-center text-56 font-semibold leading-dense tracking-tight lg:mt-3.5 lg:text-48 md:text-40 sm:mt-3 sm:text-28">
          Build anything, use&nbsp;Python&nbsp;only
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-18 font-light text-grey-70 lg:mt-5 lg:max-w-[646px] lg:text-16 md:mt-4 md:max-w-[503px] md:text-14 sm:mt-3">
          Taipy is flexible about the &quot;what&quot; and the &quot;how&quot;. Construct
          straightforward pilots, develop large-scale complex applications, or anything in between.
          Check out demos for inspiration.
        </p>
        <div className="mt-14 grid grid-cols-3 gap-8 lg:mt-12 lg:gap-6 md:mt-14 md:grid-cols-2 md:px-8 sm:mt-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-5 sm:px-0">
          {CARDS.map(({ image, title, description, url }, index) => (
            <div
              className="card-border-hover flex h-96 cursor-pointer rounded-lg text-left lg:aspect-[1.013] lg:h-auto sm:aspect-auto sm:h-[304px] sm:w-full sm:max-w-[320px]"
              key={index}
            >
              <Link
                className="relative flex w-full flex-col justify-end rounded-lg bg-grey-10 p-8 lg:p-6"
                href={url as unknown as URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  className="pointer-events-none absolute left-0 top-0 z-10 h-auto w-full"
                  src={image}
                  alt={title}
                />
                <h3 className="relative z-10 text-20 font-semibold leading-snug lg:text-16">
                  {title}
                </h3>
                <p className="relative z-10 mt-2 text-18 text-grey-70 lg:text-14">{description}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-[50px] flex justify-center lg:mt-10 md:mt-9 sm:mt-6">
          <Link
            className="leading-snug"
            href="https://docs.taipy.io/en/release-3.0/knowledge_base/demos/"
            size="lg"
            theme="white"
            arrowTheme="red"
          >
            See all demos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Applications;
