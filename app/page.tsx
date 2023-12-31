import { Metadata } from 'next';
import { Htag } from './../components/Htag/Htag';
import { Button } from './../components/Button/Button';
import { P } from '../components';
import { Tag } from './../components/Tag/Tag';

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
      <Button appereance="ghost" arrow='down'>Кнопка</Button>
      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
    </>
  );
}
