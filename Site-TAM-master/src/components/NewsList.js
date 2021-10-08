import React from 'react'
import NewsItem from './NewsItem'


const NewsList = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => {
                return (
                    <div key={task.id}>
                        <NewsItem task={task} />
                    </div>
                )
            })}


        </div>
    )
}

export default NewsList