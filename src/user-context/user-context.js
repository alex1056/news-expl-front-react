import React from 'react';
import { createContext } from 'react';

  
  export const UserContext = React.createContext({
    isLoggedIn: false, userName: 'defaultName', 
    }
  );
