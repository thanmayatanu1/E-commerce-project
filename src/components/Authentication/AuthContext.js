import React from 'react';

function AuthContext({ children }) {
    const handleSignup = async (formData) => {
      // Handle signup logic here
    };
  
    return (
      <AuthContext.Provider value={{ handleSignup }}>
        {children}
      </AuthContext.Provider>
    );
  }

  export default AuthContext;