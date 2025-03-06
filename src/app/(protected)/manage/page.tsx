"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MoreHorizontal,
  Users,
  Coffee,
  ChevronRight,
  ChevronLeft,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { ManageCafes } from "@/components/manage";

// Mock data for demonstration
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
];

const mockCafes = [
  { id: 1, name: "Coffee Haven", location: "Downtown", rating: 4.5 },
  { id: 2, name: "Brew & Bean", location: "Uptown", rating: 4.2 },
  { id: 3, name: "Espresso Express", location: "Midtown", rating: 4.7 },
];

export default function ManagePage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("cafes");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{
    id: number;
    type: string;
  } | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Check if user has admin role
  useEffect(() => {
    if (session && session.user?.role !== "admin") {
      router.push("/");
    }
  }, [session, router]);

  const handleDelete = (id: number, type: string) => {
    setItemToDelete({ id, type });
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      console.log(`Deleting ${itemToDelete.type} with ID: ${itemToDelete.id}`);
      // Here you would call your API to delete the item
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex max-h-screen h-[calc(100vh-160px)]">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-primaryColor text-white shadow-md transition-all duration-300 flex flex-col",
          sidebarCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="p-4 flex items-center justify-between border-b border-coffeeBeanColor">
          {!sidebarCollapsed && (
            <h2 className="text-xl font-bold text-textPrimaryColor">
              Management
            </h2>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-textPrimaryColor hover:bg-coffeeBeanColor"
          >
            {sidebarCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
        <div className="space-y-2 p-2 flex-1">
          <Button
            variant={activeTab === "cafes" ? "default" : "ghost"}
            className={cn(
              "w-full justify-start",
              activeTab === "cafes"
                ? "bg-buttonColor text-white hover:bg-buttonHoverColor"
                : "text-textPrimaryColor hover:bg-coffeeBeanColor hover:text-buttonHoverTextLightColor",
              sidebarCollapsed && "justify-center px-2"
            )}
            onClick={() => setActiveTab("cafes")}
          >
            <Coffee className={cn("h-5 w-5", !sidebarCollapsed && "mr-2")} />
            {!sidebarCollapsed && "Cafes"}
          </Button>
          <Button
            variant={activeTab === "users" ? "default" : "ghost"}
            className={cn(
              "w-full justify-start",
              activeTab === "users"
                ? "bg-buttonColor text-white hover:bg-buttonHoverColor"
                : "text-textPrimaryColor hover:bg-coffeeBeanColor hover:text-buttonHoverTextLightColor",
              sidebarCollapsed && "justify-center px-2"
            )}
            onClick={() => setActiveTab("users")}
          >
            <Users className={cn("h-5 w-5", !sidebarCollapsed && "mr-2")} />
            {!sidebarCollapsed && "Users"}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-primaryColor">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full h-full flex flex-col bg-primaryColor py-2"
        >
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <TabsList className="md:hidden bg-primaryColor">
                <TabsTrigger
                  value="cafes"
                  className={
                    activeTab === "cafes"
                      ? "bg-buttonColor text-white"
                      : "text-textPrimaryColor"
                  }
                >
                  Cafes
                </TabsTrigger>
                <TabsTrigger
                  value="users"
                  className={
                    activeTab === "users"
                      ? "bg-buttonColor text-white"
                      : "text-textPrimaryColor"
                  }
                >
                  Users
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <div className="px-6 flex-1 overflow-auto bg-primaryColor">
            <TabsContent value="cafes" className="h-full container mx-auto">
              <ManageCafes />
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-primaryColor">
              Confirm Deletion
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this {itemToDelete?.type}? This
              action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
