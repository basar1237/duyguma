// Blog Post Interface
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readingTime: number;
  views: number;
  likes: number;
  isPublished: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

// Category Interface
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
  postCount: number;
  isActive: boolean;
}

// Tag Interface
export interface Tag {
  id: string;
  name: string;
  slug: string;
  color: string;
  postCount: number;
}

// SEO Interface
export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonical?: string;
}

// API Response Interfaces
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Theme Interface
export interface Theme {
  mode: 'light' | 'dark';
  primary: string;
  accent: string;
}

// Form Interfaces
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}

// Navigation Interface
export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

// Component Props Interfaces
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  image?: string;
  href?: string;
}

// Utility Types
export type Status = 'idle' | 'loading' | 'success' | 'error';

export type SortOrder = 'asc' | 'desc';

export type FilterType = 'category' | 'tag' | 'author' | 'date';
