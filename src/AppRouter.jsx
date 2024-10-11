import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

/**
 * Objetivo del componente:
 * Cambiar la definición de rutas según si el usuario está autorizado.
 * @returns Definición de rutas.
 */
function AppRouter() {
  const { isAuthorizated } = useAuthContext();

  return (
    <>
      <PublicRoutes />
      {isAuthorizated && (<PrivateRoutes />)}
    </>
  )
}

export default AppRouter;