import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@aws-amplify/ui-react';
import { TableValues } from '@/amplify-lms/types/types';

export interface ItemsTableProps {
  tableName: string;
  data: TableValues[];
}

export default function ItemsTable({ tableName, data }: ItemsTableProps) {
  return (
    <Table caption={tableName} width="100%" margin="0 auto">
      <TableHead>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Value</TableCell>
          <TableCell as="th">Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, key) => (
          <TableRow key={key}>
            <TableCell>{item?.name}</TableCell>
            <TableCell>{item?.value}</TableCell>
            <TableCell>
              {Intl.DateTimeFormat('en-us').format(new Date(item?.createdAt!))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
