// binary search page
import { binarySearch } from "../utils/binarySearch";

export default function BinarySearch() {
    console.log(binarySearch(11)); // Should return 5
    console.log(binarySearch(99)); // Should return -1

    return (
        <div>
            <h1>Binary Search</h1>
        </div>
    );
}