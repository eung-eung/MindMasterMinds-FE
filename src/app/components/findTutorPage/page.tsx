'use client'
import React, { useEffect, useRef } from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import classes from './page.module.css'
import { useTheme } from '@mui/material/styles';
import Footer from '../../components/footer/footer'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'
import { FormControl, Select, SelectChangeEvent } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'react-toastify/dist/ReactToastify.css';
import { Major } from '@/app/types/Major'
import { Subject } from '@/app/types/Subject'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import dayjs from 'dayjs'
import { Order } from '@/app/types/Order'
import CircularLoading from '../circularProgress/CircularProgress'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: '100',

        },
    },
};

function getStyles(name: any, personName: any, theme: any) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function FindTutorPage() {
    const { data: session, status } = useSession()
    const theme = useTheme();
    const [isNormal, setIsNormal] = React.useState<boolean>(true)
    const [isLoading, setLoading] = React.useState<boolean>(true)
    const [isCalculateFee, setIscalculateFee] = React.useState<boolean>(false)
    const [majorName, setMajorName] = React.useState('');
    const [majorList, setMajorList] = React.useState([])
    const [subjectName, setSubjectName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [feeNumber, setFeeNumber] = React.useState(0)
    const [subjectList, setSubjectList] = React.useState([])
    const [date, setDate] = React.useState(dayjs(new Date().setDate(new Date().getDate() + 1)))
    const [lessons, setLessons] = React.useState(1)
    const description = useRef<HTMLTextAreaElement>(null)
    const summary = useRef<HTMLInputElement>(null)
    const phone = useRef<HTMLInputElement>(null)
    const axiosAuth = useAxiosAuth()

    const getListMajors = async () => {
        const response = await axiosAuth.get('/Course?pageNumber=0&pageSize=100')
        setMajorList(response.data.data)
    }
    const getListSubjects = async (id: string) => {
        setIscalculateFee(true)
        const response = await axiosAuth.get(`/Subject/get-subject-by-courseId/${id}?pageNumber=0&pageSize=30`)
        setSubjectName(response.data.data[0].id)
        setIscalculateFee(false)
        setSubjectList(response.data.data)
    }

    const regexPhoneNumber = (phone: any) => {
        const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        return phone.match(regexPhoneNumber) ? true : false;
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value)
    }

    const getCourseSubjectId = async () => {
        const response = await axiosAuth.post('/CourseSubject/get-course-subject', {
            courseId: majorName,
            subjectId: subjectName
        })
        return response.data.id
    }
    const getTuitionFees = async () => {
        if (subjectName) {
            const courseSubjectId = await getCourseSubjectId()
            const fee = await axiosAuth.post('/Order/get-total-tuition-fee', {
                courseSubjectId,
                quantity: lessons,
                stateInfo: !isNormal
            })
            setFeeNumber(fee.data.message)
        }
    }

    useEffect(() => {
        getTuitionFees()
    }, [subjectName, lessons, isNormal])

    useEffect(() => {
        setFeeNumber(0)
    }, [majorName])

    const handleSubmitPost = async (e: React.FormEvent) => {
        e.preventDefault()
        const order = {} as Order
        if (
            majorName &&
            subjectName &&
            description.current &&
            description.current.value.trim() &&
            summary.current &&
            summary.current.value.trim() &&
            phone.current &&
            regexPhoneNumber(phone.current?.value)
        ) {
            const courseSubjectId = await getCourseSubjectId()
            order.courseSubjectId = courseSubjectId
            order.description = description.current.value.trim()
            order.summary = summary.current.value.trim()
            order.quantity = lessons
            order.study = date.toDate()
            order.stateInfo = !isNormal
            order.phone = phone.current.value.trim()
            try {
                // const response = await axiosAuth.post('/Order/missing-order-by-student', '5AE02E33-2C97-4562-B246-85113EA4CC54')
                // console.log('money: ', response);

                const response = await axiosAuth.post('/Order', {
                    summary: order.summary,
                    courseSubjectId: order.courseSubjectId,
                    stateInfo: order.stateInfo,
                    phone: order.phone,
                    description: order.description,
                    quantity: order.quantity,
                    study: order.study
                })
                toast.success('Posted successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                redirect('/listClasses')
            } catch (error: any) {
                toast.error(error.response.data.Message, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }

        } else {
            toast.error('Please fill all fields', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        }


    }
    const handleDateChange = (value: any, context: any) => {
        const currentDate = new Date().getTime()
        const pickedDate = new Date(value.$d).getTime()
        if (currentDate > pickedDate) {
            toast.error('You cannot choose a past date', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setDate(dayjs(new Date().setDate(new Date().getDate() + 1)))
        }
    }
    const handleMajorChange = (event: SelectChangeEvent) => {
        const {
            target: { value },
        } = event;

        getListSubjects(value)
        setMajorName(
            value
        );
    };
    const handleSubjectChange = (event: SelectChangeEvent) => {
        const {
            target: { value },
        } = event;
        setSubjectName(
            value
        );
    };

    useEffect(() => {
        getListMajors()
    }, [])

    React.useEffect(() => {
        if (status !== 'loading') setLoading(false)
        if (!session && status === 'unauthenticated') {
            redirect('/signIn')
        }
    }, [status])
    return (
        <div>
            {isLoading ? <LoadingTheme /> :
                <>
                    {/* Header */}
                    <Header title='Find A Tutor' isHome={false} />
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce}
                    />
                    {/* Form */}
                    <div className='container mx-auto my-24 bg-white'>
                        <form onSubmit={handleSubmitPost}>
                            <div className="space-y-16">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <p className={`mt-4 ${classes.introLine}`}>
                                        To find a tutor quickly. You have to complete the items in the study request post below:
                                    </p>

                                    <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-6">
                                        <div className="col-span-full">
                                            <label htmlFor="summary" className={classes.label}>
                                                Summary of tutor request (1 sentence, maximum 100 characters):
                                            </label>
                                            <div className="mt-4">
                                                <input
                                                    ref={summary}
                                                    type="text"
                                                    name="summary"
                                                    id="summary"
                                                    autoComplete="summary"
                                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Example: Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes."
                                                    style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="phone" className={classes.label}>
                                                Contact Phone:
                                            </label>
                                            <div className="mt-4">
                                                <input
                                                    value={phoneNumber}
                                                    onChange={handlePhoneChange}
                                                    ref={phone}
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    autoComplete="Phone"
                                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Example: 0912345678"
                                                    style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                />
                                            </div>
                                        </div>



                                        <div className="sm:col-span-full">
                                            <label htmlFor="describe" className={classes.label}>
                                                Describe the tutoring request in detail:
                                            </label>
                                            <div className="mt-4">
                                                <textarea
                                                    id="describe"
                                                    name="describe"
                                                    rows={3}
                                                    ref={description}
                                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    defaultValue={''}
                                                    placeholder="Describe in detail the content you want to learn here..."
                                                    style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <div className="mt-4">
                                                <FormControl sx={{ width: '100%' }}>
                                                    <InputLabel id="single-select-major">Major</InputLabel>
                                                    <Select
                                                        labelId="single-select-major"
                                                        id="demo-multiple-name"
                                                        value={majorName}
                                                        onChange={handleMajorChange}
                                                        input={<OutlinedInput label="Name" />}
                                                        MenuProps={MenuProps}
                                                    >
                                                        {majorList.map((major: Major) => (
                                                            <MenuItem
                                                                key={major.id}
                                                                value={major.id}
                                                                style={getStyles(major.name, majorName, theme)}
                                                            >
                                                                {major.code}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3 mt-4">
                                            <FormControl sx={{ width: '100%' }}>
                                                <InputLabel id="single-select-major">
                                                    {majorName ? 'Subject' : 'Please select major'}
                                                </InputLabel>
                                                <Select
                                                    disabled={majorName ? false : true}
                                                    labelId="single-select-major"
                                                    id="demo-multiple-name"
                                                    value={subjectName}
                                                    onChange={handleSubjectChange}
                                                    input={<OutlinedInput label="Name" />}
                                                    MenuProps={MenuProps}
                                                >
                                                    {subjectList.map((subject: Subject) => (
                                                        <MenuItem
                                                            key={subject.id}
                                                            value={subject.id}
                                                            style={getStyles(subject.name, subjectName, theme)}
                                                        >
                                                            {subject.code}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="estimated" className={classes.label}>
                                                Estimated tuition fees
                                            </label>
                                            <div className="mt-4 flex">
                                                {
                                                    isCalculateFee
                                                        ?
                                                        <CircularLoading />
                                                        :
                                                        <input
                                                            disabled
                                                            name="estimated"
                                                            id="estimated"
                                                            value={feeNumber.toLocaleString() + ' ' + 'VND'}
                                                            autoComplete="Estimated"
                                                            className="block w-full rounded-md border-0 py-3 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            placeholder="Click button to see fee"
                                                            style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                        />
                                                }

                                            </div>
                                        </div>

                                        <fieldset>
                                            <label className={classes.label}>Status</label>
                                            <div className="mt-8 flex gap-x-8">
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        onChange={() => setIsNormal(true)}
                                                        checked={isNormal && true}
                                                        id="normal"
                                                        name="normal"
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"

                                                    />
                                                    <label htmlFor="normal" className={classes.typography}>
                                                        Normal
                                                    </label>

                                                </div>
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        onChange={() => setIsNormal(false)}
                                                        checked={isNormal ? false : true}
                                                        id="urgent"
                                                        name="urgent"
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <label htmlFor="urgent" className={classes.typography}>
                                                        Urgent
                                                    </label>
                                                </div>

                                            </div>
                                        </fieldset>
                                        <fieldset className="sm:col-span-full">
                                            <legend className={`${classes.label} text-sm font-semibold leading-6 text-gray-900`}>Number of lessons per week: </legend>
                                            <div className="mt-4 flex gap-x-24">
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="1Session"
                                                        name="1Session"
                                                        type="radio"
                                                        checked={lessons === 1}
                                                        onChange={() => setLessons(1)}
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                        style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                    />
                                                    <label htmlFor="1Session" className={classes.typography}>
                                                        <span className="mr-2">1</span><span>Session</span>
                                                    </label>

                                                </div>
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="2Session"
                                                        name="2Session"
                                                        type="radio"
                                                        checked={lessons === 2}
                                                        onChange={() => setLessons(2)}
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <label htmlFor="2Session" className={classes.typography}>
                                                        <span className="mr-2">2</span><span>Session</span>
                                                    </label>
                                                </div>

                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="3Session"
                                                        name="3Session"
                                                        type="radio"
                                                        checked={lessons === 3}
                                                        onChange={() => setLessons(3)}
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <label htmlFor="3Session" className={classes.typography}>
                                                        <span className="mr-2">3</span><span>Session</span>
                                                    </label>
                                                </div>

                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="4Session"
                                                        name="4Session"
                                                        checked={lessons === 4}
                                                        onChange={() => setLessons(4)}
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <label htmlFor="4Session" className={classes.typography}>
                                                        <span className="mr-2">4</span><span>Session</span>
                                                    </label>
                                                </div>

                                            </div>
                                        </fieldset>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="studentCode" className={classes.label}>
                                                Expected date of study:
                                            </label>
                                            <div className="mt-4">
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        value={date}
                                                        format='YYYY-MM-DD'
                                                        onChange={handleDateChange
                                                        }
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex direction-1 items-center justify-center gap-x-6">

                                <button
                                    type="submit"
                                    className={classes.formButton}
                                >
                                    Post Request
                                </button>

                            </div>

                        </form>
                    </div>

                    {/* Footer */}
                    <Footer />
                </>
            }
        </div>
    )
}
