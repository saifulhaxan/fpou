import CustomFilters from "../CustomFilters";
import CustomPagination from "../CustomPagination";

import "./style.css";

const CustomTable = (props) => {
  return (
    <>
      <CustomFilters
        filterSort={props?.filterSort}
        filterSortValue={props?.filterSortValue}
        setFilterSortValue={props?.setFilterSortValue}
        filterSortValues={props?.filterSortValues}

        filterSearch={props?.filterSearch}
        filterSearchValue={props?.filterSearchValue}
        setFilterSearchValue={props?.setFilterSearchValue}

        dateFilter={props?.dateFilter}
        filterFrom={props?.filterFrom}
        setFilterFrom={props?.setFilterFrom}
        filterTo={props?.filterTo}
        setFilterTo={props?.setFilterTo}
      />
      <div className="customTable">
        <table>
          <thead>
            <tr>
              {props?.headers.map((header) => (
                <th key={header.key}>{header.title}</th>
              ))}
            </tr>
          </thead>
          {props?.children}
        </table>
      </div>
      <CustomPagination/>
    </>
  );
};

export default CustomTable;
