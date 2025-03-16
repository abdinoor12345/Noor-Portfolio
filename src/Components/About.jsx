import React from 'react';
 
const About = () => {
    return (
        <div id="about" className="flex flex-col items-center justify-between gap-10 px-4 sm:px-8 md:px-20 py-10 max-w-screen-lg mx-auto">
            {/* Title Section */}
            <div className="relative text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">About me</h1>
            </div>

            {/* About Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
                {/* Image */}
                

                {/* About Text */}
                <div className="flex flex-col gap-5 text-lg sm:text-xl font-medium text-center md:text-left">
                    <p>I am a skilled full-stack developer proficient in both front-end and back-end technologies, 
                        with experience in creating robust and efficient web applications.</p>
                    <p>I have a strong foundation in HTML, CSS, JavaScript, and backend languages like Python, PHP, 
                        enabling me to deliver end-to-end solutions tailored to client needs.</p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col gap-5 w-full max-w-md sm:max-w-lg">
                {[
                    { skill: 'HTML & CSS', width: 'w-4/5' },
                    { skill: 'PHP (Laravel)', width: 'w-4/5' },
                    { skill: 'JavaScript', width: 'w-3/5' },
                    { skill: 'React JS', width: 'w-5/5' },
                ].map(({ skill, width }, index) => (
                    <div key={index} className="flex items-center gap-5 hover:scale-105 transition duration-300">
                        <p className="min-w-[130px] sm:min-w-[150px] text-lg font-medium">{skill}</p>
                        <hr className={`h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full ${width}`} />
                    </div>
                ))}
            </div>

            {/* Achievements Section */}
            <div className="flex flex-wrap justify-center gap-5 w-full">
                {[
                    { count: '5+', label: 'YEARS OF EXPERIENCE' },
                    { count: '90+', label: 'PROJECTS COMPLETED' },
                    { count: '15+', label: 'HAPPY CLIENTS' },
                ].map(({ count, label }, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 transition transform hover:scale-110">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 to-purple-500 bg-clip-text text-transparent">
                            {count}
                        </h1>
                        <p className="text-base sm:text-lg font-medium">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
