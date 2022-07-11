import * as React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Box,
  Button,
  Input,
  Select,
  HStack
} from "@chakra-ui/react";
import {
  TriangleDownIcon,
  TriangleUpIcon
} from "@chakra-ui/icons";
import { useTable, useSortBy, Column, usePagination } from "react-table";
import { CompData, CompHeaders } from "@utils/roleTypes";
import useSWR from 'swr';

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: Column<Data>[];
};

function RoleTable<Data extends object>({
  data,
  columns,
}: DataTableProps<Data>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageOptions,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    pageCount,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
    },
    useSortBy,
    usePagination,
  )

  return (
    <Box p={4} width='100%'>
      <Table {...getTableProps()} variant='simple'>
        <Thead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line react/jsx-key
                <Th
                  {...column.getHeaderProps(
                    column.getSortByToggleProps()
                  )}
                >
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              // eslint-disable-next-line react/jsx-key
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  // eslint-disable-next-line react/jsx-key
                  <Td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            )
          })}
          <Tr>
            {!data ? (
              // Use our custom loading state to show a loading indicator
              <Td colSpan={10000}>Loading...</Td>
            ) : (
              <Td colSpan={10000}>
                Showing {page.length} of ~ {pageCount * pageSize}{' '}results
              </Td>
            )}
          </Tr>
        </Tbody>
      </Table>
      <HStack paddingTop={2}>
        <Button size="xs" variant='ghost' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </Button>{' '}
        <Button size="xs" variant='ghost' onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </Button>{' '}
        <Button size="xs" variant='ghost' onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </Button>{' '}
        <Button size="xs" variant='ghost' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </Button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <Input
            type="number"
            size="xs"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <Select
          value={pageSize}
          maxWidth='300px'
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
          size="xs"
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </HStack>
    </Box >
  );
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const RoleOverview = () => {
  const { data, error } = useSWR('api/data', fetcher)
  const compData = data;
  // const compData: CompData[] = [
  //   {
  //     jobTitle: "software engineer",
  //     companyType: "Other",
  //     companyStage: "Series A",
  //     employmentType: "Full-time",
  //     remoteOrInPerson: "Remote",
  //     annualBase: "$150",
  //     additionalComp: "Equity, Bonus",
  //     equity: "unsure",
  //     tokenGrant: "none",
  //     bonus: "around $15k last year ",
  //     signOnBonus: "none",
  //     benefits: "health coverage, unlimited PTO, travel budget",
  //     outputFactor: "2",
  //     equitableFactor: "2",
  //     web3yearsOfExperience: "3-5",
  //     yearsOfExperience: "3-5",
  //     identity: "Female, LGBTQ+, Underrepresented racial/ethnic minority",
  //     demographic: "mixed race (British and Chinese)",
  //     location: "Canada",
  //     hasKids: false,
  //     comments: "research and development on many different blockchains/protocols, alternative clients, audits, consulting"
  //   }
  // ];

  // see https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table
  // to configure react-table typings

  const columns: Column<CompHeaders>[] = [
    {
      Header: "Job Title",
      accessor: "jobTitle",
    },
    {
      Header: "Company Type",
      accessor: "companyType",
    },
    {
      Header: "Company Stage",
      accessor: "companyStage"
    },
    {
      Header: "Years of Experience",
      accessor: "yearsOfExperience"
    },
    {
      Header: "Annual Base",
      accessor: "annualBase"
    },
  ];

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <RoleTable columns={columns} data={compData} />
}
