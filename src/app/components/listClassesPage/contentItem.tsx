import React from 'react'
import classes from './content.module.css'
export default function ContentItem({ title, content }: { title: any, content: any }) {
    return (
        <div className={classes.content_item}>
            <span className={classes.title_item}>{title}:</span>
            <span
                style={content === 'On Progress' ? { color: 'blue', fontWeight: '600' } : { color: 'black' }}
                className={classes.content}>{content}</span>
        </div>
    )
}
