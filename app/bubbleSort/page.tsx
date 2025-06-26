'use client'
import { bubbleSort } from "../utils/bubbleSort1";
import { useState } from "react";
import AlgoModal from '@/app/components/AlgoModal';

export default function BubbleSort() {
    const [originalArray] = useState<number[]>([64, 34, 25, 12, 22, 11, 90]);
    const [sortedArray, setSortedArray] = useState<number[]>([]);
    const [showIndex, setShowIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSortClick = () => {
        const result = bubbleSort();
        setSortedArray(result);
        
        // Start animation - reveal one element every 100ms
        setIsAnimating(true);
        setShowIndex(0);
        
        result.forEach((_, index) => {
            setTimeout(() => {
                setShowIndex(index + 1);
                if (index === result.length - 1) {
                    setIsAnimating(false);
                }
            }, index * 500);
        });
    };

    return (
        <div className="min-h-screen p-8">
            <h1>Bubble Sort Visualizer</h1>
            <p>See how the Bubble Sort works!</p>
            
            <button className="m-1 border border-black" onClick={handleSortClick}>
                Sort Array
            </button>
            
            <button className="m-1 border border-black" onClick={() => setShowModal(true)}>
                About This Algo
            </button>

            {/* Original Array */}
            <div className="mt-8">
                <h3>Original Array:</h3>
                <div className="flex gap-2 mt-4">
                    {originalArray.map((value, index) => (
                        <div 
                            key={index}
                            className="w-16 h-16 bg-red-300 border border-black flex items-center justify-center"
                        >
                            {value}
                        </div>
                    ))}
                </div>
            </div>

            {/* Sorted Array (revealed slowly) */}
            {sortedArray.length > 0 && (
                <div className="mt-8">
                    <h3>Sorted Array:</h3>
                    <div className="flex gap-2 mt-4">
                        {sortedArray.map((value, index) => (
                            <div 
                                key={index}
                                className={`w-16 h-16 border border-black flex items-center justify-center ${
                                    index < showIndex ? 'bg-green-300' : 'bg-gray-200'
                                }`}
                            >
                                {index < showIndex ? value : '?'}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <AlgoModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Bubble Sort"
                description="Watch the largest values 'bubble' to the right, just like bubbles rising to the surface!"
                howItWorks="Compares adjacent elements and swaps them if they're in wrong order. Repeats until no swaps are needed."
                timeComplexity={{
                    best: "O(n)",
                    worst: "O(n²)",
                    average: "O(n²)"
                }}
                rating={3}
                ratingDescription="Good for learning algorithms, but too slow for real-world use with large datasets."
            />
        </div>
    );
}