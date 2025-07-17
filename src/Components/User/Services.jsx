

import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../Reusable/Navbar';
import AxiosInstance from '../../Config/ApiCall';
import { setLoader } from '../../redux_toolkit/generalSlice';
import { useDispatch } from 'react-redux';
import { errorToast } from '../../plugins/toast';

const Services = () => {
  const dispatch = useDispatch()
  const getServices = async () => {
    const { data } = await AxiosInstance({
      method: 'GET',
      url: '/user/list'
    });
    return data;
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ['getAllServices'],
    queryFn: getServices
  });
 
  console.log(data)
  
  useEffect(() => {
    if (error) {
      errorToast('something went wrong')
    }
    if (isLoading) {
      dispatch(setLoader(true));
    } else {
      dispatch(setLoader(false));
    }
  }, [isLoading, dispatch]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="min-h-screen pt-24 pb-10 px-2 sm:px-6 bg-[var(--primary-light)] flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] mb-8 text-center">Available Services</h2>
      {}
      </div>
    </>
  );
};

export default Services;