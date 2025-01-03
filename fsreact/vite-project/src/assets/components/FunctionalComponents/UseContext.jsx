import Component1 from './ContextComponent/Component1';
import Component2 from './ContextComponent/Component2'; // Add this line to import Component2
import { createContext } from 'react';

export var ThemeContext = createContext(); // Renaming the context for clarity

var ExamResults = () => {
    return (
        <section>
            <ThemeContext.Provider value={{ sgpa: "10.00", cgpa: "8.5" }}>
                <h1>This is an example UseContext - Parent Component</h1>
                <Component2 />
                <Component1 /> {/* You are now rendering Component2 correctly */}
            </ThemeContext.Provider>
        </section>
    );
}

export default ExamResults;
