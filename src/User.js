export const User = ({ data }) => {
    return (
        <ul>
            {data.map((obj) => {
                return (
                    <li key={obj.email}>
                        <p>{obj.name.first}</p>
                        <div><img src={obj.picture.large} alt={'img'+obj.name.first} /></div>
                    </li>
                )
            })}
        </ul>
    )
};
