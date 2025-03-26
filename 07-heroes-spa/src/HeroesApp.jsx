import { AuthProvider } from './auth/context/AuthProvider';

export const HeroesApp = () => {
  return (
    <AuthProvider>
        <h1>HeroesApp</h1>
    </AuthProvider>
  )
}
