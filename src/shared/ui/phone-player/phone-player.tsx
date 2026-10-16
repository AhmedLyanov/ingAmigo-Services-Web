import type { FC } from 'react';

export interface PlayerProps {
  videoSrc: string;
  className?: string;
}

export const PhonePlayer: FC<PlayerProps> = ({ videoSrc, className = '' }) => {
  return (
    <div className={`
      w-[270px] sm:w-[280px] md:w-[350px] 
      mx-auto md:mx-0 
      ${className}
    `}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto" 
        className="w-full h-auto block select-none pointer-events-none  [clip-path:inset(0_0_2px_0)]"
      >
        <source src={videoSrc} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
};
