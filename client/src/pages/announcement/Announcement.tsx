import React from 'react';
import BasicFrame from '../components/BasicFrame';
import { useAuth } from '../../provider/authProvider';

/**
 * This will be the error page that is displayed when there is error in routing (not connected yet)
 */
const Announcement = () => {
  const context = useAuth();
  return context?.token ? (
    <BasicFrame topic={'in'}></BasicFrame>
  ) : (
    <BasicFrame topic={'out'}></BasicFrame>
  );
};

export default Announcement;
