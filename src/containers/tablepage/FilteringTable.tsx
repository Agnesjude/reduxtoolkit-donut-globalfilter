import React, { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import ApexDonut from "../doughnutchart/ApexDonut";
import BreadcrumbsNavbar from "../breadcrumbsnav/BreadcrumbsNav";
import { GlobalFilter } from "./GlobalFilter";
import Donutdata1 from "../doughnutchart/Donutdata1.json";
import Donutdata2 from "../doughnutchart/Donutdata2.json";
import Donutdata3 from "../doughnutchart/Donutdata3.json";
import "./table.css";
import "./donut.css";


export const FilteringTable = ({ columns, data }: { columns: any; data: any;}) => {
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    setGlobalFilter,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter }= state;

  return (
    <>
        <div className='Donutdiv'>
                <div>
                    <span>
                        <h2>Case Type</h2>
                        <ApexDonut filter={globalFilter} setFilter={setGlobalFilter} data={Donutdata1}/>
                        </span>
                </div>
                <div>
                    <span>
                    <h2>CSU RP</h2>
                        <ApexDonut filter={globalFilter} setFilter={setGlobalFilter} data={Donutdata2}/>
                        </span>
                </div>
                <div>
                    <span>
                    <h2>Case Status</h2>
                        <ApexDonut filter={globalFilter} setFilter={setGlobalFilter} data={Donutdata3}/>
                        </span>
                </div>
        </div>
        
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row:any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell:any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="paginated">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
