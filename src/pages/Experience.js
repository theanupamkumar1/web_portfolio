import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    role: 'ML engineer intern',
    company: 'IBM',
    location: 'Virtual',
    duration: 'Jan 2023 - aug 2023',
    description: `Built Mental Fitness Tracker with Python & ML (Linear Regression, Random Forest, XGBoost) to predict mental fitness scores.
    Employed data preprocessing, feature engineering, model training, and evaluated with MSE & R-squared.
    Leveraged Matplotlib/Seaborn for data visualization and fostered collaboration with mental health professionals.`,
    skills: ['Python', 'Random Forest', 'EDA', 'Data viz']
  },
  {
    id: 2,
    role: 'Data Science Intern',
    company: 'i-Neuron',
    location: 'Remote',
    duration: 'Feb 2024 - May 2024',
    description: `Conducted EDA on Zomato Dataset to gain insights for building a predictive model for restaurant ratings.
    Performed data cleaning, including handling null values, renaming columns, dropping irrelevant columns, and addressing outliers.
    Trained and evaluated ML models like Linear Regression, Random Forest Regression, and Decision Tree Regression, with Random Forest achieving 90% accuracy in predicting ratings.`,
    skills: ['Decision Tree', 'Python', 'Pandas', 'Numpy', 'Sci-Kit Learn']
  },
 
];

const ExperiencePage = () => {
  const renderDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <li key={index} className="mb-2">
        {line}
      </li>
    ));
  };
  return (
    <div id ="experience" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <h2 className="top-20 text-5xl font-bold text-center mb-8">
        Experience
        <hr className="w-24 h-1 mx-auto my-4 bg-purple border-0 rounded md:my-5 dark:bg-gray-700" />
        {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
      </h2>
        <div className="space-y-8">
          {experienceData.map((job) => (
            <div key={job.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">{job.role}</h2>
                    <p className="text-lg text-gray-600">{job.company}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {job.duration}
                  </span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{job.location}</span>
                </div>

                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  {renderDescription(job.description)}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;