import Image from 'next/image';

export const Logo = (): JSX.Element => {
  return (
    <>
      <div className="flex items-center ">
        <Image src="/write.svg" height={40} width={40} alt="logo" />
        <h1 className="xl:text-3xl sm:text-2xl text-xl font-['Julius_Sans_One']">
          | BUDGETTRACKER
        </h1>
      </div>
    </>
  );
};
