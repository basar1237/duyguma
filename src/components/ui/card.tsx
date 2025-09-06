import React from 'react';
import { cn } from '@/utils/cn';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  subtitle,
  image,
  href,
  ...props
}) => {
  const CardComponent = href ? 'a' : 'div';
  
  return (
    <CardComponent
      className={cn(
        'card rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md',
        href && 'cursor-pointer hover:scale-[1.02]',
        className
      )}
      href={href}
      {...props}
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title || 'Card image'}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-description">{subtitle}</p>}
        </div>
      )}
      
      <div className="card-content">
        {children}
      </div>
    </CardComponent>
  );
};

export default Card;
