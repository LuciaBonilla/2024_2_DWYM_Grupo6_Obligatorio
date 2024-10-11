import { useState } from "react";

function AuthContextProvider() {
    const [isAuthorizated, setIsAuthorizated] = useState(false);

    const [token, setToken] = useState(null);

    
}