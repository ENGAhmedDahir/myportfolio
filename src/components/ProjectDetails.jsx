import { useParams } from "react-router-dom";
import { projects } from "../constants";
import { SquareArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
    const { id } = useParams(); // Get project ID from URL
    const project = projects.find(proj => proj.id === parseInt(id, 10)); // Find project

    if (!project) {
        return <div className="text-center text-red-500">Project not found</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-8 mt-[100px]">
                {/* Image Section */}
                <div className="relative h-[400px] w-full md:w-1/2 overflow-hidden rounded-xl">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                </div>

                {/* Project Info */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
                    <p className="mt-4 text-lg text-gray-700">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="px-4 py-2 bg-primary-50 text-white rounded-lg text-sm">#{tag}</span>
                        ))}
                    </div>

                    {/* Visit Project Link */}
                    {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-primary-50 text-white px-6 py-3 rounded-lg">
                        Visit Project <SquareArrowUpRight />
                    </a> */}

                    {/* Video Demo Section */}
                    {project.video && (
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-gray-900">Project Demo</h2>
                            <div className="mt-4 w-full h-64 md:h-80">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src={project.video}
                                    title="Project Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {/* Back Button */}
                    <div className="mt-4">
                        <Link to="/" className="text-primary-50 underline">Back to Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;