import React, { createContext, useState } from 'react';

export const blogs = createContext();

const BlogsProvider = ({ children }) => {

    const [blogsList, setBlogsList] = useState([
        {
            id: 1,
            title: 'Best Places To Visit in 2023',
            category: 'travel',
            image: '/images/bestPlaces.jpg',
            description: 'Using technology in farming, precision agriculture maximizes crop productivity. It uses sensors, GPS mapping, and drones to track crops and give farmers up-to-the-minute information on soil moisture, nutrient levels, and plant health. When deciding whether to water, fertilize, or harvest crops, this data can then be utilized to influence decisions. The way we grow and produce food could be completely changed by the use of AI into precision agriculture.Human life has always depended heavily on agriculture, and as the population grows, so does the demand for food. Artificial intelligence (AI) can help farmers increase productivity, cut waste, and guarantee a sustainable food supply. Large-scale data management and analysis made possible by AI technology can lead to more precise and effective crop production.'
        },
        {
            id: 2,
            title: 'Upcoming T20 Series',
            category: 'cricket',
            image: '/images/upcomingT20.jpg',
            description: 'Many types of data, such as weather patterns, soil moisture levels, and pest infestations, can be analyzed using artificial intelligence (AI). Predictive models can then be developed using this data to assist farmers in choosing when to plant, harvest, and use irrigation. AI may also be used to detect pests and diseases that could harm crops, allowing farmers to take precautions before any harm is done.Several areas of farming can be automated with AI, requiring less human involvement. Crops can be planted and harvested by autonomous tractors, for instance, while pesticides and herbicides can be applied to crops while being monitored by drones. This automation could lead to more resource- and waste-efficient farming.'
        },
        {
            id: 3,
            title: 'What is React Router',
            category: 'development',
            image: '/images/reactRouter.png',
            description: `<p>React Router is a popular library that simplifies the process of client-side routing in React-based applications. It provides a set of components and utilities that make it easy to handle navigation between different views or pages within a web application, without the need to reload the entire page.</p>
            <h2>How it Works</h2>
            <p>React Router uses a declarative, component-based syntax to define the routing for a web application. The main components used in React Router are BrowserRouter, Switch, Route, and Link.</p>
            <p>BrowserRouter: This component provides a router that uses HTML5 history API to keep the URL in sync with the application's UI.</p>
            <p>Switch: This component is used to render the first child Route or Redirect that matches the current URL. This is useful for handling 404 errors and other types of unexpected routes.</p>
            <p>Route: This component is used to define a mapping between a URL and a React component. It can also pass parameters to the component through the URL.</p>
            <p>Link: This component is used to create links between different routes in the application.</p>
            <h2>Advanced Routing Scenarios</h2>
            <p>React Router provides several other components and utilities for handling advanced routing scenarios, such as nested routes, protected routes, and lazy loading.</p>
            <p>Nested Routes: React Router allows developers to define routes within routes, which is useful for creating complex web applications with multiple layers of navigation.</p>
            <p>Protected Routes: React Router provides components for handling authentication and authorization, such as Redirect and PrivateRoute.</p>
            <p>Lazy Loading: React Router also allows developers to load components lazily, which improves the performance of the web application by reducing the initial load time.</p>
            <h2>Conclusion</h2>
            <p>React Router is a powerful and flexible library for client-side routing in React-based applications. It simplifies the process of setting up routing and allows developers to create SPAs that are easy to use and navigate. With its comprehensive set of components and utilities, React Router is a must-have tool for any developer building modern web applications.</p>`
        },
        {
            id: 4,
            title: 'Pakistan Tour',
            category: 'travel',
            image: '/images/pakistanTour.jpg',
            description: 'AI can be used to improve irrigation plans, utilize less water, and cut costs associated with water consumption. Artificial intelligence (AI) is used in smart irrigation systems to monitor soil moisture, weather, and plant requirements before adjusting the water supply. This enables farmers to boost agricultural yields, conserve water and other resources, and lower their risk of overwatering or under watering causing crop damage.By analyzing data and making recommendations in real-time, AI can assist farmers in bettering crop management. For instance, farmers may identify and treat crop diseases, pests, and nutritional deficiencies using AI-powered technologies. This enables more precise and focused treatment, which can minimize costs by lowering the demand for pesticides and fertilizers.'
        },
        {
            id: 5,
            title: 'Introduction to JavaScript',
            category: 'development',
            image: '/images/itroductionJavascript.jpg',
            description: 'AI can be used to improve irrigation plans, utilize less water, and cut costs associated with water consumption. Artificial intelligence (AI) is used in smart irrigation systems to monitor soil moisture, weather, and plant requirements before adjusting the water supply. This enables farmers to boost agricultural yields, conserve water and other resources, and lower their risk of overwatering or under watering causing crop damage.By analyzing data and making recommendations in real-time, AI can assist farmers in bettering crop management. For instance, farmers may identify and treat crop diseases, pests, and nutritional deficiencies using AI-powered technologies. This enables more precise and focused treatment, which can minimize costs by lowering the demand for pesticides and fertilizers.'
        },
        {
            id: 6,
            title: 'Virat Kohli vs Babar Azam',
            category: 'cricket',
            image: '/images/ViratVSBaber.jpg',
            description: 'AI can be used to improve irrigation plans, utilize less water, and cut costs associated with water consumption. Artificial intelligence (AI) is used in smart irrigation systems to monitor soil moisture, weather, and plant requirements before adjusting the water supply. This enables farmers to boost agricultural yields, conserve water and other resources, and lower their risk of overwatering or under watering causing crop damage.By analyzing data and making recommendations in real-time, AI can assist farmers in bettering crop management. For instance, farmers may identify and treat crop diseases, pests, and nutritional deficiencies using AI-powered technologies. This enables more precise and focused treatment, which can minimize costs by lowering the demand for pesticides and fertilizers.'
        },
        {
            id: 7,
            title: 'AI in Agriculture',
            category: 'artificial intelligence',
            image: '/images/AIinAgriculture.jpg',
            description: 'AI can be used to improve irrigation plans, utilize less water, and cut costs associated with water consumption. Artificial intelligence (AI) is used in smart irrigation systems to monitor soil moisture, weather, and plant requirements before adjusting the water supply. This enables farmers to boost agricultural yields, conserve water and other resources, and lower their risk of overwatering or under watering causing crop damage.By analyzing data and making recommendations in real-time, AI can assist farmers in bettering crop management. For instance, farmers may identify and treat crop diseases, pests, and nutritional deficiencies using AI-powered technologies. This enables more precise and focused treatment, which can minimize costs by lowering the demand for pesticides and fertilizers.'
        },
        {
            id: 8,
            title: 'AI and Healthcare',
            category: 'artificial intelligence',
            image: '/images/AI-in-Healthcare.jpg',
            description: 'AI can be used to improve irrigation plans, utilize less water, and cut costs associated with water consumption. Artificial intelligence (AI) is used in smart irrigation systems to monitor soil moisture, weather, and plant requirements before adjusting the water supply. This enables farmers to boost agricultural yields, conserve water and other resources, and lower their risk of overwatering or under watering causing crop damage.By analyzing data and making recommendations in real-time, AI can assist farmers in bettering crop management. For instance, farmers may identify and treat crop diseases, pests, and nutritional deficiencies using AI-powered technologies. This enables more precise and focused treatment, which can minimize costs by lowering the demand for pesticides and fertilizers.'
        },
        {
            id: 9,
            title: 'AI and Cybersecurity',
            category: 'artificial intelligence',
            image: '/images/AI-in-CyberSecurity.jpg',
            description: 'AI can be used to improve irrigation plans, utilize less water, and cut costs associated with water consumption. Artificial intelligence (AI) is used in smart irrigation systems to monitor soil moisture, weather, and plant requirements before adjusting the water supply. This enables farmers to boost agricultural yields, conserve water and other resources, and lower their risk of overwatering or under watering causing crop damage.By analyzing data and making recommendations in real-time, AI can assist farmers in bettering crop management. For instance, farmers may identify and treat crop diseases, pests, and nutritional deficiencies using AI-powered technologies. This enables more precise and focused treatment, which can minimize costs by lowering the demand for pesticides and fertilizers.'
        },
        {
            id: 10,
            title: 'Budget Travel Tips',
            category: 'travel',
            image: '/images/Budget-Travel-Tips.jpg',
            description: 'AI can be used to improve irrigation plans, utilize less water, and cut costs associated with water consumption. Artificial intelligence (AI) is used in smart irrigation systems to monitor soil moisture, weather, and plant requirements before adjusting the water supply. This enables farmers to boost agricultural yields, conserve water and other resources, and lower their risk of overwatering or under watering causing crop damage.By analyzing data and making recommendations in real-time, AI can assist farmers in bettering crop management. For instance, farmers may identify and treat crop diseases, pests, and nutritional deficiencies using AI-powered technologies. This enables more precise and focused treatment, which can minimize costs by lowering the demand for pesticides and fertilizers.'
        },
    ]);

    const [usersData, setUsersData] = useState([
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, gender: 'Male', mobile: '03546987465', email: 'sample@gmailcom' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, gender: 'Female', mobile: '03546987465', email: 'sample@gmailcom' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, gender: 'Male', mobile: '03546987465', email: 'sample@gmailcom' },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, gender: 'Male', mobile: '03546987465', email: 'sample@gmailcom' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 45, gender: 'Female', mobile: '03546987465', email: 'sample@gmailcom' },
        { id: 6, lastName: 'Melisandre', firstName: 'John', age: 150, gender: 'Female', mobile: '03546987465', email: 'sample@gmailcom' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, gender: 'Male', mobile: '03546987465', email: 'sample@gmailcom' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, gender: 'Female', mobile: '03546987465', email: 'sample@gmailcom' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, gender: 'Female', mobile: '03546987465', email: 'sample@gmailcom' },
        { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65, gender: 'Female', mobile: '03546987465', email: 'sample@gmailcom' },
        { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65, gender: 'Female', mobile: '03546987465', email: 'sample@gmailcom' },
    ])


    return (
        <blogs.Provider value={{ blogsList, setBlogsList, usersData, setUsersData }}>
            {children}
        </blogs.Provider>
    );
}

export default BlogsProvider;