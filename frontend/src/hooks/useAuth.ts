import { useAuthStore } from "../store/useAuthStore";

export const useAuth = () => {
  const { user, isAuthenticated, setUser, logout } = useAuthStore();
  return { user, isAuthenticated, setUser, logout };
};
