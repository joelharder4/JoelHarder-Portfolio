import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
    const { projectName } = useParams();

    return (
        <div>
            projectName
        </div>
    );
}

export default ProjectPage;