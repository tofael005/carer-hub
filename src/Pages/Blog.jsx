import React from 'react';

const Blog = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-40 grid md:grid-cols-2 gap-8 px-4 mb-64">
            <div className="border-2 border-gray-200 p-3 shadow-lg rounded-md">
                <h1 className="text-3xl font-bold py-3">What is react custom hook?</h1>
                <p className="text-gray-600">React custom hooks are a feature in React that allow you to extract reusable logic from your components into a reusable function. Custom hooks are functions that start with the word "use" and can call other hooks or other functions. Custom hooks can help you keep your components simple and focused, by removing complex or repeated logic and moving it into a separate function. They can also help you reuse logic across multiple components or pages, making it easier to maintain and update your code. For example, you could create a custom hook that fetches data from an API and returns the result as a state variable. You could then reuse that hook in multiple components, without having to repeat the API.</p>
            </div>
            <div className="border-2 border-gray-200 p-3 shadow-lg rounded-md">
                <h1 className="text-3xl font-bold py-3">What are the features of <span className="text-sky-600">React</span> ?</h1>
                <p className="text-gray-600">React is a popular JavaScript library for building user interfaces. Here are some of the key features of React: Component-based architecture: React is built around the idea of reusable UI components, which can be composed together to create complex user interfaces.Declarative programming: React uses a declarative programming style, which means that you describe what you want your UI to look like and React takes care of updating the DOM for you. Virtual DOM: React uses a virtual representation of the DOM, which allows it to update the UI efficiently by minimizing the number of DOM updates required.JSX: React uses a syntax extension called JSX, which allows you to write HTML-like code in your JavaScript .</p>
            </div>
            <div className="border-2 border-gray-200 p-3 shadow-lg rounded-md">
                <h1 className="text-3xl font-bold py-3">When should you use contest API?</h1>
                <p className="text-gray-600">The Contest API is a platform interface that allows you to create, manage and run contests on your website or app. If you have a need to run a contest or promotion that involves user participation, a Contest API can be a valuable tool. Here are some situations when you might want to use a Contest API: To engage your audience: Running a contest is a great way to keep your audience engaged and interested in your website or app. By using a Contest API, you can create and manage contests with ease.To increase brand awareness: Contests are a great way to increase your brand's visibility and awareness. By using a Contest API, you can easily create a contest that is aligned with your brand's values and goals.</p>
            </div>
            <div className="border-2 border-gray-200 p-3 shadow-lg rounded-md">
                <h1 className="text-3xl font-bold py-3">What is react UseREF?</h1>
                <p className="text-gray-600">I believe you may be referring to "React.useRef", which is a hook in the React JavaScript library. "React.useRef" is used to create a reference to a DOM element or a value that persists across re-renders of a React component.Here is an example of how to use React.useRef to create a reference to a DOM element:In this example, we create a reference to an input element using "React.useRef". We then use this reference to focus the input element when the button is clicked. Note that "React.useRef" can also be used to store values that persist across re-renders of a React component, not just DOM elements.</p>
            </div>
        </div>
    );
};

export default Blog;