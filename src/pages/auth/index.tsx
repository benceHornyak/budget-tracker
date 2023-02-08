import { Button } from '@budget-tracker/components/button/button';
import { Card } from '@budget-tracker/components/card/card';
import { Logo } from '@budget-tracker/components/logo/logo';

const Auth = (): JSX.Element => {
  return (
    <>
      <Card>
        <Logo />
        <Button onClick={(): void => console.log('hello')} icon={'icon-google'}>
          Continue with Google
        </Button>
      </Card>
    </>
  );
};

export default Auth;
