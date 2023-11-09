import { create } from 'zustand';

interface UserStore {
  userName: string;
  userAge: number;
  birthDay: () => void;
}

export const useUser = create<UserStore>((set) => ({
  userName: 'coffee',
  userAge: 18,
  birthDay: () => set(state => ({ userAge: state.userAge + 1 }))
}))