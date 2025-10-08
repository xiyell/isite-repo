"use client";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import NextLink from "next/link";
import { Home, Settings, BarChart2, User, FileText } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen text-white">
      {/* Sidebar */}
      <aside className="w-64 hidden sm:flex flex-col border-r border-white/10 p-4">
        <h2 className="text-xl mb-6">My Dashboard</h2>

        <nav className="flex flex-col gap-3">
          <NextLink href="#" className="flex items-center gap-3 hover:text-violet-900 transition">
            <Home size={18} /> <span>Home</span>
          </NextLink>

          <NextLink href="#" className="flex items-center gap-3 hover:text-violet-900 transition">
            <BarChart2 size={18} /> <span>Analytics</span>
          </NextLink>

          <NextLink href="#" className="flex items-center gap-3 hover:text-violet-900 transition">
            <User size={18} /> <span>Profile</span>
          </NextLink>

          <NextLink href="#" className="flex items-center gap-3 hover:text-violet-900 transition">
            <FileText size={18} /> <span>Documents</span>
          </NextLink>

          <NextLink href="#" className="flex items-center gap-3 hover:text-violet-900 transition">
            <Settings size={18} /> <span>Settings</span>
          </NextLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
       
        {/* Content Area */}
        <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white/5 border border-white/10 backdrop-blur-md">
            <CardBody>
              <h3 className="text-lg mb-2">Card Title</h3>
              <p className="text-sm text-gray-400">placeholder</p>
            </CardBody>
          </Card>

          <Card className="bg-white/5 border border-white/10 backdrop-blur-md">
            <CardBody>
              <h3 className="text-lg mb-2">Statistics</h3>
              <p className="text-sm text-gray-400">Statistics</p>
            </CardBody>
          </Card>

          <Card className="bg-white/5 border border-white/10 backdrop-blur-md">
            <CardBody>
              <h3 className="text-lg mb-2">Recent Activity</h3>
              <p className="text-sm text-gray-400">Logs</p>
            </CardBody>
          </Card>
        </div>

        {/* Documents Section */}
        <section className="p-6">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <FileText size={20} /> Documents
          </h2>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/5 border border-white/10 backdrop-blur-md hover:border-violet-500 transition">
              <CardBody>
                <h3 className="text-md mb-2">Project Plan.pdf</h3>
                <p className="text-sm text-gray-400">Uploaded: Oct 8, 2025</p>
              </CardBody>
            </Card>

            <Card className="bg-white/5 border border-white/10 backdrop-blur-md hover:border-violet-500 transition">
              <CardBody>
                <h3 className="text-md mb-2">Budget.xlsx</h3>
                <p className="text-sm text-gray-400">Uploaded: Oct 3, 2025</p>
              </CardBody>
            </Card>

            <Card className="bg-white/5 border border-white/10 backdrop-blur-md hover:border-violet-500 transition">
              <CardBody>
                <h3 className="text-md mb-2">Meeting Notes.docx</h3>
                <p className="text-sm text-gray-400">Uploaded: Sept 30, 2025</p>
              </CardBody>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
