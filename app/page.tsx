import { Metadata } from 'next';
import { Htag } from './../components/Htag/Htag';

export const metadata: Metadata = {
  title: 'Исправленный заголок',
};

export async function GenerateMetadata(): Promise<Metadata> {
  return {
    title: 'ComputedMeta',
  };
}


export default function Home() {
  return (
    <div>
      <Htag tag="h2">Hello</Htag>
    </div>
  );
}
