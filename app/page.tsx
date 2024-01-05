import { Metadata } from 'next';
import { Htag } from './../components/Htag/Htag';
import { Button } from '@/components/Button/Button';

export const metadata: Metadata = {
  title: 'Исправленный заголок',
};

export async function GenerateMetadata(): Promise<Metadata> {
  return {
    title: 'ComputedMeta',
  };
}


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h2'>Hello</Htag>
      <Button appereance="primary" className='test'>Кнопка</Button>
      <Button appereance="ghost">Кнопка</Button>
    </>
  );
}
