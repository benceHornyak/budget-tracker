import { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren;

export const Card = ({ children }: CardProps): JSX.Element => {
  return (
    <>
      <div className="flex flex-col justify-evenly bg-slate-100  items-center  lg:w-3/12 sm:w-3/6 w-11/12 h-1/2  rounded-lg shadow-md">
        {children}
      </div>
    </>
  );
};
