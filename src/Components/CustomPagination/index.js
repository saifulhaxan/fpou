import { Pagination } from "react-bootstrap";

import "./style.css";

const CustomPagination = () => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <>
            <div className="customPagination">
                <div className="row align-items-baseline">
                    <div className="col-lg-6">
                        <p className="paginationText">1-5 of 100</p>
                    </div>
                    <div className="col-lg-6">
                        <Pagination>
                            <Pagination.Prev />
                            {items}
                            <Pagination.Next />
                        </Pagination>
                    </div>
                </div>
            </div>
        </>)
}

export default CustomPagination