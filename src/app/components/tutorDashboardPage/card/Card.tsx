"use client"
import React from 'react'
import ShowChartIcon from '@mui/icons-material/ShowChart';
import classes from './Card.module.css'


interface Item {
    total: number;
    title: string;
    label: string;
}

interface CardProps {
    item: Item;
}
const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <>
        <div className={classes.cardItem}>
            <p>
                {item.title}
                <div className={classes.itemChart}>
                    <ShowChartIcon />
                    100%
                </div>
            </p>
            <p>{item.total.toLocaleString()}</p>
            <p>{item.label}</p>
        </div>
        </>
    );
}

export default Card;