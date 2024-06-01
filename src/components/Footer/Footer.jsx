import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css"
import "./responsive.css"
import Ellipsis from '../Ellipsis/Ellipsis';
import Affiliate from '../Affiliate/Affiliate';

export default function BasicPagination() {
    const navigate = useNavigate();
    const [isEllipsisOpen, setIsEllipsisOpen] = useState(false)

    const handleEllipsisClick = (event) => {
        event.preventDefault();
        setIsEllipsisOpen(!isEllipsisOpen)
    }
    return (
        <>
            <footer>
                <div className="pagination">
                    <Stack spacing={2}>
                        <Pagination count={10} color="primary" />
                    </Stack>
                </div>
                <div className="footer-links">
                    <nav>
                        <ul>
                            <li><a>Community</a></li>
                            <li><a onClick={() => navigate('/affiliate')}>Affiliates</a></li>
                            <li><a onClick={() => navigate('/career')} >Careers</a></li>
                            <li><a onClick={() => navigate('/privacy')}>Privacy</a></li>
                            <li><a onClick={handleEllipsisClick}><FontAwesomeIcon icon={faEllipsis} />
                                {isEllipsisOpen && <Ellipsis />}</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    );
}





