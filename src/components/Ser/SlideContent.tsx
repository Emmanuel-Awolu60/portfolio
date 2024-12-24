// SlideContent.tsx
import React from 'react';

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
        <div className='bg-yellow-700 py-16 px-16  m'>
            <div className="flex items-center mb-4">
                <span className="text-xl mr-2">{icon}</span>
                <h1 className="font-bold text-lg">{step}</h1>
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
