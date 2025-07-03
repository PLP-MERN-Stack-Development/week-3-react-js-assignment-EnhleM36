
import React, { useState, useMemo } from 'react';
import { useApi } from '@/hooks/useApi';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const POSTS_PER_PAGE = 6;

export function ApiDataDisplay() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { data: posts, loading, error } = useApi<Post[]>('https://jsonplaceholder.typicode.com/posts', searchQuery);

  // Pagination logic
  const totalPosts = posts?.length || 0;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts?.slice(startIndex, endIndex) || [];

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('api-data')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-6" id="api-data">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">API Data Explorer</CardTitle>
          <p className="text-muted-foreground">
            Explore posts fetched from JSONPlaceholder API with search and pagination.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search posts by title or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-muted rounded w-full mb-1"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <Card className="border-destructive">
              <CardContent className="p-6 text-center">
                <p className="text-destructive font-medium">Error loading posts</p>
                <p className="text-muted-foreground text-sm mt-1">{error}</p>
              </CardContent>
            </Card>
          )}

          {/* Posts Grid */}
          {!loading && !error && (
            <>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Showing {startIndex + 1}-{Math.min(endIndex, totalPosts)} of {totalPosts} posts
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
                {totalPages > 1 && (
                  <p className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </p>
                )}
              </div>

              {currentPosts.length === 0 && searchQuery ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">
                      No posts found matching "{searchQuery}". Try a different search term.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentPosts.map((post) => (
                    <Card key={post.id} className="fade-in task-card">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-foreground line-clamp-2 flex-1">
                            {post.title}
                          </h3>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full ml-2 flex-shrink-0">
                            #{post.id}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
                          {post.body}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>User {post.userId}</span>
                          <span>{post.body.length} chars</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = i + 1;
                    const actualPage = currentPage <= 3 ? pageNum : 
                                     currentPage >= totalPages - 2 ? totalPages - 4 + pageNum :
                                     currentPage - 2 + pageNum;
                    
                    if (actualPage > totalPages) return null;
                    
                    return (
                      <Button
                        key={actualPage}
                        variant={currentPage === actualPage ? 'primary' : 'secondary'}
                        size="sm"
                        onClick={() => handlePageChange(actualPage)}
                      >
                        {actualPage}
                      </Button>
                    );
                  })}
                  
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
