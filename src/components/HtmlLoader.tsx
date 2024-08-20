import React from 'react';
import InnerHTML from 'dangerously-set-html-content';
import Playground from 'htmlPages/Playground';
import Customer from 'htmlPages/Customer';


type Props = { load: string };

export const allPages: Record<string, string> = {
  Playground,
  Customer,
};

export default function HtmlLoader({ load }: Props) {
  const htmlToLoad = allPages[load];

  return (
    <InnerHTML html={htmlToLoad} />
  );
}
