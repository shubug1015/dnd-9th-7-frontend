import { MusicSearchPageNavigation } from '@common/components/Navigation';
import { Spacing } from '@common/components/Spacing';
import { MusicSearchInput } from '@features/MusicSearch/components';
import { MusicSearchList } from '@features/MusicSearch/components/MusicSearchList';

const MusicSearchPage = () => {
  return (
    <>
      <MusicSearchPageNavigation />
      <MusicSearchInput />
      <Spacing size={2.4} />
      <MusicSearchList />
    </>
  );
};

export default MusicSearchPage;
