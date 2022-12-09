import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { ApiPage, Category } from '../../types';

const Admin = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<Category>({
        title: '',
        content: '',
    })
    const [allPage, setAllPage] = useState<ApiPage>()
    const [namePage, setNamePage] = useState('')

    const customerChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target

        setPage(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const request = async (value: string) => {
        const getPage = await axiosApi.get('/pages.json')
        const response = getPage.data[value]

        setPage(response)
        setAllPage(getPage.data)
        setNamePage(value)
    }

    const onFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const newPage = {
            ...allPage,
            [namePage]: page
        };

        try {
            await axiosApi.put('/pages.json', newPage)
        } finally {
            navigate('/pages/' + namePage)
        }
    };

    return (
        <div onSubmit={onFormSubmit}>
            <form>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select name="category" id="category" required onChange={(e) => request(e.target.value)}>
                        <option  value="">Chouse the page</option>
                        <option value="about">About</option>
                        <option value="history">History</option>
                        <option value="quotes">Quotes</option>
                        <option value="news">News</option>
                        <option value="contacts">Contacts</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        name='title'
                        placeholder="title"
                        required
                        value={page.title}
                        onChange={customerChanged}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Quote text</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        name='content'
                        rows={3}
                        value={page.content}
                        onChange={customerChanged}
                    ></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Save</button>
            </form>
        </div>
    );
};

export default Admin;