/* eslint-disable react/jsx-key */
import * as React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Box
} from "@chakra-ui/react";
import {
  TriangleDownIcon,
  TriangleUpIcon
} from "@chakra-ui/icons";
import { useTable, useSortBy, Column, Row } from "react-table";
import { CompData, CompHeaders } from "@utils/roleTypes";
import useSWR from 'swr';

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: Column<Data>[];
};

function RoleTable<Data extends object>({
  data,
  columns
}: DataTableProps<Data>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy);

  return (
    <Box p={4} width='100%'>
      <Table {...getTableProps()} variant='simple'>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
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
      accessor: "jobTitle.value",
    },
    {
      Header: "Company type",
      accessor: "companyType.value",
    },
    {
      Header: "Company Stage",
      accessor: "companyStage.value"
    },
    {
      Header: "Employment Type",
      accessor: "employmentType.value"
    },
    {
      Header: "Annual Base",
      accessor: "annualBase.value"
    },
  ];

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <RoleTable columns={columns} data={compData} />
}
