// EventsSection.tsx

import React from 'react';
import { MainEvent } from './index'; // Import MainEvent component here
import { aboutus, juniorCode, noCode, CodeWars, seniorCode } from "../components/MainEventtexxt"; // Assuming you have a component named MainEvent
import Navbar from '@/components/Navbar';
import Head from 'next/head';
const EventsSection: React.FC = () => {
    return (
        <>
            <Head>
                <title>TISB HACKS</title>
                <meta name="description" content="TISBZephyr" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="./logo.png" />
            </Head>
            <div className="w-screen h-full bg-primary" >
                <Navbar />

                <div className="flex w-screen h-auto bg-primary " id="events">
                    <div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8 mt-3">
                        <h1 className="w-full mb-8 mt-16 text-6xl font-semibold text-center sm:text-left">
                            Winners
                        </h1>
                        <div className="flex flex-col items-start justify-center w-full h-auto gap-4">
                            <MainEvent title={juniorCode.title} description={juniorCode.description} image='./images/juniorCode.png' />
                            <MainEvent title={seniorCode.title} description={seniorCode.description} image='./images/music.jpg' />
                            <MainEvent title={noCode.title} description={noCode.description} image='./images/noCode.png' />
                            {/* {/* <MainEvent title={event4.title} description={event4.description} image='./images/standup.png' /> */}
                            <MainEvent title={CodeWars.title} description={CodeWars.description} image='./images/coding.jpg' /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventsSection;
