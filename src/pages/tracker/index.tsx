import { AddButton } from '@budget-tracker/components/add-button/add-button';

const Tracker = (): JSX.Element => {
  return (
    <>
      <AddButton onClick={(): void => console.log('add')} />
    </>
  );
};

export default Tracker;
