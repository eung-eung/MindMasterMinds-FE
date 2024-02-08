import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Menu, Transition } from '@headlessui/react'
import classes from './Table.module.css'
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Data {
    id: number,
    bookingDate: string,
    customer: string,
    tutor: string,
    paymentDate: string,
    major: string,
    cost: number,
    status: string,
}

function createData(
    id: number,
    bookingDate: string,
    customer: string,
    tutor: string,
    paymentDate: string,
    major: string,
    cost: number,
    status: string,
): Data {
    // const parsedBookingDate = new Date(bookingDate.split('/').reverse().join('-') + 'T00:00:00Z');
    //     const parsedPaymentDate = new Date(paymentDate.split('/').reverse().join('-') + 'T00:00:00Z');

    return {
        id,
        bookingDate,
        customer,
        tutor,
        paymentDate,
        major,
        cost,
        status
    };
}

const rows = [
    createData(201, '21/10/2023', 'Thang Nguyen', 'None', '24/10/2023', 'International Business', 150000, 'Pending'),
    createData(202, '22/10/2023', 'Hoang Huy', 'None', '21/11/2023', 'International Business', 190000, 'Class Accepted'),
    createData(203, '23/10/2023', 'Hoang Huy', 'None', '26/12/2023', 'International Business', 2850000, 'Studied'),
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
export default function BasicTable() {
    return (
        <>

            {/* Search bar  */}
            <div className='container mx-auto my-24'>
                <div className="mt-16 ml-6 grid grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="searchTutor" className={classes.searchLabel}>
                            History Order
                        </label>
                        <div className={`${classes.inputSearch} block w-full rounded-md border-0 py-3 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 mt-4`}>
                            <div className="flex items-center">
                                <button className="mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                                <input
                                    type="text"
                                    name="searchOrder"
                                    id="searchOrder"
                                    autoComplete="Search"
                                    placeholder="Search orderID"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-3 ml-36  mt-16">
                        <Menu as="div" className={`relative inline-block text-left mr-6`}>
                            <div>
                                <Menu.Button className={`${classes.filter} inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2`}>
                                    Status
                                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={React.Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Pending
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Class Accepted
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Studied
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>


                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className={`${classes.filter} inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2`}>
                                    Filter
                                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={React.Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Pending
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Class Accepted
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Studied
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>

            {/* Table */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell sx={{
                                color: 'black',
                                fontFamily: 'Belanosima',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '180%'
                            }} >Student ID</TableCell>
                            <TableCell sx={{
                                color: 'black',
                                fontFamily: 'Belanosima',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '180%'
                            }} align="left">Booking date</TableCell>
                            <TableCell sx={{
                                color: 'black',
                                fontFamily: 'Belanosima',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '180%'
                            }} align="left">Customer</TableCell>
                            <TableCell sx={{
                                color: 'black',
                                fontFamily: 'Belanosima',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '180%'
                            }} align="left">Tutor</TableCell>
                            <TableCell sx={{
                                color: 'black',
                                fontFamily: 'Belanosima',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '180%'
                            }} align="left">Payment Date</TableCell>
                            <TableCell sx={{
                                color: 'black',
                                fontFamily: 'Belanosima',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '180%'
                            }} align="left">Major</TableCell>
                            <TableCell sx={{
                                color: 'black',
                                fontFamily: 'Belanosima',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '180%'
                            }} align="left">Cost</TableCell>
                            <TableCell sx={{
                                color: 'black',
                                fontFamily: 'Belanosima',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '180%'
                            }} align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow

                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{
                                    color: 'gray',
                                    fontFamily: 'Belanosima',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '180%'
                                }} component="th" scope="row">
                                    #{row.id}
                                </TableCell>
                                <TableCell sx={{
                                    color: 'gray',
                                    fontFamily: 'Belanosima',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '180%'
                                }} component="th" scope="row">
                                    {row.bookingDate}
                                </TableCell>
                                <TableCell sx={{
                                    color: 'gray',
                                    fontFamily: 'Belanosima',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '180%'
                                }} align="left">{row.customer}</TableCell>
                                <TableCell sx={{
                                    color: 'gray',
                                    fontFamily: 'Belanosima',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '180%'
                                }} align="left">{row.tutor}</TableCell>
                                <TableCell sx={{
                                    color: 'gray',
                                    fontFamily: 'Belanosima',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '180%'
                                }} align="left">{row.paymentDate}</TableCell>
                                <TableCell sx={{
                                    color: 'gray',
                                    fontFamily: 'Belanosima',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '180%'
                                }} align="left">{row.major}</TableCell>
                                <TableCell sx={{
                                    color: 'gray',
                                    fontFamily: 'Belanosima',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '180%'
                                }} align="left">{row.cost}</TableCell>
                                <TableCell sx={{
                                    color: 'gray',
                                    fontFamily: 'Belanosima',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '180%'
                                }} align="left">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}