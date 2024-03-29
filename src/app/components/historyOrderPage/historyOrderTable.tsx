"use client"
import React from 'react'
import { DataGrid, GridColDef, GridRenderCellParams, GridRowParams } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
// import StudentDetail from './StudentDetail';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { axiosAuth } from '@/app/lib/axious';


interface Order {
  id: string;
  summary: string;
  courseSubject: {
    course: {
      name: string
    },
    subject: {
      name: string;
      price: number
    };
  };
  quantity: number;
  study: string;
  createdAt: string;
  statusOrder: string;
  tutor: {
    firstName: string;
    lastName: string
  }
}



export default function HistoryOrderTable() {
  const getRowId = (row: Order) => row.id;
  const [order, setOrder] = useState<Order[]>([]);

  const { data: session, status } = useSession()
  const token = session?.user.accessToken;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosAuth.get(`/Order/get-list-order-by-course-and-status-by-me?statusOrder=Completed&pageNumber=0&pageSize=100`, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });

        const orderResponse: Order[] = response.data.data;
        const formatOrder = orderResponse.map((item: Order) => ({
          ...item,
          id: item.id,
          summary: item.summary,
          courseName: item.courseSubject.course.name,
          subjectName: item.courseSubject.subject.name,
          price: item.courseSubject.subject.price,
          quantity: item.quantity,
          studyDate: formatDate(item.study),
          orderDate: formatDate(item.createdAt),
          tutorName: item.tutor.firstName + " " + item.tutor.lastName
        }));
        setOrder(formatOrder);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };
    fetchData();
  }, []);


  const customCellRenderer = (params: GridRenderCellParams<Order>) => {
    const cellValue = params.value ? params.value : '';

    return (
      <div style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
        {cellValue}
      </div>
    );
  };

  const columns = [
    { field: 'courseName', headerName: 'Course Name', width: 250 },
    { field: 'subjectName', headerName: 'Subject Name', width: 200 },
    { field: 'tutorName', headerName: 'Tutor name', width: 180 },
    // { field: 'summary', headerName: 'Summary', width: 250, renderCell: customCellRenderer },
    { field: 'quantity', headerName: 'Session', width: 120 },
    { field: 'price', headerName: 'Price (VND)', width: 180 },
    { field: 'orderDate', headerName: 'Order Date', width: 200 },
    { field: 'studyDate', headerName: 'Study Date', width: 200 },
    { field: 'statusOrder', headerName: 'Status Order', width: 180 },
  ];



  return (
    <div style={{ width: '100%' }}>
      {order.length > 0 ?
        < DataGrid
          rows={order}
          columns={columns}
          getRowId={getRowId}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
          disableRowSelectionOnClick
          rowHeight={100}
          sx={{ fontFamily: "Belanosima", fontSize: "17px", backgroundColor: "white", paddingLeft: "30px" }}
        />
        :
        <div>
          <h1 className='font-[Belanosima] text-center text-3xl text-gray-500'>
            You have not ordered yet!  <Link href='/findTutor' className='ml-2 text-2xl font-regular text-gray-400 hover:text-[#6cc198] hover:underline'>Order now</Link>
          </h1>
        </div>
      }

    </div>
  );
}
