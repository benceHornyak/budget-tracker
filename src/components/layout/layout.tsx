import { useRouter } from 'next/router';
import { Header } from '../header/header';

export const Layout = ({ children }: React.PropsWithChildren): JSX.Element => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/auth' && <Header />}
      <main className="flex justify-center items-center w-full h-[90%]">
        {children}
      </main>
    </>
  );
};
