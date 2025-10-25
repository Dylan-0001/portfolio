
export const ExperienceCard = ({list}) => {

    return(
        <div key={list.id} className="experience__card">
            <div className="experience__card-header">
                <h3 className="experience__company">{list.company}</h3>
                <span className="experience__period">{list.period}</span>
            </div>
            <h4 className="experience__role">{list.role}</h4>
            <p className="experience__description">{list.description}</p>
        </div>
    );

}