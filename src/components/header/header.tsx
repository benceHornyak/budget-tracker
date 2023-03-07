import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../button/button';
import { Logo } from '../logo/logo';

export const Header = (): JSX.Element => {
  const onLogoutButtonClick = (): void => {
    signOut();
  };

  return (
    <>
      <div className="flex gap-3 items-center h-[10%] shadow-md justify-between px-5">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-3">
          <Link className="text-2xl" href="/statistics">
            Statistics
          </Link>
          <Link className="text-2xl" href="/tracker">
            Tracker
          </Link>
          <Link className="text-2xl" href="/auth">
            Sign in
          </Link>
          <Button onClick={onLogoutButtonClick}>Logout</Button>
        </div>
      </div>
    </>
  );
};
