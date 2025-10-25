
export const ExpertiseCard = ({item}) => {

    return(
        <div key={item.id} className="expertise__card">
            <div className="expertise__card-header">
                <h3 className="expertise__card-title">{item.title}</h3>
            </div>
            <p className="expertise__description">{item.description}</p>
        </div>
    );

}