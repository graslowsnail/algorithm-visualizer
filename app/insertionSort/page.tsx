"use client";
import { useState } from "react";
import { createArray } from "@/app/utils/insertionSort";
import { insertionSort } from "@/app/utils/insertionSort";
import AlgoModal from '@/app/components/AlgoModal';

export default function Home() {
    const [userInput, setUserInput] = useState("");
    const [userArray, setUserArray] = useState<number[]>([]);
    const [sortingSteps, setSortingSteps] = useState<any[]>([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        const num = Number(userInput);
        if (num > 1000) {
            alert("Max 1000!");
            return;
        }
        const newArray = createArray(num);
        setUserArray(newArray);
        console.log("temp array in componet ", newArray);
    };

    const handleSortClick = () => {
        const steps = insertionSort(userArray);
        setSortingSteps(steps);
        console.log('All steps:', steps);
        
        // Start animation
        animateSteps(steps);
    };

    const animateSteps = (steps: any[]) => {
        setIsAnimating(true);
        
        steps.forEach((step, index) => {
            setTimeout(() => {
                setCurrentStep(index);
                setUserArray(step.array); // Update the bars
            }, index * 10); // 10ms between steps
        });
    };

    const maxValue = userArray.length > 0 ? Math.max(...userArray) : 1;

    const currentStepData = sortingSteps[currentStep] || { comparing: [] };

    return (
        <div className="min-h-screen p-8">
            <main>
                <h1>Insertion Sort Visualizer</h1>
                <p>See how the Insertion Sort works!</p>
                <input
                type="number"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter a number from 1-1000 "
                className="border border-black"
                />

                <button className="border border-black" onClick={handleClick}>
                submit value
                </button>

                <button className="border border-black" onClick={handleSortClick}>
                Sort your array
                </button>

                <button onClick={() => setShowModal(true)}>About This Algo</button>

                <div className="flex items-end w-full h-[70vh] mt-8"> {/* 70% viewport height */}
                    {userArray.map((value, index) => (
                        <div 
                            key={`${value}-${index}`}
                            style={{ 
                                width: `${100 / userArray.length}%`, // Dynamic width
                                height: `${(value / maxValue) * 100}%`, // Scale to container
                                backgroundColor: `hsl(${(value / maxValue) * 120}, 70%, 50%)`,
                                border: currentStepData.comparing?.includes(index) ? '3px solid black' : 'none' 
                            }}
                        />
                    ))}
                </div>
            </main>

            <AlgoModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Insertion Sort"
                description="This is a visualization of the Insertion Sort algorithm."
                howItWorks="Takes each element and finds the correct position in the already-sorted portion, just like sorting cards in your hand!"
                timeComplexity={{
                    best: "O(n)",
                    worst: "O(n²)",
                    average: "O(n²)"
                }}
                rating={6}
                ratingDescription="Great for small datasets and nearly sorted data, but gets slow with large arrays."
            />
        </div>
    );
}
