
const ProjectItem =(props)=>{
    const {projectDetails} = props;
    const {imageURL, title, description} = projectDetails;

 
    return(
        <li className="card card-container  p-1 m-1">
            <img src={imageURL}  alt={title} className="w-100"/>
            <h1>{title}</h1>
            <p>{description}</p>
        </li>
    )
}

export default ProjectItem;