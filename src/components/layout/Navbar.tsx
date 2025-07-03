
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { CheckSquare, Sun, Moon, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onMobileMenuToggle?: () => void;
}

export function Navbar({ onMobileMenuToggle }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <CheckSquare className="h-8 w-8 text-primary" />
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              TaskCommander
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-6">
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Home
              </Link>
              <Link to="/api-explorer" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                API Explorer
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            
            <Button
              variant="secondary"
              size="sm"
              className="md:hidden p-2"
              onClick={onMobileMenuToggle}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
