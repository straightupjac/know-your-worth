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
  HStack,
  Text,
  VStack,
  Center,
  InputLeftAddon,
  InputGroup,
  IconButton,
  SimpleGrid
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
  TriangleDownIcon,
  TriangleUpIcon
} from "@chakra-ui/icons";
import { useTable, useSortBy, Column, usePagination, useExpanded } from "react-table";
import { CompHeaders } from "@utils/roleTypes";
import useSWR from 'swr';
import { useMemo, useState } from "react";
import Fuse from 'fuse.js';
import { HasKidsChip, IdentityChip, RaceChip } from "./RoleTableChips";


export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: Column<Data>[];
};

export const TableRow = ({ row, prepareRow }: { row: any, prepareRow: any }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded((expandedVal) => !expandedVal);
  };
  prepareRow(row);

  return (<>
    <Tr {...row.getRowProps()} verticalAlign="middle">
      {row.cells.map((cell: any, id: any) => (
        <Td key={id} {...cell.getCellProps()}>
          {cell.render('Cell')}
        </Td>
      ))}
      {expanded ?
        <Td>
          <IconButton onClick={handleExpand} size="xs" aria-label={"chevron down to expand and see more categories"}>
            <ChevronDownIcon />
          </IconButton>
        </Td> :
        <Td>
          <IconButton onClick={handleExpand} size="xs" aria-label={"chevron right to expand and see more categories"}>
            <ChevronRightIcon />
          </IconButton>
        </Td>}
    </Tr>
    {expanded &&
      <Tr>
        <Td colSpan={1000} background="gray.50" borderRadius='0px 0px 10px 10px'>
          <SimpleGrid columns={[1, 2, 2]} width="100%">
            <VStack justifyContent="flex-start" alignItems="start" width="100%" gap={2}>
              <HStack gap={2}>
                {row.original.item.identity && row.original.item.identity.map(
                  (identity: string, idx: string) => <IdentityChip key={idx} label={identity} />
                )}
                {row.original.item.hasKids && <HasKidsChip />}
              </HStack>
              <HStack gap={2}>
                {row.original.item.race && row.original.item.race.map(
                  (race: string, idx: string) => <RaceChip key={idx} label={race} />
                )}
              </HStack>
              {(row.original.item.benefits && row.original.item.benefits.length > 0) &&
                <Text color="gray.600">
                  Benefits
                </Text>}
              <HStack gap={2}>
                {row.original.item.benefits && row.original.item.benefits.map(
                  (benefit: string, idx: string) => <Text key={idx}>{benefit}</Text>
                )}
              </HStack>
            </VStack>
            <Box justifyContent='end'>
              <VStack gap={2} width='300px'>
                {row.original.item.web3yearsOfExperience &&
                  <HStack width='100%' textAlign="start" justifyContent='space-between'>
                    <Text color="blackAlpha.700">
                      Web3 Years of Experience
                    </Text>
                    <Text>
                      {row.original.item.web3yearsOfExperience}
                    </Text>
                  </HStack>}
                {row.original.item.equity &&
                  <HStack width='100%' textAlign="start" justifyContent='space-between'>
                    <Text color="blackAlpha.700">
                      Equity
                    </Text>
                    <Text>
                      {row.original.item.equity}
                    </Text>
                  </HStack>}
                {row.original.item.tokenGrant &&
                  <HStack width='100%' textAlign="start" justifyContent='space-between'>
                    <Text color="blackAlpha.700">
                      Token Grant
                    </Text>
                    <Text>
                      {row.original.item.tokenGrant}
                    </Text>
                  </HStack>}
                {row.original.item.bonus &&
                  <HStack width='100%' textAlign="start" justifyContent='space-between'>
                    <Text color="blackAlpha.700">
                      Annual Bonus
                    </Text>
                    <Text>
                      {row.original.item.bonus}
                    </Text>
                  </HStack>}
                {row.original.item.signOnBonus &&
                  <HStack width='100%' textAlign="start" justifyContent='space-between'>
                    <Text color="blackAlpha.700">
                      Sign On Bonus
                    </Text>
                    <Text>
                      {row.original.item.signOnBonus}
                    </Text>
                  </HStack>}
              </VStack>
            </Box>
          </SimpleGrid>
        </Td>
      </Tr>
    }
  </>
  )
}

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
    useExpanded,
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
              <Th
              >
                <chakra.span pl="4" />
              </Th>
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => <TableRow key={i} row={row} prepareRow={prepareRow} />)}
        </Tbody>
      </Table>
      {/* Pagination */}
      <HStack paddingTop={2}>
        {!data ? (
          <Text>Loading...</Text>
        ) : (
          <Text> Showing {page.length} of ~ {pageCount * pageSize}{' '}results</Text>
        )}
      </HStack>
      <HStack paddingTop={2} width="100%">
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
  const { data: airtableData, error } = useSWR('api/data', fetcher);
  console.log(airtableData);
  const [search, setSearch] = useState('');

  const options = {
    includeScore: true,
    threshold: 0.4,
    keys: ['remoteOrInPerson', 'jobTitle', 'identity', 'race', 'companyType', 'benefits', 'companyStage', 'location']
  }

  const fuse = useMemo(() => new Fuse(airtableData, options),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [airtableData]);

  const compData = useMemo(() => {
    if (!airtableData) { return [] };
    if (!search) { return airtableData.map((dataPoint: any) => { return { item: dataPoint } }) }
    return fuse.search(search);
  }, [airtableData, fuse, search]);


  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const columns: Column<CompHeaders>[] = [
    {
      Header: "Job Title",
      accessor: "jobTitle",
      Cell: ({ row }: { row: any }) => {
        return (
          <VStack textAlign="start" align="start" width="100%">
            <Text>
              {row.original.item.jobTitle}
            </Text>
            <Text color="gray" fontStyle="italic">
              {row.original.item.location}
            </Text>
          </VStack>
        )
      },
    },
    {
      Header: "Company Type",
      accessor: "companyType",
      Cell: ({ row }: { row: any }) => {
        return (
          <Box>
            {row.original.item.companyType}
          </Box>
        )
      },
    },
    {
      Header: "Company Stage",
      accessor: "companyStage",
      Cell: ({ row }: { row: any }) => {
        return (
          <Box>
            {row.original.item.companyStage}
          </Box>
        )
      },
    },
    {
      Header: "Years of Experience",
      accessor: "yearsOfExperience",
      Cell: ({ row }: { row: any }) => {
        return (
          <Box>
            {row.original.item.yearsOfExperience}
          </Box>
        )
      },
    },
    {
      Header: "Annual Base (USD)",
      accessor: "annualBase",
      Cell: ({ row }: { row: any }) => {
        const [expanded, setExpanded] = useState(false);
        const handleExpand = () => {
          setExpanded((expandedVal) => !expandedVal);
        };
        return (
          <Text>${row.original.item.annualBase.toLocaleString()}</Text>
        )
      },
    },
  ];

  if (error) return (
    <Box>
      <Center>
        Failed to load
      </Center>
    </Box>
  )
  if (!compData) return (
    <Box>
      <Center>
        loading...
      </Center>
    </Box>)
  return (
    <VStack gap={2}>
      <InputGroup>
        <InputLeftAddon>
          <SearchIcon />
        </InputLeftAddon>
        <Input id="search" type="text" placeholder="Search" onChange={handleSearch} />
      </InputGroup>
      <RoleTable columns={columns} data={compData} />
    </VStack>
  )
}
