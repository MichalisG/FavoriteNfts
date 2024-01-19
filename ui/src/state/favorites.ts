import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const favoritesState = atom({
  key: 'favorites',
  default: [],
});

