import React from 'react';
import AuthLayout from '../../Components/Layout/AuthLayout';
import { projectImages } from '../../Data';

const Portfolio = () => {
    return (
        <AuthLayout>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Our Projects</h1>
                <div className="grid grid-cols-1 gap-4">
                    {projectImages.map((image, index) => (
                        <div key={index} className="w-full h-full">
                            <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </AuthLayout>
    );
};

export default Portfolio;
