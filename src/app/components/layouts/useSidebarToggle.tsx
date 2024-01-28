'use client';
import React, { useEffect, useRef } from 'react';

const useSidebarToggle = () => {
    // Create a ref object
    const sidebarToggleRef = useRef(null);
    const bodyRef = useRef<HTMLBodyElement | null>(null);
    useEffect(() => {
        const handleToggle = (event: any) => {
            event.preventDefault();
            const bodyElement = document.getElementById('bodyElem') as HTMLBodyElement | null;

            if (bodyElement) {
                bodyRef.current = bodyElement;
                bodyRef.current.classList.toggle('sb-sidenav-toggled');
            }
        }

        const sidebarToggle = sidebarToggleRef.current as HTMLElement | null;
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', handleToggle);
        }
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.add('sb-sidenav-toggled');
        // }

        // Cleanup the event listener on component unmount
        return () => {
            if (sidebarToggle) {
                sidebarToggle.removeEventListener('click', handleToggle);
            }
        };
    }, []); // Empty dependency array ensures this runs once on mount

    // Expose the ref to other components
    return { sidebarToggleRef };

};

export default useSidebarToggle;
