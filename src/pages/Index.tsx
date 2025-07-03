
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { TaskManager } from '@/components/tasks/TaskManager';
import { ApiDataDisplay } from '@/components/api/ApiDataDisplay';

const Index = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Welcome to TaskMaster
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A powerful task management application with API integration, built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>

        {/* Task Manager Section */}
        <TaskManager />

        {/* API Data Section */}
        <ApiDataDisplay />
      </div>
    </Layout>
  );
};

export default Index;
