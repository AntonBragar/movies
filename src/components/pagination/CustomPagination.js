import React from 'react';
import {createTheme, Pagination, ThemeProvider} from "@mui/material";
import {PaginationWrapper} from "./PaginationStyled";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

// const CustomPagination = ({setPage}) => {
    const CustomPagination = ({setPage, numOfPages}) => {
    const handlePageChange = (page) => {
        setPage(page)
        window.scroll(0, 0)
    }
    return (
        <PaginationWrapper>
            <ThemeProvider theme={darkTheme}>
                <Pagination count={numOfPages}
                            onChange={(e) => handlePageChange(e.target.textContent)}
                            hideNextButton
                            hidePrevButton
                            color="primary"
                />
            </ThemeProvider>
        </PaginationWrapper>
    );
};

export default CustomPagination;