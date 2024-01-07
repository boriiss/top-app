import { Metadata } from 'next';
import { Htag } from './../components/Htag/Htag';
import { Button } from './../components/Button/Button';
import { P } from '../components';

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
      <Button appereance="primary" arrow='right'>Кнопка</Button>
      <Button appereance="ghost" arrow='right'>Кнопка</Button>
      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>
    </>
  );
}
