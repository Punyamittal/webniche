import React from 'react';
import './3d-card.css';

interface Card3DProps {
  title?: string;
  content?: string;
  month?: string;
  date?: string;
  seeMoreText?: string;
  className?: string;
}

export const Card3D: React.FC<Card3DProps> = ({
  title = '3D Card',
  content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  month = 'JUNE',
  date = '29',
  seeMoreText = 'See More',
  className = ''
}) => {
  return (
    <div className={`card-3d-wrapper ${className}`}>
      <div className="card-3d-parent">
        <div className="card-3d">
          <div className="card-3d-content-box">
            <span className="card-3d-title">{title}</span>
            <p className="card-3d-content">{content}</p>
            <span className="card-3d-see-more">{seeMoreText}</span>
          </div>
          <div className="card-3d-date-box">
            <span className="card-3d-month">{month}</span>
            <span className="card-3d-date">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3D;

