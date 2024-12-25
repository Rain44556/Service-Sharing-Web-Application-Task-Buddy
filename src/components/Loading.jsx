import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animaiton/loading.json'


const Loading = () => {
    return (
        <div className='flex min-h-screen justify-center items-center'>
       <Lottie animationData={loadingAnimation}></Lottie>
    </div>
    );
};

export default Loading;