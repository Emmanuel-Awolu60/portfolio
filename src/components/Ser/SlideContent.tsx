// SlideContent.tsx
import React from 'react';
import "./SlideContent.css"

interface SlideContentProps {
    icon: React.ReactNode;
    step: string;
    title: string;
    description: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const SlideContent: React.FC<SlideContentProps> = ({
    icon,
    step,
    title,
    description,
    buttonText = 'Learn More',
    onButtonClick = () => { },
}) => {
    return (
        <div className='top-div py-10 px-9 mb-5 rounded-lg transition-all relative'>
            <div className="flex items-center mb-10">
                <span className="text-3xl mr-2">{icon}</span>
                <h1 className="number absolute text-6xl font-bold">{step}</h1>
            </div>
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <button
                className=""
                onClick={onButtonClick}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default SlideContent;
