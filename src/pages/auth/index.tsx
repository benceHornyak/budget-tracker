import { Button } from '@budget-tracker/components/button/button';
import { Card } from '@budget-tracker/components/card/card';
import { Logo } from '@budget-tracker/components/logo/logo';
import Link from 'next/link';

const Auth = (): JSX.Element => {
  return (
    <>
      <Card>
        <Link href="/">
          <Logo />
        </Link>{' '}
        <Button onClick={(): void => console.log('hello')} icon={'icon-google'}>
          Continue with Google
        </Button>
      </Card>
    </>
  );
};

export default Auth;
