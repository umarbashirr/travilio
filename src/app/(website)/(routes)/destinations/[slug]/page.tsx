const Page = ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug;
  return <div>Page + {slug}</div>;
};

export default Page;
