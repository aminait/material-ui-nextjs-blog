import React, { useRef, useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import webContent from '../constants/webContent.json';
import mobileContent from '../constants/mobileContent.json';

export function useResponsive() {
  const [rc, setRc] = useState(webContent);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;

    isMobile ? setRc(mobileContent) : setRc(webContent);

    // unbinding on unmount
    return () => {
      isMounted.current = false;
    };
  }, [isMobile]);

  return { rc, isMobile, isDesktop };
}
