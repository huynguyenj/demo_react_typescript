import {useState } from "react";

type AllowedTypes = "number" | "string" | "boolean" | "object";

function Generic() {
    // Generic array state
    const [arrayType, setArrayType] = useState<AllowedTypes | null>(null);
    const [array, setArray] = useState<unknown[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    // Handle type selection
    const handleTypeSelection = (type: AllowedTypes) => {
        setArrayType(type);
        setArray([]); // Clear the array when a new type is selected
        setError(null);
    };
    
    // Add an element to the array
    const handleAddElement = <T,>(value: string, type: AllowedTypes) => {
        if (arrayType === null) {
        setError("Please select the array type first.");
        return;
        }
    
        if (arrayType !== type) {
        setError(`Invalid input. The array is of type ${arrayType}.`);
        return;
        }
    
        try {
        let parsedValue: T;
    
        // Parse the value based on the type
        switch (type) {
            case "number":
            parsedValue = parseFloat(value) as T;
            if (isNaN(parsedValue as number)) {
                throw new Error("Invalid number.");
            }
            break;
            case "boolean":
            if (value.toLowerCase() === "true") parsedValue = true as T;
            else if (value.toLowerCase() === "false") parsedValue = false as T;
            else throw new Error("Invalid boolean. Enter 'true' or 'false'.");
            break;
            case "object":
            parsedValue = JSON.parse(value) as T;
            if (typeof parsedValue !== "object" || Array.isArray(parsedValue)) {
                throw new Error("Invalid object. Please enter valid JSON.");
            }
            break;
            case "string":
            parsedValue = value as T;
            break;
            default:
            throw new Error("Unsupported type.");
        }
    
        // Add the parsed value to the array
        setArray((prev) => [...prev, parsedValue]);
        setError(null); // Clear any existing error
        } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred.");
        }
    };
    
    // Clear the array and type
    const handleClearArray = () => {
        setArrayType(null);
        setArray([]);
        setError(null);
    };
    
    return (
        <div className="p-4 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Type-Safe Array Manager</h1>
        
            {/* Step 1: Select array type */}
            {arrayType === null ? (
                <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Select the type for your array:</h2>
                <div className="flex gap-2">
                    {(["number", "string", "boolean", "object"] as AllowedTypes[]).map((type) => (
                    <button
                        key={type}
                        onClick={() => handleTypeSelection(type)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        {type}
                    </button>
                    ))}
                </div>
                </div>
            ) : (
                <div className="mb-4">
                <h2 className="text-lg font-semibold">
                    Current array type: <span className="text-blue-600">{arrayType}</span>
                </h2>
                <button
                    onClick={handleClearArray}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Clear Array and Start Over
                </button>
                </div>
            )}
        
            {/* Display array contents */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Array Contents:</h2>
                {array.length > 0 ? (
                <pre className="p-2 bg-gray-100 border rounded mt-2">{JSON.stringify(array, null, 2)}</pre>
                ) : (
                <p className="mt-2 text-gray-500">The array is currently empty.</p>
                )}
            </div>
        
            {/* Display error messages */}
            {error && <p className="mt-4 text-red-500 font-semibold">{error}</p>}

            <br></br>
            {/* Step 2: Add elements to the array */}
            {arrayType !== null && (
                <div>
                <h2 className="text-lg font-semibold mb-2">Add elements to the array:</h2>
                <div className="grid grid-cols-1 gap-2">
                    <label>
                    Add a <strong>number</strong>:
                    <input
                        type="text"
                        className="block w-full mt-1 p-2 border rounded"
                        placeholder="Enter a number"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleAddElement<number>(e.currentTarget.value, "number")
                                e.currentTarget.value = ""; // Clear the input
                            }
                        }}
                    />
                    </label>
                    <label>
                    Add a <strong>string</strong>:
                    <input
                        type="text"
                        className="block w-full mt-1 p-2 border rounded"
                        placeholder="Enter a string"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleAddElement<string>(e.currentTarget.value, "string")
                                e.currentTarget.value = ""; // Clear the input
                            }
                        }}
                    />
                    </label>
                    <label>
                    Add a <strong>boolean</strong> (true/false):
                    <input
                        type="text"
                        className="block w-full mt-1 p-2 border rounded"
                        placeholder="Enter true or false"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleAddElement<boolean>(e.currentTarget.value, "boolean")
                                e.currentTarget.value = ""; // Clear the input
                            }
                        }}
                    />
                    </label>
                    <label>
                    Add an <strong>object</strong> (JSON format):
                    <input
                        type="text"
                        className="block w-full mt-1 p-2 border rounded"
                        placeholder='Enter an object, e.g., {"key":"value"}'
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleAddElement<object>(e.currentTarget.value, "object")
                                e.currentTarget.value = ""; // Clear the input
                            }
                        }}
                    />
                    </label>
                </div>
                </div>
            )}

        </div>
    );
}

export default Generic;