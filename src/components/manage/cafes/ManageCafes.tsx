"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  MoreHorizontal,
  Search,
  Trash2,
} from "lucide-react";
import { Cafe } from "@/schemas/cafe.schema";
import { useCafes } from "@/hooks/useCafes";
import ModalCafeEdit from "./modal-cafe-edit/ModalCafeEdit";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function ManageCafes() {
  const { cafes, isLoading } = useCafes();
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [cafeToDelete, setCafeToDelete] = useState<{
    id: string;
    name: string;
  } | null>(null);

  // Add state for edit dialog

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
      setPagination({ ...pagination, pageIndex: 0 }); // Reset to first page on new search
    },
    [pagination]
  );

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLElement>,
    row: Cafe
  ) => {
    event.stopPropagation(); // Prevent unwanted event bubbling
    setCafeToDelete({
      id: row.id?.toString() || "",
      name: row.cafeDetails.title,
    });
    setDeleteDialogOpen(true);
  };

  const confirmDelete = useCallback(() => {
    if (cafeToDelete) {
      // Add your delete logic here
      setDeleteDialogOpen(false);
      setCafeToDelete(null);
    }
  }, [cafeToDelete]);

  const columns = useMemo<ColumnDef<Cafe>[]>(
    () => [
      {
        accessorKey: "cafeDetails.title",
        header: "Name",
        cell: ({ getValue }) => (
          <div className="font-medium">{getValue() as string}</div>
        ),
      },
      {
        accessorKey: "cafeDetails.cafeLocation",
        header: "Location",
        cell: ({ getValue }) => {
          const location = getValue() as {
            houseNumber: string;
            street: string;
            district: string;
            city: string;
          };
          return (
            <div>
              <span className="text-sm text-slate-200">
                {location.houseNumber},{" "}
              </span>
              <span className="text-sm text-slate-200">
                {location.street},{" "}
              </span>
              <span className="text-sm text-slate-200">
                Quận {location.district},{" "}
              </span>
              <span className="text-sm text-slate-200">{location.city}</span>
            </div>
          );
        },
      },
      {
        accessorKey: "cafeDetails.cafeOperation",
        header: "Operation Time",
        cell: ({ getValue }) => {
          const operation = getValue() as {
            openingTime: string;
            closingTime: string;
          };
          return (
            <span className="text-sm text-slate-200">
              {operation.openingTime} - {operation.closingTime}
            </span>
          );
        },
      },
      {
        accessorKey: "cafeDetails.cafeOperation.openingDay",
        header: "Days Open",
        cell: ({ getValue }) => {
          const days = getValue() as string[];
          return (
            <span className="text-sm text-slate-200">{days.join(", ")}</span>
          );
        },
      },
      {
        id: "reviews",
        header: "Total Reviews",
        accessorFn: (row) => {
          const percentage = Math.floor(
            (row.totalLike / (row.totalLike + row.totalDislike)) * 100
          );
          return percentage;
        },
        cell: ({ getValue }) => (
          <span className="text-sm text-slate-200">
            {getValue() as number}%
          </span>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex justify-end gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer group-hover:text-primaryColor">
                    <ModalCafeEdit cafe={row.original} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit product</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild className="">
                  <div className="group-hover:text-primaryColor">
                    {/* Delete Confirmation Dialog */}
                    <Dialog
                      open={deleteDialogOpen}
                      onOpenChange={setDeleteDialogOpen}
                    >
                      <DialogTrigger>
                        <Button
                          className="hover:bg-primaryColor hover:text-slate-200"
                          variant="outline"
                          size="icon"
                          // onClick={() => handleDeleteProduct(row.original.id!)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md bg-primaryColor">
                        <DialogHeader>
                          <DialogTitle className="text-primaryColor">
                            Confirm Deletion
                          </DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete {cafeToDelete?.name}
                            ? This action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="sm:justify-end gap-2 mt-4">
                          <Button
                            variant="outline"
                            onClick={() => setDeleteDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button variant="destructive" onClick={confirmDelete}>
                            Delete
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete product</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="group-hover:text-primaryColor">
                    <Link href={`/cafes/${row.original.id}`}>
                      <Button
                        className="hover:bg-primaryColor hover:text-slate-200"
                        variant="outline"
                        size="icon"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View product details</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ),
      },
    ],
    []
  );

  const data = useMemo(() => cafes || [], [cafes]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination,
      globalFilter: searchTerm,
    },
    onPaginationChange: setPagination,
    manualPagination: false,
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-buttonColor">Manage Cafes</h1>
      </div>

      <div className="flex items-center border rounded-md px-3 max-w-sm border-buttonColor hover:border-buttonHoverTextLightColor focus:border-buttonHoverTextLightColor">
        <Search className="h-5 w-5 text-slate-200 mr-2" />
        <Input
          placeholder="Search cafes..."
          value={searchTerm}
          onChange={handleSearch}
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 text-slate-200"
        />
      </div>

      <div className="rounded-md border">
        <Table className="overflow-auto">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="text-xl hover:bg-transparent"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-slate-200">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-buttonHoverColor hover:text-white group"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-6 text-slate-200"
                >
                  No cafes found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {table.getPageCount() > 1 && (
        <div className="flex items-center justify-end gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-slate-200 border-slate-200 bg-primaryColor"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(
            (page) => (
              <Button
                key={page}
                variant={
                  table.getState().pagination.pageIndex === page - 1
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => table.setPageIndex(page - 1)}
                className={
                  table.getState().pagination.pageIndex === page - 1
                    ? "bg-buttonColor text-white"
                    : "text-slate-200 border-slate-200 bg-primaryColor"
                }
              >
                {page}
              </Button>
            )
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-slate-200 border-slate-200 bg-primaryColor"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
