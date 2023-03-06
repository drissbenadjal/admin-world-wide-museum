import React from 'react';

import { Sidebar } from './Sidebar';

export const DashboardStructure = ({ children }) => {
    return (
        <>
            <div className="container-all">
                <Sidebar />
                <main>
                    {children}
                </main>
            </div>
        </>
    );
};