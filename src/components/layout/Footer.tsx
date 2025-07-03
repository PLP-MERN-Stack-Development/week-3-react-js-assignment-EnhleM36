
import React from 'react';
import { CheckSquare, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <CheckSquare className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">TaskMaster</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              A powerful task management application built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#tasks" className="text-muted-foreground hover:text-foreground transition-colors">Task Manager</a></li>
              <li><a href="#api-data" className="text-muted-foreground hover:text-foreground transition-colors">API Data</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 TaskMaster. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
