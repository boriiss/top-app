"use client"
import { useState } from 'react';
import { Metadata } from 'next';
import { Button, Htag, P, Rating, Tag } from '../components';

export async function GenerateMetadata(): Promise<Metadata> {
  return {
    title: 'ComputedMeta',
  };
}


export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

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
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
