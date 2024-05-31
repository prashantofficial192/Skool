import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./Footer.css"
import "./responsive.css"

export default function BasicPagination() {
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
                            <li><a href="/">Community</a></li>
                            <li><a href="/">Affiliates</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Privacy</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    );
}





