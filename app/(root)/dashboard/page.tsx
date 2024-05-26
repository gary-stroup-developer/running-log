"use client";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Menubar, MenubarMenu, MenubarTrigger } from '@radix-ui/react-menubar'
import Link from 'next/link'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false
        }
    },
};
const UserDashboard = () => {
    return (
        <div className='w-full h-screen flex'>
            <Menubar className='bg-modernSecondary w-36 h-screen p-5 text-white font-poppins font-semibold grid grid-rows-6 justify-evenly justify-items-center'>
                <MenubarMenu>
                    <MenubarTrigger><Avatar>
                        <AvatarImage width={65} height={65} className='rounded-full' src="/heroIllustration_01.png" alt="@shadcn" />
                        <AvatarFallback>GS</AvatarFallback>
                    </Avatar></MenubarTrigger>
                    <MenubarTrigger><Link className='hover:text-modernPrimary' href="/dashboard">Dashboard</Link></MenubarTrigger>
                    <MenubarTrigger><Link className='hover:text-modernPrimary' href="/logbook">Log Book</Link></MenubarTrigger>
                    <MenubarTrigger><Link className='hover:text-modernPrimary' href="/records">Records</Link></MenubarTrigger>
                    <MenubarTrigger><Link className='hover:text-modernPrimary' href="/running-quest">Running Quest</Link></MenubarTrigger>
                </MenubarMenu>

            </Menubar>
            <section className='h-screen flex w-full p-4'>
                <p>This is where we will place charts and other user data</p>
                <div className='w-60 h-60'>
                    <Doughnut data={data} options={options} />
                </div>

            </section>
        </div>
    )
}

export default UserDashboard