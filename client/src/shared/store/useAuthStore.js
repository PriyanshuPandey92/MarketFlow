import {create} from 'zustand';

const useAuthStore = create((set) => ({
    isLoggedIn: false,  
    user: null,
    login: (user) => set({ isLoggedIn: true, user }),
    logout: () => {
        sessionStorage.removeItem('googleIdToken');
        sessionStorage.removeItem('user');
        set({ isLoggedIn: false, user: null });     
    },
}));

export default useAuthStore;