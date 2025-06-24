interface AlgoModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    howItWorks: string;
    timeComplexity: {
        best: string;
        worst: string;
        average: string;
    };
    rating: number;
    ratingDescription: string;
}

export default function AlgoModal({
        isOpen,
        onClose,
        title,
        description,
        howItWorks,
        timeComplexity,
        rating,
        ratingDescription
}: AlgoModalProps) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md mx-4">
            <h2 className="text-xl font-bold mb-4">{title} 📊</h2>
            
            <p className="mb-4">
                <strong>Yooo what's up!</strong> {description}
            </p>
            
            <p className="mb-4">
                <strong>How it works:</strong> {howItWorks}
            </p>
            
            <div className="mb-4">
                <p><strong>Time Complexity:</strong></p>
                <p>• Best case: {timeComplexity.best}</p>
                <p>• Worst case: {timeComplexity.worst}</p>
                <p>• Average: {timeComplexity.average}</p>
            </div>
            
            <p className="mb-4">
                <strong>Rating: {rating}/10</strong> 🌟<br/>
                {ratingDescription}
            </p>
            
            <p className="text-md text-gray-800 mb-4">
                <em>(This visualization is slowed down 200,000x for clarity!)</em>
            </p>
            
            <button 
                className="border border-black px-4 py-2" 
                onClick={onClose}
            >
                Close
            </button>
            </div>
        </div>
    );
}