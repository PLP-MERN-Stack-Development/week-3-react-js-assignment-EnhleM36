
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { ApiDataDisplay } from '@/components/api/ApiDataDisplay';

const ApiExplorer = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ApiDataDisplay />
      </div>
    </Layout>
  );
};

export default ApiExplorer;
