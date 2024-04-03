import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

export default path => function Redirect() {
    useEffect(() => {
        navigate(path);
    });
    return <div>Redirecting</div>;
} 