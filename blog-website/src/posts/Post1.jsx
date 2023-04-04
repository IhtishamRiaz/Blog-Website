import React, { useContext, useEffect, useState } from 'react';
import Comments from '../components/Comments'
import { blogs } from '../context/BlogsProvider';
import { useParams } from 'react-router-dom';

const Post1 = () => {

    const { blogsList } = useContext(blogs);
    let { postid } = useParams();
    const [currentBlog, setCurrentBlog] = useState();

    useEffect(() => {
        let tempBlog = blogsList.find(item => item.id === parseInt(postid));

        if (tempBlog) {
            setCurrentBlog(tempBlog);
        }
        window.scrollTo(0, 0);
    }, [])



    return (
        <div className='post-page page'>
            <div className="my-container">

                <div className="title-text">
                    <h1>{currentBlog?.title}</h1>
                </div>

                <div className='post-img'>
                    <img src="https://picsum.photos/800/550?random=1" alt="" />
                </div>

                <div className="post-content">
                    <p>
                        {currentBlog?.description}
                    </p>

                    {/* <h2>
                        Introduction
                    </h2>
                    <p>
                        Human life has always depended heavily on agriculture, and as the population grows, so does the demand for food. Artificial intelligence (AI) can help farmers increase productivity, cut waste, and guarantee a sustainable food supply. Large-scale data management and analysis made possible by AI technology can lead to more precise and effective crop production.
                    </p>
                    <h2>
                        Precision Agriculture
                    </h2>
                    <p>
                        Using technology in farming, precision agriculture maximizes crop productivity. It uses sensors, GPS mapping, and drones to track crops and give farmers up-to-the-minute information on soil moisture, nutrient levels, and plant health. When deciding whether to water, fertilize, or harvest crops, this data can then be utilized to influence decisions. The way we grow and produce food could be completely changed by the use of AI into precision agriculture.
                    </p>
                    <h2>
                        AI in Crop Management
                    </h2>
                    <p>
                        Many types of data, such as weather patterns, soil moisture levels, and pest infestations, can be analyzed using artificial intelligence (AI). Predictive models can then be developed using this data to assist farmers in choosing when to plant, harvest, and use irrigation. AI may also be used to detect pests and diseases that could harm crops, allowing farmers to take precautions before any harm is done.
                    </p>
                    <h2>
                        Automated Farming
                    </h2>
                    <p>
                        Several areas of farming can be automated with AI, requiring less human involvement. Crops can be planted and harvested by autonomous tractors, for instance, while pesticides and herbicides can be applied to crops while being monitored by drones. This automation could lead to more resource- and waste-efficient farming.
                    </p>
                    <h2>
                        Smart Irrigation
                    </h2>
                    <p>
                        AI can be used to improve irrigation plans, utilize less water, and cut costs associated with water consumption. Artificial intelligence (AI) is used in smart irrigation systems to monitor soil moisture, weather, and plant requirements before adjusting the water supply. This enables farmers to boost agricultural yields, conserve water and other resources, and lower their risk of overwatering or under watering causing crop damage.
                    </p>
                    <h2>Crop Management</h2>
                    <p>
                        By analyzing data and making recommendations in real-time, AI can assist farmers in bettering crop management. For instance, farmers may identify and treat crop diseases, pests, and nutritional deficiencies using AI-powered technologies. This enables more precise and focused treatment, which can minimize costs by lowering the demand for pesticides and fertilizers.
                    </p>
                    <h2>
                        Supply Chain Optimization
                    </h2>
                    <p>
                        AI can help the supply chain be more efficient by making the logistics and distribution processes more effective. Artificial intelligence (AI) is able to assess data from a variety of sources, including weather, market demand, and transportation data, to offer real-time recommendations on the most effective method of shipping goods. As a result, there will be less waste, fewer transportation expenses, and more fresh food.

                    </p>
                    <h2>
                        Potential Impact on Food Production
                    </h2>
                    <p>
                        Artificial intelligence in agriculture has the potential to boost food output and raise food quality. The need for food is anticipated to rise dramatically as the world population approaches 10 billion by 2050. By increasing food yields, lowering production costs, and eliminating waste, AI can assist meet this demand. By encouraging more sustainable methods, this can also aid in lowering the impact of agriculture on the environment.
                    </p>
                    <p>
                        Concerns exist, though, on how AI will affect agriculture. Several academics are concerned that applying AI to agriculture may result in job losses and worsen wealth inequality. Moreover, the application of AI to agriculture may result in a concentration of power among big businesses with the financial means to do so. It's critical to make sure that all farmers and communities benefit equally from AI in agriculture.
                    </p>
                    <h2>
                        Conclusion
                    </h2>
                    <p>
                        By increasing crop yields, decreasing waste, and fostering sustainable practices, AI has the potential to revolutionize agriculture. Therefore, it's critical to address the possible dangers and issues related to the application of AI in agriculture. We can make sure that artificial intelligence is used to advance a more just and sustainable food system by adopting a deliberate and cooperative strategy.
                    </p> */}
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post1