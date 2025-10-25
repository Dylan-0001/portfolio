
export const StackCard = ({item}) => {

    return(
        <div key={item.id} className="favourite-stack__card">
            <div className="favourite-stack__icon">
                <img src={item.icon} alt={item.name}/>
            </div>
        </div>
    );
}