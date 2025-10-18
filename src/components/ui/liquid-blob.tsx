import React, { useState, useRef, useEffect } from 'react';

interface LiquidBlobProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'cyan' | 'purple';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  draggable?: boolean;
  blobCount?: number;
}

const LiquidBlob: React.FC<LiquidBlobProps> = ({
  className = '',
  size = 'lg',
  color = 'cyan',
  position = 'center',
  draggable = true,
  blobCount = 15
}) => {
  const [selectedBlob, setSelectedBlob] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'w-96 h-96',
    md: 'w-[32rem] h-[32rem]',
    lg: 'w-[40rem] h-[40rem]',
    xl: 'w-[48rem] h-[48rem]'
  };

  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    cyan: 'bg-cyan-400',
    purple: 'bg-purple-500'
  };

  const positionClasses = {
    'top-left': 'top-10 left-10',
    'top-right': 'top-10 right-10',
    'bottom-left': 'bottom-10 left-10',
    'bottom-right': 'bottom-10 right-10',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };

  // Generate random positions for each blob
  const generateBlobPositions = () => {
    const positions = [];
    for (let i = 0; i < blobCount; i++) {
      positions.push({
        left: Math.random() * 400 - 200, // -200px to 200px
        top: Math.random() * 400 - 200,
        size: Math.random() * 100 + 100, // 100px to 200px
        delay: Math.random() * 2 + 1 // 1s to 3s delay
      });
    }
    return positions;
  };

  const [blobPositions] = useState(generateBlobPositions());

  // Mouse event handlers for dragging
  const handleMouseDown = (e: React.MouseEvent, blobElement: HTMLElement) => {
    if (!draggable) return;
    setSelectedBlob(blobElement);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!selectedBlob || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const blobRect = selectedBlob.getBoundingClientRect();
    
    const newLeft = e.clientX - containerRect.left - (blobRect.width / 2);
    const newTop = e.clientY - containerRect.top - (blobRect.height / 2);
    
    selectedBlob.style.left = `${newLeft}px`;
    selectedBlob.style.top = `${newTop}px`;
    selectedBlob.style.animation = 'none';
  };

  const handleMouseUp = () => {
    if (!selectedBlob) return;
    
    selectedBlob.style.animation = 'bounceback 1s ease forwards';
    
    setTimeout(() => {
      if (selectedBlob) {
        selectedBlob.style.animation = '';
        selectedBlob.style.left = '';
        selectedBlob.style.top = '';
      }
    }, 1000);
    
    setSelectedBlob(null);
  };

  useEffect(() => {
    if (selectedBlob) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [selectedBlob]);

  return (
    <>
      {/* SVG Filter for Goo Effect */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="absolute opacity-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        className={`
          absolute ${sizeClasses[size]} ${positionClasses[position]}
          glowy-blob
          ${className}
        `}
        style={{
          filter: 'url(#goo)',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {blobPositions.map((pos, index) => (
          <div
            key={index}
            className={`
              ${colorClasses[color]}
              rounded-full absolute inline-block
              ${draggable ? 'cursor-grab hover:cursor-grab' : 'cursor-default'}
              ${selectedBlob ? 'z-50' : 'z-10'}
            `}
            style={{
              width: `${pos.size}px`,
              height: `${pos.size}px`,
              left: index === 0 ? '0px' : `${pos.left}px`,
              top: index === 0 ? '0px' : `${pos.top}px`,
              boxShadow: `0px 0px 120px ${color === 'cyan' ? '#22d3ee' : color === 'purple' ? '#a855f7' : 'var(--primary)'}`,
              animation: `anim-${index} 2.5s ease-in-out infinite`,
              animationDelay: `${pos.delay}s`
            }}
            onMouseDown={(e) => handleMouseDown(e, e.currentTarget)}
          />
        ))}
      </div>
    </>
  );
};

export default LiquidBlob;

