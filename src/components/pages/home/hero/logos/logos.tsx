import Image from 'next/image';

import logoFirst from '@/images/pages/home/hero/logo-1.png';
import logoSecond from '@/images/pages/home/hero/logo-2.png';
import logoThird from '@/images/pages/home/hero/logo-3.png';
import logoFourth from '@/images/pages/home/hero/logo-4.png';
import logoFifth from '@/images/pages/home/hero/logo-5.png';

function Logos() {
  return (
    <div className="logos-mask mt-[71px] flex h-[91px] items-center justify-center gap-x-14">
      <Image src={logoFirst} width={99} height={56} alt="TAL Group" priority />
      <Image src={logoSecond} width={52} height={52} alt="icb" priority />
      <Image src={logoThird} width={171} height={50} alt="Princeton Consultants" priority />
      <Image src={logoFourth} width={128} height={39} alt="Predictive Layer" priority />
      <Image src={logoFifth} width={86} height={64} alt="les Mousquetaires" priority />
    </div>
  );
}

export default Logos;
