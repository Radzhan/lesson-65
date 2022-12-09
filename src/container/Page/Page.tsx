import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import Admin from '../../components/Admin/Admin';
import { Category } from '../../types';

const Page = () => {
    const { pageName } = useParams();
    const [content, setContent] = useState<Category>();

    const response = useCallback(async () => {
        const request = await axiosApi.get('/pages.json');
        const requestData = request.data;

        if (pageName !== undefined) {
            setContent(requestData[pageName])
        }
    }, [pageName])

    useEffect(() => {
        response().catch(console.error)
    }, [response])

    let card;

    if (pageName !== 'admin') {
        card = (
            <div className="card">
                <div className="card-header">
                    {content?.title}
                </div>
                <div className="card-body">
                    <p className="card-text">{content?.content}</p>
                </div>
            </div>
        )
    } else if (pageName === 'admin'){
        card = <Admin/>
    }

    return (
        <div>
            {card}
        </div>
    );
};

export default Page;