import React, { useEffect, useState } from 'react';
import MaUTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { usePagination, useRowSelect, useSortBy, useTable } from 'react-table';
import Checkbox from '@mui/material/Checkbox';
import Pagination from './Pagination';
import Tooltip from './Tooltip';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, color = '', ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <Checkbox
        sx={{
          color: color ? '#fff' : 'rgba(47, 46, 46, 0.65)',
          '&.Mui-checked': {
            color: '#080D85',
          },
        }}
        ref={resolvedRef}
        {...rest}
      />
    );
  }
);

export default ({
  data,
  headers,
  toolTips,
  total,
  onChange,
  fetchData,
  doublePage,
}) => {
  const [selectedRows, setSelectedRows] = useState({});
  const [indexT, setIndexT] = useState(-1);
  const [pgCount, setPgCount] = useState(0);
  console.log(selectedRows);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns: headers,
      data,
      manualSortBy: true,
      initialState: { pageIndex: 0, pageSize: 10 },
      manualPagination: true,
      pageCount: pgCount,
      autoResetPage: false,
    },
    useSortBy,
    usePagination,
    useRowSelect,

    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox
                {...getToggleAllPageRowsSelectedProps()}
                color="#fff"
              />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  useEffect(() => {
    setSelectedRows(selectedFlatRows.map((item) => item.original.id));
  }, [setSelectedRows, selectedRowIds]);

  useEffect(() => {
    if (fetchData) fetchData({ pageIndex, pageSize });
    else onChange({ pageIndex, pageSize });
  }, [pageIndex, pageSize, onChange, fetchData]);

  useEffect(() => {
    const count = Math.ceil(total / pageSize);
    setPgCount(count);
  }, [pageSize, total]);

  return (
    <>
      <PerfectScrollbar>
        <MaUTable
          {...getTableProps()}
          sx={{
            '& .MuiTableRow-root:hover': {
              backgroundColor: '#EEEEEE',
            },
          }}
        >
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((header, idx) => (
                  <TableCell
                    key={`${idx + 1}`}
                    sx={{
                      textAlign: 'left',
                      backgroundColor: doublePage ? '#fff' : '#2F2E2E',
                      color: doublePage ? '#2F2E2E' : '#fff',
                      // backgroundColor: 'background.tableHeader',
                    }}
                  >
                    {header.render('Header')}
                  </TableCell>
                ))}
                <TableCell
                  sx={{
                    textAlign: 'center',
                    backgroundColor: doublePage ? '#fff' : '#2F2E2E',
                    color: doublePage ? '#2F2E2E' : '#fff',
                    // backgroundColor: 'background.tableHeader',
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <React.Fragment key={`${index + 1}`}>
                  <TableRow>
                    {row.cells.map((cell, ind) => (
                      <TableCell
                        key={`${ind + 1}`}
                        sx={{
                          textAlign: 'left',
                        }}
                      >
                        {cell.column.prefix}
                        <span>{cell.render('Cell')}</span>
                        {` ${cell.column.suffix || ''}`}
                      </TableCell>
                    ))}

                    <TableCell
                      sx={{
                        position: 'relative',
                        textAlign: 'left',
                      }}
                    >
                      <Tooltip
                        indexT={indexT}
                        index={index}
                        itemId={row.original.id}
                        status={row.original.status}
                        data={toolTips}
                        setIndexT={setIndexT}
                      />
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </MaUTable>
      </PerfectScrollbar>
      {total >= 10 ? (
        <Pagination
          canPreviousPage={canPreviousPage}
          pageOptions={pageOptions}
          canNextPage={canNextPage}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          pageSize={pageSize}
          pageIndex={pageIndex}
        />
      ) : (
        <></>
      )}
    </>
  );
};
