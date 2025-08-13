import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import PATHS from './path';

const ProtectedRoute = ({children, requireAdmin=false}) => {
    const user = useSelector(s => s.userAuth?.user);

    if(!user) {
        return <Navigate to={PATHS.HOME} replace />
    }

    if(requireAdmin && user.user_role !== 'admin') {
        return <Navigate to={PATHS.LOGIN} replace />
    }

  return children
}

export default ProtectedRoute